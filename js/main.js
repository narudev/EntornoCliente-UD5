var arr = [1, 2, 3, 4]; //Creamos array
var nextValue = 1; //Variable, usada como iterador

arr = arr.sort(function() { return Math.random() - 0.5 }); //Desordenamos Array

console.log(arr); //comprobamos array desordenado

document.getElementById("rojo").innerHTML = arr[0]; //Asignamos los valores del array en DOM
document.getElementById("azul").innerHTML = arr[1];
document.getElementById("amarillo").innerHTML = arr[2];
document.getElementById("verde").innerHTML = arr[3];

//Recogemos valores del DOM
const elementRojo = document.getElementById("rojo");
const elementAzul = document.getElementById("azul");
const elementAmarillo = document.getElementById("amarillo");
const elementVerde = document.getElementById("verde");

//Añadimos Eventos 
elementRojo.addEventListener("click", () => {

    checkPressDiv(elementRojo);
});

elementAzul.addEventListener("click", () => {

    checkPressDiv(elementAzul);
})

elementAmarillo.addEventListener("click", () => {

    checkPressDiv(elementAmarillo);
})

elementVerde.addEventListener("click", () => {

    checkPressDiv(elementVerde);
})

function checkValue(value) {

    const isCheckedValue = value == nextValue; //Guardamos en un boolean si el valor pasado coincide con el "iterador"

    if (isCheckedValue) nextValue++; //SI es verdadero aumentamos nextValue

    return isCheckedValue; //devolvemos true o false
}

function checkPressDiv(elemento) {

    const isCheckedValue = checkValue(elemento.innerHTML);

    if (!isCheckedValue) {
        alert("Te has equivocado");
        window.location.reload();
        return;
    }

    if (nextValue > arr.length) { //Si nuestro "iterador" es mayor que la longitud del array hemos llegado al final
        alert("Has ganado");
        window.location.reload();
        return;
    }
}