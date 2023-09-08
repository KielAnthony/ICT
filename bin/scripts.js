function StudentClick(element)
{
    let prev = document.querySelector("#previewer")

    if(prev.style.display == "none")
        prev.style.display = "block";

    if(element.getAttribute("data-link") != "")
        document.querySelector("#PreviewFrame").setAttribute("src", element.getAttribute("data-link"))
    else prev.style.display = "none";
}

function OpenNewTab()
{
    window.open(document.querySelector("#PreviewFrame").getAttribute("src"))
}