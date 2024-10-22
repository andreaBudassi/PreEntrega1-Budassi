// Función para calcular el monto final de un plazo fijo
function calcularPlazoFijo(montoInicial, tasaInteres, dias) {
    const plazoEnAnios = dias / 365; // Convertir días a años
    const interes = (montoInicial * tasaInteres * plazoEnAnios) / 100;
    return montoInicial + interes
}

// Función para validar si un número es positivo
function esNumeroPositivo(valor) {
    return !isNaN(valor) && valor > 0
}

// Función principal que simula el plazo fijo
function simuladorPlazoFijo() {
    let continuar = true

    while (continuar) {
        // Pedimos al usuario que ingrese los datos
        let montoInicial = parseFloat(prompt("Ingrese el monto inicial del plazo fijo:"));
        let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (TNA %):"));
        let dias = parseInt(prompt("Ingrese el plazo en días (mínimo 30 días):"));

        // Validamos que los datos sean correctos
        if (!esNumeroPositivo(montoInicial) || !esNumeroPositivo(tasaInteres) || !esNumeroPositivo(dias) || dias < 30) {
            alert("Por favor, ingrese valores válidos. Asegúrese de que sean números positivos y que el plazo sea de al menos 30 días.");
            continue;
        }

        // Calculamos el monto final
        let montoFinal = calcularPlazoFijo(montoInicial, tasaInteres, dias);

        // Mostramos el resultado
        alert(`El monto final después de ${dias} día(s) es: $${montoFinal.toFixed(2)}`);

        // Preguntamos si el usuario quiere hacer otro cálculo
        let respuesta;
        do {
            respuesta = prompt("¿Desea realizar otro cálculo? (y/n)").toLowerCase();
            if (respuesta !== 'y' && respuesta !== 'n') {
                alert("Opción incorrecta. Por favor, ingrese 'y' o 'n'.");
            }
        } while (respuesta !== 'y' && respuesta !== 'n');

        // Controlamos la respuesta para continuar o salir
        if (respuesta === 'n') {
            continuar = false; // Salir del ciclo
        }
    }
}

// Llamamos a la función principal
simuladorPlazoFijo();