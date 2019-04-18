let inputField = document.getElementById("message")
let targetedDiv = document.getElementById("partOne")

inputField.addEventListener("keyup", function (event) {
    console.log(event.target.value)
    targetedDiv.innerHTML = event.target.value 
}) 

let targetedDiv2 = document.getElementById("partTwo")

inputField.addEventListener("keyup", function (event) {
    console.log(event.target.value)
    targetedDiv2.innerHTML = event.target.value
})
