// chatbot.js - load with: <script src="chatbot.js" defer></script>
// Wrapped in an IIFE so its variable names can't clash with script.js
(function () {
  const chat = document.getElementById("chat");
  const messages = document.getElementById("messages");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const topicLabel = document.getElementById("chat-topic");
  let currentTopic = null;

  function addMessage(text, who) {
    const el = document.createElement("div");
    el.className = "msg " + who;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function openBot(topic) {
    // Start a fresh conversation if opened from a different button
    if (topic !== currentTopic) {
      messages.innerHTML = "";
      currentTopic = topic;
      topicLabel.textContent = topic;
      addMessage(
        "Hi! You're chatting with " + topic + ". How can I help?",
        "bot",
      );
    }
    chat.classList.add("open");
    chat.setAttribute("aria-hidden", "false");
    input.focus();
  }

  function closeBot() {
    chat.classList.remove("open");
    chat.setAttribute("aria-hidden", "true");
  }

  // Both buttons share the same handler
  document.querySelectorAll("[data-open-bot]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openBot(btn.dataset.topic);
    });
  });
  document.getElementById("chat-close").addEventListener("click", closeBot);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeBot();
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    const reply = await getBotReply(text, currentTopic);
    addMessage(reply, "bot");
  });

  // ===== CONNECT YOUR REAL BOT HERE =====
  // Note: your CSP only allows fetch() to 'self' and *.aptrinsic.com.
  // If your bot API is on another domain, add it to connect-src.
  async function getBotReply(message, topic) {
    return (
      'You said: "' +
      message +
      '". Connect getBotReply() to your bot to get real answers.'
    );
  }
})();
