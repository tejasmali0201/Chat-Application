@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public Message sendMessage(@Payload Message message) {
        message.setTimestamp(LocalDateTime.now());
        messageRepository.save(message);
        return message;
    }

    @GetMapping("/{senderId}/{receiverId}")
    public List<Message> getMessages(@PathVariable Long senderId, @PathVariable Long receiverId) {
        return messageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
    }
}
