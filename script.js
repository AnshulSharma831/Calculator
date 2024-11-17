const display = document.getElementById('display');

// Appends numbers to the display
function appendNumber(number) {
  display.value = display.value + number;
}

// Appends operators to the display
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if ('+-*/%'.includes(lastChar)) return; // Prevent consecutive operators
  display.value = display.value + operator;
}

// Clears the entire display
function clearDisplay() {
  display.value = '';
}

// Deletes the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluates the result
function calculateResult() {
  try {
    display.value = eval(display.value); // Evaluates the mathematical expression
  } catch {
    display.value = 'Error'; // Display error if the input is invalid
  }
}
