function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function calculateProfile() {
    var form = document.getElementById("quizForm");
    var inputs = form.querySelectorAll('input[type="radio"]:checked');
    var totalPoints = 0;

    for (var i = 0; i < inputs.length; i++) {
        totalPoints += parseInt(inputs[i].value);
    }

    var resultDiv = document.getElementById("result");
    var profile = "";

    if (totalPoints >= 5 && totalPoints <= 8) {
        profile = "Perfil Conservador";
    } else if (totalPoints >= 9 && totalPoints <= 12) {
        profile = "Perfil Moderado";
    } else if (totalPoints >= 13 && totalPoints <= 15) {
        profile = "Perfil Arrojado";
    }

    resultDiv.innerHTML = "<h2>Seu Perfil de Investidor é: " + profile + "</h2>";
}
