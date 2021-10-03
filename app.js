document.addEventListener('DOMContentLoaded', (event) => {
    console.log('what up loser')

    const billValue = document.getElementById("bill-input").value
    const numOfPeople = document.getElementById("num-of-people").value
    console.log("Value of the Bill = £" + billValue)
    console.log("There are " + numOfPeople + " guests.")

    document.getElementById("5").onclick = () => {
        console.log((billValue*(0.05))/numOfPeople)
    }
    document.getElementById("10")
    document.getElementById("15")
    document.getElementById("25")
    document.getElementById("50")
    
})