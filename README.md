# Mezclador de Vectores Ordenados

Este proyecto es una aplicación web simple que permite a los usuarios ingresar dos vectores de números enteros ordenados ascendentemente y obtener un vector combinado y ordenado como resultado.

## Características

- Permite ingresar dos vectores de hasta 5 números enteros cada uno.
- Valida que los números estén en orden ascendente.
- Combina y ordena los dos vectores ingresados.
- Interfaz de usuario simple e intuitiva.

## Instalación

1. Clone este repositorio:
   ```
   git clone https://github.com/su-usuario/mezclador-vectores-ordenados.git
   ```
2. Navegue al directorio del proyecto:
   ```
   cd mezclador-vectores-ordenados
   ```
3. Abra el archivo `index.html` en su navegador web preferido.

## Uso

1. Abra la aplicación en su navegador.
2. En el campo "Vector 1", ingrese hasta 5 números enteros separados por espacios y en orden ascendente. Por ejemplo: `1 3 6 9 17`
3. En el campo "Vector 2", haga lo mismo. Por ejemplo: `2 4 10 17`
4. Haga clic en el botón "Mezclar Vectores".
5. El resultado aparecerá debajo, mostrando los números de ambos vectores combinados y ordenados.

## Explicación del Código JavaScript

El archivo `script.js` contiene la lógica principal de la aplicación. Aquí está una explicación de las partes clave:

### Event Listener

```javascript
document.getElementById('vectorForm').addEventListener('submit', function(event) {
  // ... código del evento ...
});
```
Este código añade un event listener al formulario. Cuando se envía el formulario, se ejecuta la función que procesa los vectores y muestra el resultado.

### Validación de Vectores

```javascript
function validateVector(vector) {
  // ... código de validación ...
}
```
Esta función verifica que cada vector:
- No tenga más de 5 elementos
- No esté vacío
- Contenga solo números
- Esté en orden ascendente

### Combinación de Vectores

```javascript
function mergeVectors(vector1, vector2) {
  // ... código de combinación ...
}
```
Esta función toma dos vectores ordenados y los combina en un solo vector ordenado. Utiliza un enfoque de "dos punteros" para combinar eficientemente los vectores.

## Contribuir

Las contribuciones son bienvenidas. Por favor, abra un issue primero para discutir qué le gustaría cambiar.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
