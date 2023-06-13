var pattern = /^[a-z]+\d+(@gmail.com|@yahoo.com)$/i;
const email = document.querySelector('.input');

if (email.value) {
//  email.classList.remove("error")
}

email.addEventListener('change', function() {

  if (email != '') {
    if (pattern.test(email.value.trim())) {
      email.onerror = "Valid";
      email.onerror = "true";
      email.classList.remove("error")
      debugger;
      console.log("Valid Email");
    } else {
      email.classList.toggle("error");
      email.onerror = "Not Valid";
      console.log("Invalid Email");
    }
  }
})