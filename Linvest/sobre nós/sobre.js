// Função para alternar a visibilidade do menu lateral
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px") {
        // Se a barra lateral estiver aberta, feche-a
        sidenav.style.width = "0";
    } else {
        // Se a barra lateral estiver fechada, abra-a
        sidenav.style.width = "250px";
    }
}

// Adiciona uma animação suave ao abrir/fechar o menu lateral
document.addEventListener("DOMContentLoaded", function () {
    var sidenav = document.getElementById("mySidenav");
    sidenav.style.transition = "width 0.3s"; // Animação de transição
});
