let isNavbarOpen = false;

function openNav()
{
    isNavbarOpen = !isNavbarOpen

    if(isNavbarOpen)
    {
        setTimeout(()=>{
            か(".mobileNavigation").sty("top", "0px")
        }, 10)
        か(".mobileNavigation").sty("display", "block")
    }
    else
    {
        setTimeout(()=>{
            か(".mobileNavigation").sty("display", "none")
        }, 400)
        か(".mobileNavigation").sty("top", "-1000px")
    }
}