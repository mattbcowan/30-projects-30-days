let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");
let sum = document.getElementById("sum");
let clear = document.getElementById("clear");
let total = 0;
let currentNumber = 0;
let currentFunction = "";

let addition = (a, b) => {
  return a + b;
};

let subtraction = (a, b) => {
  return a - b;
};

let multiplication = (a, b) => {
  return a * b;
};

let division = (a, b) => {
  return a / b;
};

let getNumberInput = (currentNumber, numberClicked) => {
  currentNumber = parseInt(currentNumber.toString() + numberClicked.toString());
  handleTotal(currentNumber);
  return currentNumber;
};

let handleTotal = (number) => {
  sum.innerHTML = number;
};

let handleMath = (total, numberInput, typeOfMath) => {
  if (typeOfMath === "addition") {
    return addition(total, numberInput);
  }
  if (typeOfMath === "subtraction") {
    return subtraction(total, numberInput);
  }
  if (typeOfMath === "multiplication") {
    return multiplication(total, numberInput);
  }
  if (typeOfMath === "division") {
    return division(total, numberInput);
  }
};

let inputHandler = (element, funcToCall) => {
  element.addEventListener("click", funcToCall);
};

inputHandler(one, () => {
  return (currentNumber = getNumberInput(currentNumber, 1));
});
inputHandler(two, () => {
  return (currentNumber = getNumberInput(currentNumber, 2));
});
inputHandler(three, () => {
  return (currentNumber = getNumberInput(currentNumber, 3));
});
inputHandler(four, () => {
  return (currentNumber = getNumberInput(currentNumber, 4));
});
inputHandler(five, () => {
  return (currentNumber = getNumberInput(currentNumber, 5));
});
inputHandler(six, () => {
  return (currentNumber = getNumberInput(currentNumber, 6));
});
inputHandler(seven, () => {
  return (currentNumber = getNumberInput(currentNumber, 7));
});
inputHandler(eight, () => {
  return (currentNumber = getNumberInput(currentNumber, 8));
});
inputHandler(nine, () => {
  return (currentNumber = getNumberInput(currentNumber, 9));
});
inputHandler(zero, () => {
  return (currentNumber = getNumberInput(currentNumber, 0));
});
inputHandler(clear, () => {
  return (
    (currentNumber = 0), (total = 0), (currentFunction = ""), handleTotal(0)
  );
});
inputHandler(add, () => {
  currentFunction = "addition";
  total = currentNumber;
  currentNumber = 0;
});
inputHandler(subtract, () => {
  currentFunction = "subtraction";
  total = currentNumber;
  currentNumber = 0;
});
inputHandler(multiply, () => {
  currentFunction = "multiplication";
  total = currentNumber;
  currentNumber = 0;
});
inputHandler(divide, () => {
  currentFunction = "division";
  total = currentNumber;
  currentNumber = 0;
});

inputHandler(equal, () => {
  currentTotal = handleMath(total, currentNumber, currentFunction);
  currentNumber = currentTotal;
  handleTotal(currentTotal);
});
