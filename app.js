document.addEventListener('DOMContentLoaded', (event) => {
 const bill = document.getElementById('bill-input')
 const selectTip = document.getElementById('select-tip')
 const percentage = document.getElementById('percentage')
 const numOfPeople = document.getElementById('num-of-people')
 const tipPerPerson = document.getElementById('per-person')
 const tipTotal = document.getElementById('total')
 const reset = document.getElementById('reset-button')

 bill.value = 0.00
 numOfPeople.value = 0
 


 document.querySelectorAll('#percentage').forEach(item => {
    item.addEventListener('focusin', () => {
        console.log(parseFloat(item.innerText))
    })
 })
    
})