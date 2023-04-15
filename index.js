const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiEl = document.getElementById("emoji-container");
const pushBtn = document.getElementById("push-btn");
const inputEl = document.getElementById("emoji-input");

for (let i = 0; i < myEmojis.length; i++) {
  const emojiSpan = document.createElement("span");
  emojiSpan.textContent = myEmojis[i];
  emojiEl.append(emojiSpan);
}

pushBtn.addEventListener('click', function(){
    console.log(inputEl.value);
})