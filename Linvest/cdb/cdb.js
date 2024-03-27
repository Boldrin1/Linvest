function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByClassName("main")[0].style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("main")[0].style.marginLeft= "0";
}

function calculate() {
    var initialAmount = parseFloat(document.getElementById("initial-amount").value);
    var annualInterestRate = parseFloat(document.getElementById("annual-interest-rate").value);
    var investmentPeriod = parseFloat(document.getElementById("investment-period").value);

    var futureValue = initialAmount * Math.pow((1 + annualInterestRate / 100), investmentPeriod);
    document.getElementById("result").innerHTML = "Valor futuro do investimento: R$" + futureValue.toFixed(2);
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

