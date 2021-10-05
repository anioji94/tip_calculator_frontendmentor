document.addEventListener('DOMContentLoaded', (event) => {
 
 // Variables
 const bill = document.getElementById('bill-input')
 const selectTip = document.getElementById('select-tip')
 const percentage = document.getElementById('percentage')
 const numOfPeople = document.getElementById('num-of-people')
 const tipPerPerson = document.getElementById('per-person')
 const tipTotal = document.getElementById('total')
 const reset = document.getElementById('reset-button')
 
 // Default Values
 bill.value = 0.00
 numOfPeople.value = 0
 
 // Functions
 function calculateTipTotal(bill, tip) {
     return bill * (tip/100) 
 }

 // Event Listeners
 document.querySelectorAll('#percentage').forEach(item => {
    item.addEventListener('focusin', () => {
        let tip = parseFloat(item.innerText)
        console.log(calculateTipTotal(bill.value, tip))
        console.log(calculateTipTotal(bill.value, tip)/numOfPeople.value)
    })
 })
    
})