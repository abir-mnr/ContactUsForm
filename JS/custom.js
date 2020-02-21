function printMessage(elementId, msg){
  document.getElementById(elementId).innerHTML = msg;
}
function validateForm(){
  var name = document.contactUs.name.value;
  var email = document.contactUs.email.value;
  var mess = document.contactUs.mess.value;
  var option=document.getElementsByName('Gender');

  var msg="";

  if(name==""){
    msg = "Please type your name";
    printMessage("nameErr", msg);
    $('#nameErr').fadeIn().delay(3000).fadeOut();
    return false;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    
  }else {
    msg = "Please type a valid email address";
    printMessage("emailerr", msg);
    $('#emailerr').fadeIn().delay(3000).fadeOut();
    return false;
  }

  if (!(option[0].checked || option[1].checked)) {
    msg = "Please select one";
    printMessage("radioerr", msg);
    $('#radioerr').fadeIn().delay(3000).fadeOut();
    return false;
  }

  if(mess==""){
    msg = "Please type something";
    printMessage("messerr", msg);
    $('#messerr').fadeIn().delay(3000).fadeOut();
    return false;
  }
  return true;
}
