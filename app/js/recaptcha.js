function checkCaptcha() {
   var response = grecaptcha.getResponse();
   if (response.length == 0) {
      document.getElementById("g-recaptcha-error").innerHTML = '<span style="color:red;">This field is required.</span>';
      return false;
   }
   return true;
}

function verifyCaptcha() {
   document.getElementById("g-recaptcha-error").innerHTML = "";
}

//Cred: https://artisansweb.net/validate-google-recaptcha-using-javascript/
