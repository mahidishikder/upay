

document.getElementById('btn-add-money').addEventListener('click', function (e) {
  e.preventDefault();

  let inputAddMoney = getInputValueElementById('input-add-money');
  let inputPinNumber = getInputValueElementById('input-pin-number');
   
  if(isNaN(inputAddMoney)){
    alert('Please number amount');
    return;
  }
  if (inputPinNumber === 1234) {
    let totalAmount = getElementValueTextById('total-amount')
    let totalAndAdd = totalAmount + inputAddMoney;
    document.getElementById('total-amount').innerText = totalAndAdd
    // transection history
    let div = document.createElement('div');
    div.style.padding = '5px';
    div.style.borderRadius = '3px'
    div.classList.add('bg-green-600');
    div.innerHTML = `
      <h2 class="text-2xl font-semibold mb-1">Add Money</h2>
      <p class="font-medium">Add Money ${inputAddMoney} Tk. Your Carrent Balance ${totalAndAdd}</p>
     `
    document.getElementById('transection-container').appendChild(div)
  }
  else {
    alert('wrong')
  }
})
