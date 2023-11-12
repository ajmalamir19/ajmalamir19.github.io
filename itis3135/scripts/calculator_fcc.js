// Selecting elements
const display = document.querySelector('#result'); // Change the display selection to match your HTML
const keys = document.querySelector('.calculator__keys');

// Variables to keep track of the calculation
let currentInput = '0';
let operator = null;
let prevInput = '0';
let resetInput = false;

// Function to update the display
function updateDisplay() {
  if (operator) {
    display.value = `${prevInput} ${operator} ${currentInput}`;
  } else {
    display.value = currentInput;
  }
}

// Function to handle button clicks
keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;

    // Handle number buttons
    if (!action) {
      if (currentInput === '0' || resetInput) {
        currentInput = keyContent;
        resetInput = false;
      } else {
        currentInput += keyContent;
      }
    }

    // Handle decimal button
    if (action === 'decimal') {
      if (!currentInput.includes('.')) {
        currentInput += '.';
      }
    }

    // Handle operator buttons
    if (action === '+' || action === '-' || action === '*' || action === '/') {
      if (operator) {
        // If an operator is already set, do nothing for now.
        // We will perform the calculation when '=' is clicked.
      } else {
        operator = action;
        prevInput = currentInput;
        currentInput = ''; // Reset the current input for the second operand.
        resetInput = true;
      }
    }

    // Handle equal button
    if (action === 'calculate') {
      if (operator) {
        performCalculation();
        operator = null;
      }
    }

    // Handle clear button
    if (action === 'clear') {
      currentInput = '0';
      operator = null;
      prevInput = '0';
      resetInput = false;
    }

    updateDisplay();
  }
});

// Function to perform the calculation
function performCalculation() {
  const prev = parseFloat(prevInput);
  const current = parseFloat(currentInput);

  if (operator === '+') {
    currentInput = (prev + current).toString();
  } else if (operator === '-') {
    currentInput = (prev - current).toString();
  } else if (operator === '*') {
    currentInput = (prev * current).toString();
  } else if (operator === '/') {
    if (current !== 0) {
      currentInput = (prev / current).toString();
    } else {
      // Handle division by zero
      currentInput = 'Error';
    }
  }
}

// Initial display update
updateDisplay();
