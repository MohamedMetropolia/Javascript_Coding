function calculate() {
  let operation = document.getElementById('operation').value;
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  switch (operation) {
    case 'addition':
      result.innerHTML = num1 + num2;
      break;
    case 'subtraction':
      result.innerHTML = num1 - num2;
      break;
    case 'multiplication':
      result.innerHTML = num1 * num2;
      break;
    case 'division':
      result.innerHTML = (num1 / num2).toFixed(2);
      break;
  }
}

start.addEventListener('click', calculate);