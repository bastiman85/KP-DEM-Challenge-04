// Function to check Whether both passwords
// is same or not.
function checkPassword(form) {
   password1 = form.password1.value;
   password2 = form.password2.value;

   // If password not entered
   if (password1 != password2) {
      document.getElementById("pwderror").innerHTML = '<span style="color:red;">Password did not match: Please try again...</span>';
      return false;
   }

   // If same return True.
   else {
      document.getElementById("pwderror").innerHTML = "";
      return true;
   }
}

// Cred: https://www.geeksforgeeks.org/password-matching-using-javascript/
