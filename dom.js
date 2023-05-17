// chnge the card tittle to red

let ctittle = document.getElementsByClassName("card-title")[0]
ctittle.style.color = "red"

let ctittle1 = document.getElementById("card3")
ctittle1.style.color = "green"

let ctittles = document.querySelectorAll(".card-title")
ctittles[0].style.color = "blue"
ctittles[1].style.color = "green"
ctittles[2].style.color = "red"
console.log(ctittles )

console.log(document.getElementsByTagName ('a'))