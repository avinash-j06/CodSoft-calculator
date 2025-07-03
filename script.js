// script.js

let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    let expression = display.innerText;
    let result = eval(expression.replace('%', '/100'));
    display.innerText = result;
    addToHistory(expression, result);
  } catch {
    display.innerText = 'Error';
  }
}

function addToHistory(expression, result) {
  let li = document.createElement('li');
  li.textContent = `${expression} = ${result}`;
  historyList.prepend(li); // Newest on top
}
