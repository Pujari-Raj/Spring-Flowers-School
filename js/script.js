const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;

for (i = 0; i < menuLength; i++) {

    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

// Login functionality

let email = "Pujari Basvaraj";
let password  = "Pass@123";


const Login = () => {
    console.log('function called');
    let user_email = document.getElementById("email").value;
    let user_pass = document.getElementById("password").value;

    console.log(user_email, user_pass);
     if (user_email == email && user_pass == password) {
        console.log('Login Credentials Matched');
        localStorage.setItem('username', user_email);

        window.location.href= 'index.html';
     }   

    //  if (user_email.length == 0 && user_pass.length == 0) {
    //     document.querySelector('.email')
    //     document.querySelector('.password')
    //  }

     else{
        document.querySelector(".login_error").style.display = "block";
        console.log('Invalid Login Credentials!!!!!');
     }
};