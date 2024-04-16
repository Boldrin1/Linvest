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
        resultDiv.innerHTML = "<h2>Seu Perfil de Investidor é: " + profile + "</h2>" + "<p>Este tipo de investidor busca preservar o capital investido e prioriza a segurança em detrimento do retorno potencial mais elevado. Prefere investimentos de baixo risco, como títulos do governo, Certificados de Depósito Bancário (CDBs) de instituições financeiras sólidas e fundos de renda fixa. Geralmente não está disposto a assumir grandes riscos ou volatilidade em sua carteira de investimentos.</p>";
    } else if (totalPoints >= 9 && totalPoints <= 12) {
        profile = "Perfil Moderado";
        resultDiv.innerHTML = "<h2>Seu Perfil de Investidor é: " + profile + "</h2>" + "<p>O investidor moderado busca um equilíbrio entre segurança e crescimento. Está disposto a aceitar um nível moderado de risco em busca de retornos mais elevados do que aqueles oferecidos por investimentos conservadores. Costuma diversificar sua carteira de investimentos entre ativos de renda fixa e variável, como ações de empresas sólidas, fundos multimercado e títulos corporativos.</p>";
    } else if (totalPoints >= 13 && totalPoints <= 15) {
        profile = "Perfil Arrojado";
        resultDiv.innerHTML = "<h2>Seu Perfil de Investidor é: " + profile + "</h2>" + "<p>Este tipo de investidor busca obter retornos mais altos e está disposto a assumir um nível significativo de risco em sua carteira. Está confortável com a volatilidade do mercado e tem um horizonte de investimento mais longo, o que lhe permite recuperar eventuais perdas. Costuma investir em ações de empresas em crescimento, fundos de investimento de maior risco, mercado de câmbio (forex) e até mesmo em criptomoedas. Está mais propenso a aproveitar oportunidades de curto prazo e pode acompanhar de perto o mercado financeiro.</p>";
    }
}
