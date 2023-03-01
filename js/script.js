const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;

for (i = 0; i < menuLength; i++) {

    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

// Login functionality

let email = "pujaribasvaraj018@gmail.com";
let password  = "Pass@123";


const Login = () => {
    console.log('function called');
    let user_email = document.getElementById("email").value;
    let user_pass = document.getElementById("password").value;

    console.log(user_email, user_pass);
     if (user_email == email && user_pass == password) {
        console.log('Login Credentials Matched');

        window.location.href= 'index.html';
     }   

     else{
        console.log('Invalid Login Credentials!!!!!');
     }
};