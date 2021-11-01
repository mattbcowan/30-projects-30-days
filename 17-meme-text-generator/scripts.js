let userText = document.getElementById("user_text");
let submitButton = document.querySelector(".submitBtn");
let generatedText = document.getElementById("generated_text");

let generateMemeText = (text) => {
  let finalText = [];
  for (let i = 0; i < text.length; i++) {
    if (i == 0 || i % 2 == 0) {
      finalText.push(text[i].toUpperCase());
    } else {
      finalText.push(text[i].toLowerCase());
    }
  }
  return finalText.join("");
};

submitButton.onclick = () => {
  generatedText.innerHTML = generateMemeText(userText.value);
};
