var user = {
    name: "Danisa Ortanez",
    image: "img/danisa.jpg",
    progress: 0.66
}

var courseArr = [{
        title: "Readings in World Literature",
        subject: "Social Studies"
    }, {
         title: "Theory of Numbers",
         subject: "Mathematics"
    }, {
        title: "Farsi 301",
        subject: "Languages"
}];

var activityArr = [{
        title: "Completed SOSC 503 Module 7 Quiz",
        subject: "Submitted for review 6/11/18 at 10:39PM"
    }, {
        title: "Commented in MATH104 Tuesday Discussion Group",
        subject: "Lorem ipsum dolores sit..."
    }, {
        title: "Enrolled in FARS301",
        subject: "Cohort begins 9/08/18"
}];

 var accountArr = [{
        title: "Enrolled since: ",
        subject: "9/06/2017"
    }, {
        title: "Enrollment Status: ",
        subject: "Active Student"
    }, {
        title: "Department",
        subject: "Computer Science"
}];


// Box that is displaying user information
function users(user, image, name, id) {

    image.src = user.image;
    image.alt = user.name;
    name.innerText = user.name;
    id.innerText = "User #: " + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

}

users(user, document.getElementById("userImg"), document.getElementById("username"), document.getElementById("userId"));


// Reformating time so there is a 0 before a single digit
function formatTime(time) {

    if (time < 10) {

        return "0" + time;

    } else {

        return time;
    }
}


// generating a time and date 
function getTime() {

    var now = new Date();
    var hours = formatTime(now.getHours());
    var minutes = formatTime(now.getMinutes());
    var seconds = formatTime(now.getSeconds());
    var month = formatTime(now.getMonth());
    var date = formatTime(now.getDate());
    var year = now.getFullYear();

    return month + "/" + date + "/" + year + "  |  " + hours + ":" + minutes + ":" + seconds;
}

// Adding time and date to html page
function setTime(el) {

    el.innerText = getTime();
    setTimeout(function() {

        return setTime(el);
    }, 1000)

}

setTime(document.getElementById("time"));


// Function that happens when each tab is clicked on 
function setActive(array, title, list, string) {

    title.innerText = string;
    list.innerHTML = "";

    for(var i = 0; i < array.length; i++) {

        list.innerHTML += "<li><h4>" + array[i].title + "</h4><p>" + array[i].subject + "</p></li>"
    }
}

// Default tab open on refresh
setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ");


// Onclick functions that happen when clicking the list items
function showCourses() {

    setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ");
}


function showActivity() {

    setActive(activityArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Recent Activity: ");
}

function showAccount() {

    setActive(accountArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Account: ");
}


// Progress bar
function setProgress(user, bar, percent) {

    bar.style.width = user.progress * 100 + "%";
    percent.innerText = user.progress * 100 + "%";
}

setProgress(user, document.getElementById("progress-inner"), document.getElementById("progress-percent"));



// Expanding the nav menu button
function expandMenu() {
    if(document.getElementsByTagName("section")[0].style.width) {
        document.getElementsByTagName("section")[0].style = "";
        document.getElementsByTagName("nav")[0].className = "";
    } else {
        document.getElementsByTagName("section")[0].style = "padding: 30px 5vw;; width: 75vw";
        document.getElementsByTagName("nav")[0].className = "open";
    }
}