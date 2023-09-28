let isNavbarOpen = false;

function openNav()
{
    isNavbarOpen = !isNavbarOpen

    if(isNavbarOpen)
        か(".mobileNavigation").sty("top", "0px")
    else
        か(".mobileNavigation").sty("top", "-1000px")
}