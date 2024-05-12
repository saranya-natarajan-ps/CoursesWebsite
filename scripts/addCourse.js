"use strict";

window.onload = init;

function init() {
    const addBtn = document.getElementById("addCourseBtn")
    addBtn.onclick = addCourse;
}

function addCourse() {
    let courseData = {
        id: "",
        dept: document.getElementById("dept").value,
        courseNum: document.getElementById("courseNum").value,
        courseName: document.getElementById("courseName").value,
        instructor: document.getElementById("instructor").value,
        startDate: document.getElementById("startDate").value,
        numDays: document.getElementById("numDays").value
    }

    fetch("http://localhost:8081/api/courses",{
        method: "POST",
        body: JSON.stringify(courseData),
        headers: {"Content-type": 
              "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(json => {
            let message = "course ID " +json.id+ " with couse number " +courseData.courseNum+" added successfully!";
            let confirmation = document.getElementById("addedConfirmation");
            confirmation.innerHTML = message;
        });
        
}