document.addEventListener('DOMContentLoaded', (event) => {
 const bill = document.getElementById('bill-input')
 const tip = document.getElementById('percentage')
 const numOfPeople = document.getElementById('num-of-people')
 const tipPerPerson = document.getElementById('per-person')
 const tipTotal = document.getElementById('total')
 const reset = document.getElementById('reset-button')

 bill.value = 0.00
 
 tip.onclick = () => {
     console.log(bill.value - 1)
     console.log(tip.innerText)
     console.log(bill.value/parseFloat(tip.innerText))
 }


    
})