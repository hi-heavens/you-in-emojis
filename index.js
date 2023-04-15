const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiEl = document.getElementById("emoji-container");
const inputEl = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");

function renderEmojis() {
  emojiEl.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emojiSpan = document.createElement("span");
    emojiSpan.textContent = myEmojis[i];
    emojiEl.append(emojiSpan);
  }
}

renderEmojis();

pushBtn.addEventListener("click", function () {
  const emoji = inputEl.value;
  if (emoji) {
    myEmojis.push(emoji);
    inputEl.value = "";
    renderEmojis();
  }
});

unshiftBtn.addEventListener("click", function () {
  const emoji = inputEl.value;
  if (emoji) {
    myEmojis.unshift(emoji);
    inputEl.value = "";
    renderEmojis();
  }
});
