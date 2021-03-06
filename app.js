document.addEventListener('DOMContentLoaded', (event) => {
 
 // Variables
 const bill = document.getElementById('bill-input')
 const selectTip = document.getElementById('select-tip')
 const percentage = document.getElementsByClassName('percentage')
 const numOfPeople = document.getElementById('num-of-people')
 const tipPerPerson = document.getElementById('per-person-value')
 const tipTotal = document.getElementById('total-value')
 const reset = document.getElementById('reset-button')
 const custom = document.querySelector('.custom')
 
 // Default Values
 bill.value = 0.00
 numOfPeople.value = 0
 tipPerPerson.innerText = '0.00'
 tipTotal.innerText = '0.00'
 

 // Functions
 function calculateTipTotal(bill, tip) {
     return bill * (tip/100) 
 }


 // Event Listeners
 document.querySelectorAll('#percentage').forEach(item => {
    item.addEventListener('focusin', () => {
        let tip = parseFloat(item.innerText)
        tipTotal.innerText = calculateTipTotal(bill.value, tip).toFixed(2)
        tipPerPerson.innerText = (calculateTipTotal(bill.value, tip)/numOfPeople.value).toFixed(2)
    })
 })

 reset.onclick = () => {
    bill.value = 0.00
    numOfPeople.value = 0
    tipPerPerson.innerText = '0.00'
    tipTotal.innerText = '0.00' 
 }

 custom.addEventListener('focusin', () => {
     custom.outerHTML = '<input type="number" class="custom" id="percentage">'
 })

//  custom.addEventListener('focusout', () => {
//     custom.outerHTML = '<button id="percentage" class="custom">Custom</button>'
//  })
    
})