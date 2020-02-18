function printMessage(elementId, msg){
  document.getElementById(elementId).innerHTML = msg;
}
function validateForm(){
  var name = document.contactUs.name.value;
  var email = document.contactUs.email.value;
  var message = document.contactUs.message.value;
  var msg="";
  if(name==""){
    msg = "Please type your name";
    printMessage("nameErr", msg);
    $('#nameErr').fadeIn().delay(3000).fadeOut();
    return false;
  }
}

// setTimeout(function() {
//    $('#nameErr').fadeOut().text('')
// }, 5000 );