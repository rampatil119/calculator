function appendToDisplay(value) {
  document.getElementById('display').value+=value
}

function clearDisplay(){
  document.getElementById('display').value='';
}

function calculateResult() {
  let expression=document.getElementById('display').value

  try {
    document.getElementById('display').value=eval(expression)
  } catch (error) {
    document.getElementById('display').value='error';
  }
}