function getInputValueElementById(id){
  let inputValue = document.getElementById(id).value;
  let inputNumber = parseFloat(inputValue)
  return inputNumber;
}

function getElementValueTextById(id){
  let textValue = document.getElementById(id).innerText
  let textNumber = parseFloat(textValue);
  return textNumber;
}


function showSection(id){
  document.getElementById('add-money-form').classList.add('hidden')
  document.getElementById('cash-out-form').classList.add('hidden')
  document.getElementById('transection-history').classList.add('hidden')

  document.getElementById(id).classList.remove('hidden');
}

