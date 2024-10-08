function updateClock(){
    var now = new Date(); /*Data e hota atualizada*/
    var time = now.toLocaleTimeString(); // Formata a hora
    var date = now.toLocaleDateString(); // Formata data
    
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}

setInterval(updateClock, 1000);

updateClock();
