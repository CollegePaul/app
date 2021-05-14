var answer = 0

function newQuestion(){ 
    var text = document.getElementById("question");
    var n1 = Math.floor(Math.random() * 12 + 1)
    var n2 = Math.floor(Math.random() * 12 + 1)
    answer = n1 * n2
    console.log(answer)
    text.innerHTML = n1 + " x " + n2 + " = "
}

window.onload = function (){
    newQuestion();
}

function checkAnswer(){
    var a = document.getElementById("answer").value;
    if (a == answer){
        console.log("Correct")
    }else{
        console.log("Incorrect")
}
document.getElementById("answer").value = ""
    newQuestion();
}

