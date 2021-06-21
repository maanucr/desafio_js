var paseDia = document.getElementById('pase_dia');
var paseFull = document.getElementById('pase_completo');
var paseDosDias = document.getElementById('pase_dosdias');
var camisaEvento = document.getElementById('camisa_evento');
var etiquetas = document.getElementById('etiquetas');

var botonCalc = document.getElementById('calcular');
var total = document.getElementById('suma-total');
var resumenCompra = document.getElementById('lista-productos');

/*
// Selector para regalos (PROBÉ DE TODO Y NO ARRANCA, ME CANSÉ!)
function elegirRegalo() {
    // Escuchador para seleccionar regalo
    var regalos = document.getElementById('regalo');
    regalos.addEventListener('change', selectorRegalos);

    // Función para ver regalos
    function selectorRegalos(inputRegalo) {
        var regaloElegido = inputRegalo.target[inputRegalo.target.selectedIndex].value;
        console.log("Regalo: " + regaloElegido);
    }
}
*/

function valorTotal() {
    // Multiplicar cantidad de producto por precio:
    var total_paseDia = Number(paseDia.value * 30);
    var total_paseFull = Number(paseFull.value * 50);
    var total_paseDosDias = Number(paseDosDias.value * 45);
    var total_etiquetas = Number(etiquetas.value * 2);
    var total_camisaEvento = Number(camisaEvento.value * 10);

    // Juntar todo en un solo valor
    var sumaTotal = Number(total_paseDia + total_paseFull + total_paseDosDias + total_etiquetas + total_camisaEvento);

    // Mostrar resumen de compra
    resumenCompra.style.display = "block";
    resumenCompra.textContent = 
        "(x" + paseDia.value + ") Pase por día (Viernes): $" + total_paseDia + " / (x" + paseFull.value + ") Pase full (todos los días): $" + total_paseFull + " / (x" + paseDosDias.value + ") Pase por dos días (Viernes y Sábado): $" + total_paseDosDias + " / (x" + camisaEvento.value + ") Camisa del evento: $" + total_camisaEvento + " / (x" + etiquetas.value + ") Paquete de 10 etiquetas: $" +  total_etiquetas /* + " / " + elegirRegalo() */ ;

    // Mostrar el total
    total.textContent = "$" + sumaTotal;
}

botonCalc.addEventListener('click', valorTotal);