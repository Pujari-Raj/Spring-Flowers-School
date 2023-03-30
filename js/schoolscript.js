// for active menu of navbar
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;

for (i = 0; i < menuLength; i++) {

    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}


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

//getting form element's
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
    
        if (students[i].username.length<0 && students[i].password.length<0) {
            document.querySelector(".login_error").style.display = "block";
            document.querySelector(".login_error").style.textAlign = "center";
            console.log('Invalid Login Credentials!!!!!');
        }

        else if (students[i].username == user_username && students[i].password == user_pass) {
            validUser = true;
            console.log('validUser');
            // sessionStorage.setItem("studentId", students[i].studentid);
            // sessionStorage.setItem("username", students[i].username);

            localStorage.setItem("studentId", students[i].studentid);
            localStorage.setItem("username", students[i].username);

            document.querySelector(".login_error").style.display = "none";
            
            // break;
        }
    }
    if (validUser) {
        window.location.href = "index.html";
    }
}


//function for calling-marks function
function Marks() {
    console.log('calling marks');
    fetch('./data/Studentdata.json')
    .then((resp) => resp.json())
    .then((json) => {
        students = JSON.parse(JSON.stringify(json)).student;

        DisplayMarks();
    });    
}

//function for displaying the marks of particular student
function DisplayMarks() {
    console.log('calling display marks');
    let subject = document.getElementById("student_subject").value;
    let marks = document.getElementById("student_marks");
    let grade = document.getElementById("student_grades");

    marks.value = "";
    grade.value = "";

    // looping through all the subjects
    for (let i = 0; i < students.length; i++) {
        
        if (students[i].studentid === localStorage.getItem('studentId')) {
            for(const key in students[i]){

                //
                if (students[i].hasOwnProperty(key)) {
                    if (subject == key) {
                       marks.value = students[i][key]["marks"];
                       grade.value = students[i][key]["grade"]; 
                    }
                }
            }
        }
    }
}

// Adding Activity Functionality
function addActivity() {
    let name_activity = document.getElementById("activity_name").value;
    let details_activity = document.getElementById("activity_details").value;
    sessionStorage.setItem(name_activity, details_activity);
    alert("Activity Added Successfully");
}

// Displaying Activity Functionaility
function activityList() {
    console.log('list function called');

    var activity_list = document.getElementById("list_activities");
    activity_list.style.display = "none";

        // displaying if any activity is stored in sessionStorage
        if (sessionStorage.length < 0) {

            document.getElementById("activity_id").style.visibility = "hidden";
        }
        if(sessionStorage.length> 1){
            document.getElementById("activity_id").style.visibility = "visible";
            activity_list.style.display = "block";

            for (let j = 0; j < sessionStorage.length; j++) {
                const key = sessionStorage.key(j);
                
                if (key != "username" && key != "IsThisFirstTime_Log_From_LiveServer" ) {

                    let activityBody = document.getElementById("activity_id");

                    let activtyRow = document.createElement("tr");

                    let activityName = document.createElement("td");
                    activityName.setAttribute("id", "activity_name");
                    activityName.innerHTML = key;
                    activity_list.appendChild(activityName);

                    let activityDetails = document.createElement("td");
                    activityDetails.setAttribute("id", "activity_details");
                    activityDetails.innerHTML = sessionStorage.getItem(key);
                    activity_list.appendChild(activityDetails);

                    activtyRow.appendChild(activityName);
                    activtyRow.appendChild(activityDetails);
                
                    activityBody.appendChild(activtyRow);
                }
            }
        }
    
}