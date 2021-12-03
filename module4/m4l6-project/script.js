//hides the modal untill called

var modal = document.querySelector('.modal');
modal.style.display="none";

//stops the page refreshing once submitted

var logginform= document.querySelector('#loggin-form');

logginform .addEventListener('submit', function(e){
    e.preventDefault();
})

// validateing log in

function validateLogin(){
    var unameFeild =document.querySelector("#uname");
    var pwdFeild =document.querySelector("#pwd");

    if (unameFeild.value!="Admin"|| pwdFeild.value!="123412"){
        modal.style.display="block";
    }

    else if (unameFeild.value=="Admin" || pwdFeild.value=="123412"){
      
      
        window.location.href = "index.html"

      
        alert("you have logged in!!");

    }

}
function dismissModel(){

    modal.style.display ="none";
}

