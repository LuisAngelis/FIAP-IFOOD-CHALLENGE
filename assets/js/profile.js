const btnMenu = document.getElementById('btn-menu');
const sidebar = document.getElementById('sidebar');

btnMenu.addEventListener('click', function(){
    sidebar.classList.toggle('hidden');
});  