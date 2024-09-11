const btnMenu = document.getElementById('btn-menu');
const sidebar = document.getElementById('sidebar');

// Evento de clique no botão para alternar a classe "hidden"
btnMenu.addEventListener('click', function(){
    sidebar.classList.toggle('hidden');
});  