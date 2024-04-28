// Função para alternar a barra lateral do menu
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
        document.querySelector(".content").style.marginLeft = "0";
    } else {
        sidenav.style.width = "250px";
        document.querySelector(".content").style.marginLeft = "250px";
    }
}

// Função para calcular o perfil de investidor e do projeto de vida
function calculateProfile() {
    var form = document.getElementById("quizForm");
    var inputs = form.querySelectorAll('input[type="radio"]:checked');
    
    var investorTotal = 0;
    var lifeProjectTotal = 0;

    // Define quais perguntas contribuem para cada perfil
    // Vamos supor que perguntas 1-5 são para perfil do investidor
    for (var i = 0; i < 5; i++) {
        investorTotal += parseInt(inputs[i].value);
    }

    // Perguntas 6-15 são para perfil do projeto de vida
    for (var i = 5; i < inputs.length; i++) {
        lifeProjectTotal += parseInt(inputs[i].value);
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Limpa o resultado para exibir os novos perfis
    
    var investorProfile = "";
    var lifeProjectProfile = "";

    // Determinação do perfil do investidor
    if (investorTotal >= 5 && investorTotal <= 8) {
        investorProfile = "Perfil Conservador";
        resultDiv.innerHTML += "<h2>Seu Perfil de Investidor é: " + investorProfile + "</h2>" +
            "<p>Investidores conservadores preferem segurança e ativos de baixo risco, como títulos do governo ou renda fixa. Isso se alinha a um projeto de vida que valoriza estabilidade e busca reduzir incertezas. Essas escolhas podem indicar metas como segurança na aposentadoria, compra de um imóvel ou criação de um fundo de emergência.A estratégia conservadora é para quem busca uma abordagem segura, evitando grandes riscos para alcançar seus objetivos financeiros a longo prazo. Ela se encaixa em um projeto de vida que prioriza tranquilidade e estabilidade.</p>";
    } else if (investorTotal >= 9 && investorTotal <= 12) {
        investorProfile = "Perfil Moderado";
        resultDiv.innerHTML += "<h2>Seu Perfil de Investidor é: " + investorProfile + "</h2>" +
            "<p>O perfil moderado busca um equilíbrio entre segurança e retorno, mantendo uma carteira diversificada. Este tipo de investidor adota uma abordagem mais cautelosa, mas ainda busca oportunidades de crescimento. Ao equilibrar ativos mais seguros com investimentos de maior risco, o investidor moderado tenta minimizar a volatilidade sem sacrificar completamente o potencial de retorno. A diversificação é uma estratégia central para reduzir o risco, distribuindo os investimentos por diferentes classes de ativos, setores e regiões. Assim, esse perfil representa uma abordagem equilibrada, ideal para quem deseja proteger seu capital, mas também busca alguma valorização ao longo do tempo.</p>";
    } else if (investorTotal >= 13 && investorTotal <= 15) {
        investorProfile = "Perfil Arrojado";
        resultDiv.innerHTML += "<h2>Seu Perfil de Investidor é: " + investorProfile + "</h2>" +
            "<p>Investidores arrojados estão dispostos a assumir riscos maiores em busca de retornos mais elevados. Eles têm uma maior tolerância à volatilidade e entendem que flutuações no mercado são parte do processo para alcançar resultados significativos. Esses investidores geralmente adotam estratégias mais agressivas, diversificadas e de longo prazo, confiando em análises cuidadosas para fundamentar suas decisões. O compromisso com o risco é equilibrado por uma visão clara dos objetivos financeiros e uma compreensão sólida dos mercados em que estão atuando. Com esse perfil, eles procuram oportunidades que possam oferecer recompensas substanciais, mesmo que isso signifique aceitar um nível mais alto de incerteza no caminho.</p>";
    }

    // Determinação do perfil do projeto de vida
    if (lifeProjectTotal >= 10 && lifeProjectTotal <= 20) {
        lifeProjectProfile = "Perfil de Projeto de Vida Equilibrado";
        resultDiv.innerHTML += "<h2>Seu Perfil de Projeto de Vida é: " + lifeProjectProfile + "</h2>" +
            "<p>Você busca uma vida equilibrada, com harmonia e felicidade. Para você, o bem-estar é fundamental e se manifesta tanto na esfera pessoal quanto na profissional. Você valoriza a importância de manter um equilíbrio saudável entre trabalho e vida pessoal, acreditando que a felicidade é essencial para uma vida significativa. Sua abordagem visa integrar todos os aspectos da vida de maneira harmoniosa, promovendo um sentimento de contentamento e satisfação. Com essa perspectiva, você cria um ambiente que favorece a alegria e o equilíbrio, resultando em uma jornada mais completa e gratificante.</p>";
    } else if (lifeProjectTotal >= 21 && lifeProjectTotal <= 30) {
        lifeProjectProfile = "Perfil de Projeto de Vida Orientado ao Crescimento";
        resultDiv.innerHTML += "<h2>Seu Perfil de Projeto de Vida é: " + lifeProjectProfile + "</h2>" +
            "<p>Seu foco está no desenvolvimento pessoal e profissional, impulsionado por uma visão de futuro ambiciosa. Você busca aprimorar suas habilidades e alcançar marcos significativos tanto na carreira quanto na vida pessoal. Acredita no aprendizado contínuo e valoriza o progresso, sempre mirando oportunidades para avançar. Ao mesmo tempo, mantém uma ambição saudável, buscando excelência sem perder de vista o equilíbrio e o bem-estar. Com essa abordagem, você constrói um futuro sólido e repleto de conquistas.</p>";
    } else if (lifeProjectTotal >= 31 && lifeProjectTotal <= 45) {
        lifeProjectProfile = "Perfil de Projeto de Vida Voltado à Liberdade";
        resultDiv.innerHTML += "<h2>Seu Perfil de Projeto de Vida é: " + lifeProjectProfile + "</h2>" +
            "<p>Você prioriza a liberdade e a autonomia, acreditando no valor de experiências significativas. Para você, a capacidade de tomar decisões independentes é crucial, e isso se reflete tanto no seu estilo de vida quanto na sua abordagem ao trabalho. Com uma visão de futuro ambiciosa, seu foco está no desenvolvimento pessoal e profissional, sempre buscando aprimorar suas habilidades e alcançar marcos importantes. Você acredita no aprendizado contínuo e se dedica a oportunidades que lhe permitam crescer e alcançar a excelência, sem perder de vista a necessidade de equilíbrio e bem-estar. Essa busca por autonomia e significado é a força motriz por trás das suas escolhas e metas para o futuro.</p>"
    }
}