var pattern = /^[a-z]+\d+(@gmail.com|@yahoo.com)$/i;
const email = document.querySelector('.input');
email.addEventListener('change', function() {
  
  if (email != '') {
    if (pattern.test(email.value.trim())) {
      email.onerror = "Valid";
      email.onerror ="true";
      debugger;
      console.log("Valid Email");
    } else {
      email.classList.toggle("error");
      email.onerror = "Not Valid";
      console.log("Invalid Email");
    }
  }
})