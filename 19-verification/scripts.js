const inputs = [...document.querySelectorAll("input.codeInput")];

inputs.forEach((element, index) => {
  // Handle backspace

  element.addEventListener("keydown", (e) => {
    let backspace = 8;
    if (e.keyCode === backspace && e.target.value === "")
      inputs[Math.max(0, index - 1)].focus();
  });
  element.addEventListener("input", (e) => {
    const [first, ...rest] = e.target.value;
    e.target.value = first ?? "";
    if (index !== inputs.length - 1 && first !== undefined) {
      inputs[index + 1].focus();
      inputs[index + 1].value = rest.join("");
      inputs[index + 1].dispatchEvent(new Event("input"));
    }
  });
});
