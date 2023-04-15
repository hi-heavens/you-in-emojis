const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiEl = document.getElementById("emoji-container");
const pushBtn = document.getElementById("push-btn");

function renderEmojis() {
  for (let i = 0; i < myEmojis.length; i++) {
    const emojiSpan = document.createElement("span");
    emojiSpan.textContent = myEmojis[i];
    emojiEl.append(emojiSpan);
  }
}

renderEmojis();

pushBtn.addEventListener("click", function () {
  const inputEl = document.getElementById("emoji-input");
  const emoji = inputEl.value;
  if (emoji) {
    myEmojis.push(emoji);
    inputEl.value = "";
    emojiEl.innerHTML = "";
    renderEmojis();
  }
});
