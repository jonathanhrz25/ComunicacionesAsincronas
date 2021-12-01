let RegistrosHTML = document.getElementById('RegistrosHTML');

let arrayRegistros = [];


async function leeRegistros() {
    const respuesta = await fetch("data/users.json");
//    const respuesta = await fetch("http://veracano.com/jonathanhrz/index.php?nombre=Jonathan&apellido=Hernandez");
    const registros = await respuesta.json();
    
    return registros;
}
async function muestraregistros() {
    try{
    arrayRegistros = await leeRegistros();
    }
    catch (e){
        console.log("Error generado: "+e) 
    }
    console.log(arrayRegistros);
    //RegistrosHTML.innerHTML=arrayRegistros;
    //RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + arrayRegistros.nombre + " " + arrayRegistros.apellido;

    arrayRegistros.forEach(function (item, index) {
        RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + "=> Nombre: " + item.nombre + " <br> " + "UserName del Jugador: " + item.userName + "<br>" + "Numero de Telefono:" + item.telefono + "<br> <br>";

    });

    
}
muestraregistros();