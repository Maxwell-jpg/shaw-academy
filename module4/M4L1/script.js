var btn = document .querySelector("#find-btn");
var userInput = document .querySelector("#user-input");
var container = document .querySelector("#container");
var body = document.querySelector("body");

var monday=["blessed","dressed","garden"]
var tuesday=["picnic1300","explorejs","update code","015548788"]
var wednesday=["read","podcast","esme has club"]
var thursday=["more javascript","build prototype in justinmind"]
var friday=["ITS FRIDAY THEN"]

//when hover change color

function setHoverColor() {
    btn.style.background="#da0d0d"
}

//when not hovering return to normal state
function setNormalColor() {
    btn.style.background=""
}
// assigning even listners to the button

btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("click", printTimetable);

function printTimetable(){
    if(userInput.value=="monday")
    {
        for (var i =0; i < monday.length; i++) {
            //alert(monday[1]);
            //container.appendChild(document.createElement("p").innterHTML=monday[i]);
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(monday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);

        }
    }
    if(userInput.value=="tuesday")
    {
        for (var i =0; i < tuesday.length; i++) {
            //alert(tuesday[1]);
            //container.appendChild(document.createElement("p").innterHTML=tuesday[i]);
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(tuesday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);

        }
    }
    if(userInput.value=="wednesday")
    {
        for (var i =0; i < wednesday.length; i++) {
            //alert(wednesday[1]);
            //container.appendChild(document.createElement("p").innterHTML=wednesdayday[i]);
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(wednesday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);

        }
    }
    if(userInput.value=="thursday")
    {
        for (var i =0; i < thursday.length; i++) {
            //alert(thursday[1]);
            //container.appendChild(document.createElement("p").innterHTML=thursday[i]);
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(thursday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);

        }
    }
    if(userInput.value=="friday")
    {
        for (var i =0; i < friday.length; i++) {
           
        
            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(friday[i]);
            var img = document.createElement("img");
            img.src='friday-meme.jpg'
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
            paraText.style.cssText="font-size:24px;"
            body.appendChild(img);

        }
    }
    

}