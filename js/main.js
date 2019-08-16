var x=document.getElementById("text");

function Bold () { 
    if (x.style.fontWeight== "bold")
    {x.style.fontWeight= "normal"}
    else 
    x.style.fontWeight= "bold";


   
}
function Italic () {
    if ( x.style.fontStyle=="italic")
    {x.style.fontStyle= "normal"}
    else 
    x.style.fontStyle= "italic";
}
function Underlineu () {
    if ( x.style.textDecoration=="underline")
    {x.style.textDecoration="none"}
    else 
    x.style.textDecoration="underline";
   
      
}
function ff(){
    // console.log( document.getElementById("fz").value)
   x.style.fontSize= document.getElementById("fs").value;
}
function hamza ()
{
    x.style.fontFamily=document.getElementById("panda").value;
    
}
$(document).ready(function(){
$(".hi button").css("opacity","0");

$(".omg").parent("div").mouseenter(function(){
    $(this).css("opacity","0.5");
  $(this).find("button").css("opacity","1");
  
});
$(".omg").parent("div").mouseleave(function(){
    $(this).css("opacity","1");
  $(this).find("button").css("opacity","0");
  
});
});


// connecting to db
var firebaseConfig = {
    apiKey: "AIzaSyCu6sUnryaXEq8EHShUjotx7ZATeZsFrWM",
    authDomain: "raed-work.firebaseapp.com",
    databaseURL: "https://raed-work.firebaseio.com",
    projectId: "raed-work",
    storageBucket: "",
    messagingSenderId: "934160600992",
    appId: "1:934160600992:web:b9be81f9deca4bc4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messageRef=firebase.database().ref("contact");

  function submitform(){
      event.preventDefault();
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var track=document.getElementById("track").value;
      var number=document.getElementById("number").value;
      sendtobase(name,email,track,number);
  }

//   document.getElementById("contactForm").addEventListener("submit",submitform);
function sendtobase(name,email,track,number){
    var newMessageref=messageRef.push();
    newMessageref.set({
        name:name,
        email:email,
        track:track,
        number:number
    });
}