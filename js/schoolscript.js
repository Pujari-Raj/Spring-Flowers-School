// for active menu of navbar
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;

for (i = 0; i < menuLength; i++) {

    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

// end

// blank array for no.of.students
let students = [];

// function for fetching students data
function fetchStudentData() {
    fetch('./data/Studentdata.json')
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json);

        //
        students = JSON.parse(JSON.stringify(json)).student;
        console.log(students.length);
    })
}

fetchStudentData();

//login function
function fetchLoginData() {
    console.log('fetchLoginData called');
    fetch('./data/Studentdata.json')
    .then((resp) => resp.json())
    .then((json)=> {
        students = JSON.parse(JSON.stringify(json)).student;

        validateInputs();

        Login();
    });
}

//
const user_username = document.getElementById("name");
const user_pass = document.getElementById("password");

// function for setting error
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');   
}

// function for removing error
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// function for validating fields
const validateInputs = () => {
    console.log('validate function called!!');
    const usernameValue = user_username.value.trim();
    const passwordValue = user_pass.value.trim();

    if (usernameValue === '' || usernameValue == null) {
        setError(user_username, 'Username is required');
    }
    else{
        setSuccess(user_username);
    }

    if (passwordValue === '' || passwordValue == null) {
        setError(user_pass, 'Password is required');
    }
    else{
        setSuccess(user_pass);
    }
}

// document.querySelector(".login_error").style.display = "none";
// function for student login
const Login = () => {
    
    let user_username = document.getElementById("name").value;
    let user_pass = document.getElementById("password").value;

    let validUser = false;

    for (let i = 0; i < students.length; i++) {
    
        if (students[i].username.length>0 && students[i].password.length>0) {
            document.querySelector(".login_error").style.display = "block";
            console.log('Invalid Login Credentials!!!!!');
        }

        if (students[i].username == user_username && students[i].password == user_pass) {
            validUser = true;
            console.log('validUser');
            sessionStorage.setItem("studentId", students[i].studentid);
            sessionStorage.setItem("username", students[i].username);

            document.querySelector(".login_error").style.display = "none";
            
            // break;
        }
    }
    if (validUser) {
        window.location.href = "index.html";
    }

}