
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var rock = document.getElementById("rock")

var score = document.getElementById("score")
score.textContent = 0 | sessionStorage.getItem("score")

paper.addEventListener("click", function(){
    localStorage.setItem("Paper_value", "1")
    localStorage.setItem("score", parseInt(score.textContent))
})

scissors.addEventListener("click", function(){
    localStorage.setItem("Scissors_value", "2") 
    localStorage.setItem("score", parseInt(score.textContent))
})

rock.addEventListener("click", function(){
    localStorage.setItem("Rock_value", "3") 
    localStorage.setItem("score", parseInt(score.textContent))
})
