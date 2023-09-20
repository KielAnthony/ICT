countries.forEach(names=>{

    let CountryCode = names["Alpha-2 code"],
    CountryName = names.Country,
    CountryLAT = names["Latitude (average)"],
    CountryLON = names["Longitude (average)"]

    let template = `<option id="${CountryCode}" data-longtitude="${CountryLON}" data-latitude="${CountryLAT}">${CountryName}</option>`

    if(CountryCode == "PH")
        template = `<option id="${CountryCode}" data-longtitude="${CountryLON}" data-latitude="${CountryLAT}" selected="${CountryName}">${CountryName}</option>`

    document.querySelector("#COUNTRY").innerHTML += template
})

function countryChanged(obj)
{
    let selectedObj = obj.options[obj.selectedIndex]

    document.querySelector(".FLAGS").src = `flags/${selectedObj.getAttribute("id").toLowerCase()}.png`
    
    let templateLOC = `${document.querySelector("#COUNTRY").value.toUpperCase()} (${selectedObj.getAttribute("data-latitude")}°, ${selectedObj.getAttribute("data-longtitude")}°)`
    document.querySelector("#loc").textContent = templateLOC
}

function apply()
{
    document.querySelector("#name").textContent = document.querySelector("#name_input").value.toUpperCase()
    document.querySelector("#kf").textContent = document.querySelector("#kf_input").value.toUpperCase()
    document.querySelector("#loc").textContent = document.querySelector("#loc_input").value.toUpperCase()

    let aka = document.querySelector("#aka_input").value;
    if(aka != "")
        document.querySelector("#aka").textContent = `(aka: ${aka})`
    else document.querySelector("#aka").textContent = ""

    document.querySelector("#bday").textContent = bday()

}

function ya()
{
    html2canvas(document.querySelector("#capture")).then(canvas => {
        var link=document.createElement('a')
        link.download = `${document.getElementById("name").innerHTML}.png`
        link.href=canvas.toDataURL("image/png")
        link.click()
    });
}

function bday()
{
    let date = new Date(document.querySelector("#bday_input").value)

    return `${date.toLocaleString('default', { month: 'long'}).toUpperCase()} ${date.getDate()}, ${date.getFullYear()}`
}

function inputimage(obj)
{
    let reader = new FileReader()
    reader.readAsDataURL(obj.files[0])
    reader.onload = (e) =>{
        sessionStorage.setItem("imgData", reader.result)
        
        let image = new Image()

        image.src = e.target.result
        image.onload = ()=>{
            document.querySelector("#mainImg").src = image.src
        }
    }

}