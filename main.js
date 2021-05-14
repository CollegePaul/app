

var profile = localStorage.getItem("profileName");

if(profile == null){
    //if the user does not have a profile then hide the quiz button
    var quizButton = document.getElementById("quiz")
    quizButton.style.display = "none"
    var message = document.getElementById("message")
    message.style.display = "block"
}
console.log(profile)

function remove(){
    localStorage.removeItem("profileName");
}