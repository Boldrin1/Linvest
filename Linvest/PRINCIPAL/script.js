
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
        document.getElementsByClassName("main")[0].style.marginLeft = "0";
    } else {
        sidenav.style.width = "250px";
        document.getElementsByClassName("main")[0].style.marginLeft = "250px";
    }
}

