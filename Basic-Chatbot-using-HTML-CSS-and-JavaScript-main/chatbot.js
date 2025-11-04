// ==== Gemini Free Chatbot ====

// Select elements
const chatbot = document.getElementById("chatbot");
const conversation = document.getElementById("conversation");
const inputForm = document.getElementById("input-form");
const inputField = document.getElementById("input-field");

// 🧠 Gemini API Key (get it free from https://aistudio.google.com/app/apikey)
const GEMINI_API_KEY = "AIzaSyARpIN4r5N2J6z56NHUdDl0BotoXa98tJQ"; // 👈 replace this with your own key (starts with AIza)

// ✅ Google Gemini API endpoint
// ✅ Correct Gemini API URL for the new key
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
  GEMINI_API_KEY;

// 🗣️ Handle user input 
inputForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = inputField.value.trim();
  if (!input) return;

  inputField.value = "";

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  addMessage(input, "user-message", currentTime);

  const loadingMessage = addMessage("Typing...", "chatbot", currentTime);

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: input }] }],
      }),
    });

    const data = await response.json();
    conversation.removeChild(loadingMessage);

    if (!response.ok) {
      console.error("Gemini API Error:", data);
      addMessage(
        "⚠️ API Error: " + (data.error?.message || "Unknown error."),
        "chatbot",
        currentTime
      );
      return;
    }

    // ✅ Extract Gemini's reply
    const parts = data?.candidates?.[0]?.content?.parts;
    const botReply = parts?.map((p) => p.text).join(" ") || "Sorry, I couldn’t understand that 😅";

    addMessage(botReply, "chatbot", currentTime);
  } catch (error) {
    console.error("Gemini Fetch Error:", error);
    conversation.removeChild(loadingMessage);
    addMessage("⚠️ Connection error. Please check your internet or API key.", "chatbot", currentTime);
  }
});

// 💬 Add message to chat
function addMessage(text, className, time) {
  const message = document.createElement("div");
  message.classList.add("chatbot-message", className);
  message.innerHTML = `<p class="chatbot-text" sentTime="${time}">${text}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({ behavior: "smooth" });
  return message;
}
