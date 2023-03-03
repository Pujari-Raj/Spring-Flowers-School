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
let password = "Pass@123";


const Login = () => {
    console.log('function called');
    let user_email = document.getElementById("email").value;
    let user_pass = document.getElementById("password").value;

    console.log(user_email, user_pass);
    if (user_email == email && user_pass == password) {
        console.log('Login Credentials Matched');
        localStorage.setItem('username', user_email);

        window.location.href = 'index.html';
    }

    //  if (user_email.length == 0 && user_pass.length == 0) {
    //     document.querySelector('.email')
    //     document.querySelector('.password')
    //  }

    else {
        document.querySelector(".login_error").style.display = "block";
        console.log('Invalid Login Credentials!!!!!');
    }
};

// Exam Grades Functionality

function displayGrades() {
    let subject = document.getElementById("student_subject").value;
    let marks = document.getElementById("student_marks");
    let grade = document.getElementById("student_grades");

    console.log('display marks called!');
    /* Subjects-> Grade
     0-30- fail
     30-45 -> B
     45-60-> B+
     60-75 -> A
     75-100 -> A+
  */
    if (subject == "English") {
        marks.value = 80;
        grade.value = "A+";
    } else if (subject == "Hindi") {
        marks.value = 72;
        grade.value = "A";
    } else if (subject == "Mathematics") {
        marks.value = 69;
        grade.value = "A";
    } else if (subject == "Science") {
        marks.value = 74;
        grade.value = "A";
    } else if (subject == "Social-Studies") {
        marks.value = 95;
        grade.value = "A+";
    }
    else if (subject == "Physical-Activity") {
        marks.value = 78;
        grade.value = "A";
    }
}

