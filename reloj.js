function Relojdigital(){
    let $tiempo=document.querySelector('.tiempo'),
    $fecha= document.querySelector('.fecha');
    if(!$tiempo || !$fecha) return;

    let f=new Date(),
    dia= f.getDate(),
    mes= f.getMonth()+1,
    anio= f.getFullYear(),
    diaSemana=f.getDay();

    dia= ('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2)

    let timeString= f.toLocaleTimeString();
    $tiempo.innerHTML=timeString;
    $tiempo.style.opacity='1';
    $tiempo.style.visibility='visible';

    let semana=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let showSemana= (semana[diaSemana])
    $fecha.innerHTML = `${showSemana} ${dia}.${mes}.${anio}`;
    $fecha.style.opacity='1';
    $fecha.style.visibility='visible';
}

window.addEventListener('load', function(){
    setTimeout(function(){
        Relojdigital();
        setInterval(Relojdigital, 1000);
    }, 500);
});
