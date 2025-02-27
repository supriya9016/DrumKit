/*document.querySelector("button"),addEventListener("click",handleClick);
//in above statement we are not calling function handleclick,here we are passing handle click as a reference to eventlistener function 
// becoz when we call function it will directly pop up without being clicked.
function handleClick(){
    alert("I got clicked");
}
----->  Anonymous method
document.querySelector("button"),addEventListener("click",function(){
    alert("I got clicked");
});
    */
   // we can also use var noOfDrumButtons=document.querySelectorAll(".drum").length
   for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //this.style.color ="white";
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    function makeSound(key){
        switch (key) {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
               break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
               break;
            case "s":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
               break;
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
               break;
            case "j":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
               break;
            case "k":
                var kick=new Audio('sounds/kick-bass.mp3');
                crash.play();
               break
            case "l":
                var crash=new Audio('sounds/snare.mp3');
                kick.play();
               break;
            default:console.log(buttonInnerHTML);
        }
    }
    //adding animation
    function buttonAnimation(currentKey){
        var activeButton=document.querySelector("."+ currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pres sed");
        },100);
    }





//var audio=new Audio('sounds/tom-1.mp3');
//audio.play();