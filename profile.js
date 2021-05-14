var profile = localStorage.getItem("profileName");


if(profile == null){
    //if the user does not have a profile then hide the quiz button
  
    var message = document.getElementById("message")
    message.style.display = "block"
}


console.log(profile)


function makeProfile(){
    var name = document.getElementById("profileName")
    localStorage.setItem("profileName", name);
    window.location.href = 'index.html'; //relative to domain
    
}

