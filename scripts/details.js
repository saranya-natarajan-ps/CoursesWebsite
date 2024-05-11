"use script";

window.onload = init;

function init() {
    const urlParams = new URLSearchParams(location.search);
    let cid = -1;
    if (urlParams.has("cid") === true)
    {
        cid = urlParams.get("cid")
        getCourse(cid);
    }
}

function getCourse(cid){
    fetch("http://localhost:8081/api/courses/" + cid)
        .then(response => response.json())
        .then(course => {
            const container = document.getElementById("courseContainerDiv");

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
}