const socket = io("http://localhost:8080");

const userList = document.getElementById("user-list");
const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatWith = document.getElementById("chat-with");

let selectedUser = null;

// Fetch registered users
function fetchUsers() {
    fetch("http://localhost:8080/api/users")
        .then(response => response.json())
        .then(users => {
            userList.innerHTML = "";
            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.username;
                li.onclick = () => selectUser(user);
                userList.appendChild(li);
            });
        });
}

// Select a user to chat with
function selectUser(user) {
    selectedUser = user;
    chatWith.textContent = `Chat with ${user.username}`;
    fetchMessages(user.id);
}

// Fetch old messages
function fetchMessages(userId) {
    fetch(`http://localhost:8080/api/messages/${userId}`)
        .then(response => response.json())
        .then(messages => {
            chatMessages.innerHTML = "";
            messages.forEach(msg => {
                displayMessage(msg.content, msg.senderId === selectedUser.id ? "received" : "sent");
            });
        });
}

// Display a message in the chat window
function displayMessage(message, type) {
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.textContent = message;
    chatMessages.appendChild(div);
}

// Send a new message
function sendMessage() {
    if (selectedUser && messageInput.value.trim()) {
        const message = {
            senderId: 1, // Replace with the logged-in user ID
            receiverId: selectedUser.id,
            content: messageInput.value.trim(),
        };
        socket.emit("sendMessage", message);
        displayMessage(message.content, "sent");
        messageInput.value = "";
    }
}

// Listen for incoming messages
socket.on("receiveMessage", message => {
    if (message.senderId === selectedUser?.id) {
        displayMessage(message.content, "received");
    }
});

// Event Listeners
sendButton.onclick = sendMessage;
messageInput.onkeypress = (e) => {
    if (e.key === "Enter") sendMessage();
};

// Initialize
fetchUsers();
