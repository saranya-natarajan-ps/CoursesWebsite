"use strict";

window.onload = init;

function init(){
    let table = document.getElementById("courseTable");

    fetch("http://localhost:8081/api/courses")
        .then(response => response.json())
        .then(data => {
            for(let i=0; i<data.length; i++) {
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                

                cell1.innerHTML = data[i].dept;
                cell2.innerHTML = data[i].courseNum;
                cell3.innerHTML = data[i].courseName;
               
                const detailsCell = row.insertCell();
                let anchor = document.createElement("a");
                anchor.href = `details.html?cid=${data[i].id}`;
                anchor.text = "See details";  
                detailsCell.appendChild(anchor);

                const deleteCell = row.insertCell();
                let link = document.createElement('a');
                let delBtn = document.createElement("img");
                delBtn.src = "images/delete.png"
                delBtn.style.height ="35px"
                link.href=`confirm-delete.html?cid=${data[i].id}`;
                //link.text="Delete Course"
                link.appendChild(delBtn);
                deleteCell.appendChild(link);

            }
     });
}