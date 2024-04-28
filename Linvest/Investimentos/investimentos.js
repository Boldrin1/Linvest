function toggleNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByClassName("main")[0].style.marginLeft = "250px";
}

function toggleNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft= "0";
}

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

document.addEventListener("DOMContentLoaded", function() {
    var cdButton = document.getElementById("cd-button");
    cdButton.addEventListener("click", function() {
      window.location.href = "../cdb/cdb.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var pouButton = document.getElementById("pou2");
    pouButton.addEventListener("click", function() {
      window.location.href = "../Poupança/poupança.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var pouButton = document.getElementById("etfss");
    pouButton.addEventListener("click", function() {
      window.location.href = "../etfs/etfs.html";
    });
});
