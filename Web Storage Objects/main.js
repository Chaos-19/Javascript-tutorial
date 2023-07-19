// Session Storage Object
const formData = document.forms['myform'];

formData['submit'].onclick = () => {

  if (typeof(localStorage)) {
    localStorage.setItem('email', formData['email'].value);
    localStorage.password = formData['password'].value;

  }
logData();
}
/*
document.bod.onStorage = () => {

} */

function logData() {
  let data = localStorage.getItem('email'),
    data2 = localStorage.getItem('password');

  if (data || data2) {
    console.log(data, "  ", data2);
  }
}
