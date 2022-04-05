alert ("Coloca tu ciudad y verás los shows programados en Argentina más cercanos a vos!"); 
let provinciaCliente = prompt ("¿Cuál es tu provincia?");
provinciaCliente = provinciaCliente.toLocaleLowerCase
function proximoConcierto(){
    if(provinciaCliente == "cordoba") {
        alert("El próximo concierto cerca de tu provincia es el 20 de Agosto del 2022 en Quality espacio");
    }
    else if (provinciaCliente == "buenos aires") {
        alert("El próximo concierto cerca de tu provincia es el 29 de Octubre del 2022 en Teatro Colón");
    }
    else if (provinciaCliente == "mendoza") {
        alert("El próximo concierto cerca de tu provincia es el 4 de Noviembre del 2022 en Teatro Mendoza");
    }
    else if (provinciaCliente == "chaco") {
        alert("El próximo concierto cerca de tu provincia es el 15 de Octubre del 2022 en Teatro Norte");
    }
     else {
        alert("Lo siento, no hay fechas programadas aún");
    }
}
proximoConcierto();

