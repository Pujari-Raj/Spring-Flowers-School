const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;

for (i = 0; i < menuLength; i++) {

    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

// Login functionality

let username = "Pujari Basvaraj";
let password = "Pass@123";


const Login = () => {
    console.log('function called');
    let user_username = document.getElementById("email").value;
    let user_pass = document.getElementById("password").value;

    // console.log(user_email, user_pass);
    if (user_username == username && user_pass == password) {
        console.log('Login Credentials Matched');
        localStorage.setItem('username', user_username);

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


// Adding Activity Functionality

function addActivity() {
    let name_activity = document.getElementById("activity_name").value;
    let details_activity = document.getElementById("activity_details").value;
    sessionStorage.setItem(name_activity, details_activity);
    alert("Activity Added Successfully");
}

// Displaying Functionaility

function activityList() {
    console.log('list function called');

    var activity_list = document.getElementById("list_activities");
    activity_list.style.display = "none";

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

                    // let activityId = document.createElement("th");
                    // activityId.setAttribute("id", "activity_id");
                    // activityId.setAttribute("scope", "row");
                    // activityId.innerHTML = j;
                    // activity_list.appendChild(activityId);

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