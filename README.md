# Simulador de Plazo Fijo

Este proyecto es un simulador básico de plazos fijos realizado en JavaScript. Permite a los usuarios calcular el monto final de un plazo fijo ingresando un monto inicial, una tasa de interés anual y un plazo en días. El simulador incluye validaciones para garantizar que los datos ingresados sean válidos.

## Características

- **Cálculo de plazos fijos**: El usuario puede ingresar el monto inicial, la tasa de interés y el plazo en días para calcular el monto final.
- **Validaciones**: 
  - Los montos, la tasa de interés y el plazo deben ser números positivos.
  - El plazo mínimo es de 30 días.
- **Interacción**: El simulador utiliza `prompt` para ingresar datos y `alert` para mostrar los resultados y mensajes de error.

## Archivos del Proyecto

- `index.html`: Contiene la estructura básica de la página y enlaza el script de JavaScript.
- `script.js`: Contiene la lógica del simulador, incluyendo funciones para calcular el monto final y validar la entrada del usuario.

## Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**: Si tienes Git instalado, puedes clonar el repositorio con el siguiente comando:
    ```bash
    git clone https://github.com/andreaBudassi/PreEntrega1-Budassi.git
    ```
2. **Abrir el archivo `index.html`**: Navega a la carpeta del proyecto y abre `index.html` en un navegador web. Esto activará el simulador.

3. **Usar el simulador**: Sigue las instrucciones en las ventanas emergentes para ingresar los datos requeridos. El simulador calculará el monto final y te preguntará si deseas realizar otro cálculo.

## Ejemplo de Uso

1. Ingresa el monto inicial del plazo fijo (número positivo).
2. Ingresa la tasa de interés anual en porcentaje (número positivo).
3. Ingresa el plazo en días (mínimo 30 días).
4. El simulador mostrará el monto final después del plazo ingresado.
5. Puedes optar por realizar otro cálculo o salir.
