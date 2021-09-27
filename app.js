document.addEventListener('DOMContentLoaded', (event) => {
    console.log('what up loser')

    const billValue = document.getElementById("bill-input").value
    const numOfPeople = document.getElementById("num-of-people").value
    console.log("Value of the Bill = £" + billValue)
    console.log("There are " + numOfPeople + " guests.")
    
})