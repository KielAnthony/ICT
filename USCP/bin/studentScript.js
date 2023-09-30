for (let i = 0; i < ICT_CLASS.length; i++) {
    document.querySelector(".selection").innerHTML +=
    `
    <article id="studentList" class="selectableSection">
        <img src="https://media.istockphoto.com/id/1096052566/vector/stamprsimp2red.jpg?s=612x612&w=0&k=20&c=KVu0nVz7ZLbZsRsx81VBZcuXZ1MlEmLk9IQabO2GkYo=">
        <div class="sectionHeader">
            <h1>${ICT_CLASS[i]}</h1>
            <div class="preText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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