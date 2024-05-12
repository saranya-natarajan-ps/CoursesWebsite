"use strict";

window.onload = function() {
    const urlParams = new URLSearchParams(location.search);
    let cid = -1;
    if (urlParams.has("cid") === true)
    {
        cid = urlParams.get("cid")
        fetch("http://localhost:8081/api/courses/" + cid)
        .then(response => response.json())
        .then(course => {
            const container = document.getElementById("courseDetails");

            const deptP = document.createElement('p');
            deptP.textContent = `DepartmentName: ${course.dept}`;
            container.appendChild(deptP);

            const courseNumP = document.createElement('p');
            courseNumP.textContent = `Course Number: ${course.courseNum}`;
            container.appendChild(courseNumP);

            const courseNameP = document.createElement('p');
            courseNameP.textContent = `Course Name: ${course.courseName}`;
            container.appendChild(courseNameP);

            const instructorP = document.createElement('p');
            instructorP.textContent = `Instructor: ${course.instructor}`;
            container.appendChild(instructorP);

            const startDateP = document.createElement('p');
            startDateP.textContent = `Start Date: ${course.startDate}`;
            container.appendChild(startDateP);

            const numDaysP = document.createElement('p');
            numDaysP.textContent = `Number of Days: ${course.numDays}`;
            container.appendChild(numDaysP);
        })

        const deleteBtn = document.getElementById("deleteBtn");
        deleteBtn.onclick = deleteCourse;
    }
}

function deleteCourse(){
    const urlParams = new URLSearchParams(location.search);
    let cid = -1;
    if (urlParams.has("cid") === true)
    {
        cid = urlParams.get("cid")
    }
    fetch("http://localhost:8081/api/courses/" + cid, {
        method:"DELETE" 
    })
        .then(response => response.json())
        .then(json => {
            console.alert("course with id " + json.id +" is removed")
        });
    location.replace("index.html")
}