

document.getElementById('btn-cash-out').addEventListener('click', function (e) {
  e.preventDefault()

  let inputCashOut = getInputValueElementById('input-cash-out');
  let inputPinNumber = getInputValueElementById('input-pin-number2');

  if(isNaN(inputCashOut)){
    alert('Please number amount');
    return;
  }
  
  if (inputPinNumber === 1234) {
    let totalAmount = getElementValueTextById('total-amount');
    if(inputCashOut > totalAmount){
      alert('You have no enough money')
      return
    }
    let totalAndOut = totalAmount - inputCashOut;
    document.getElementById('total-amount').innerText = totalAndOut;

    // transection history
      let div = document.createElement('div');
      div.style.padding = '5px';
      div.style.borderRadius = '3px'
      div.classList.add('bg-yellow-400');
      div.innerHTML = `
       <h2 class="text-2xl font-semibold mb-1">Cash Out</h2>
       <p class="font-medium">Cash Out ${inputCashOut} Tk. Your Carrent Balance ${totalAndOut}</p>
      `
      document.getElementById('transection-container').appendChild(div)
  } else {
    alert('wrong')
  }
})