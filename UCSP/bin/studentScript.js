for (let i = 0; i < ICT_CLASS.length; i++) {
    let name = ICT_CLASS[i].Name
    let content = ICT_CLASS[i].Content
    let lateStudent = ""

    LATE_STUDENTS.forEach(el=>
        {
            if(name == el) lateStudent = "lateStudent"
        }
    )
    
    document.querySelector(".selection").innerHTML +=
    `
    <article ${lateStudent} id="studentList" class="selectableSection" onclick="openStudent('${name}')">
        <img src="https://masaolms.carsu.edu.ph/pluginfile.php/200458/course/summary/culture-awareness-training.jpg">
        <div class="sectionHeader">
            <h1>${name}</h1>
            <div class="preText">
                ${content}
            </div>
        </div>                
    </article>
    `
}

function checkStudents(elem) {
    document.querySelectorAll("#studentList").forEach(el => {
        let selectedStudent = el.children[1].children[0].textContent.toLowerCase();

        if(selectedStudent.includes(elem.value.toLowerCase()))
            el.removeAttribute("removeList")
        else
            el.setAttribute("removeList", "")
    })
}

function openStudent(name)
{
   window.open(`students/${name}`)
}