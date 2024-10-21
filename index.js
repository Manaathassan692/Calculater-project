const buttons = [
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-', 
    '0', 'C', '=', '+'
  ];
  
  const calculatorContainer = document.querySelector('.buttons');
  const display = document.getElementById('display');
  
  let currentInput = '';
  let previousInput = '';
  let operator = '';
  
  // Create buttons dynamically using JavaScript
  buttons.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = button;
    calculatorContainer.appendChild(buttonElement);
  
    // Style operators and special buttons differently
    if (['+', '-', '*', '/'].includes(button)) {
      buttonElement.classList.add('button-operator');
    } else if (button === 'C') {
      buttonElement.classList.add('button-clear');
    } else if (button === '=') {
      buttonElement.classList.add('button-equal');
    }
  
    // Add click event to each button
    buttonElement.addEventListener('click', () => {
      if (button === 'C') {
        clearDisplay();
      } else if (button === '=') {
        calculate();
      } else if (['+', '-', '*', '/'].includes(button)) {
        chooseOperator(button);
      } else {
        appendNumber(button);
      }
    });
  });
  
  // Clear the display
  function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
  }
  
  // Append numbers to the display
  function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
  }
  
  // Choose an operator (+, -, *, /)
  function chooseOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
      calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
  }
  
  // Calculate the result
  function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
  
    if (isNaN(prev) || isNaN(curr)) return;
  
    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        result = prev / curr;
        break;
      default:
        return;
    }
  
    currentInput = result;
    operator = '';
    previousInput = '';
    display.value = result;
  }
  