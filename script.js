// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.getElementById('vectorForm').addEventListener('submit', function(event) {
  // Previene el comportamiento por defecto del formulario (evita que la página se recargue)
  event.preventDefault();
  
  // Limpia el contenido del elemento de resultado
  document.getElementById('result').textContent = '';
  
  // Obtiene los valores ingresados por el usuario para ambos vectores
  const vector1Input = document.getElementById('vector1').value.trim();
  const vector2Input = document.getElementById('vector2').value.trim();
  
  // Convierte las cadenas de entrada en arrays de números
  // El método split(' ') separa la cadena en un array usando el espacio como delimitador
  // map(Number) convierte cada elemento del array a un número
  const vector1 = vector1Input.split(' ').map(Number);
  const vector2 = vector2Input.split(' ').map(Number);
  
  // Valida ambos vectores utilizando la función validateVector
  if (!validateVector(vector1) || !validateVector(vector2)) {
    // Si alguno de los vectores no es válido, muestra un mensaje de error
    document.getElementById('result').textContent = 'Error: Ambos vectores deben tener números enteros, estar ordenados ascendentemente y no superar 5 elementos.';
    return; // Sale de la función para evitar procesar vectores inválidos
  }
  
  // Si ambos vectores son válidos, los combina utilizando la función mergeVectors
  const mergedVector = mergeVectors(vector1, vector2);
  
  // Muestra el resultado combinado y ordenado en el elemento de resultado
  document.getElementById('result').textContent = `Vector mezclado: ${mergedVector.join(' ')}`;
});

// Función para validar cada vector ingresado
function validateVector(vector) {
  // Verifica que el vector no tenga más de 5 elementos y no esté vacío
  if (vector.length > 5 || vector.length === 0) {
    return false;
  }
  
  // Verifica que todos los elementos sean números válidos
  // some() devuelve true si al menos un elemento cumple la condición
  // isNaN() verifica si un valor no es un número
  if (vector.some(isNaN)) {
    return false;
  }
  
  // Verifica que los números estén en orden ascendente
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] <= vector[i - 1]) {
      return false; // Si encuentra un número menor o igual al anterior, el vector no está ordenado
    }
  }
  
  // Si pasa todas las validaciones, retorna true
  return true;
}

// Función para combinar dos vectores ordenados en uno solo
function mergeVectors(vector1, vector2) {
  let i = 0, j = 0; // Índices para recorrer vector1 y vector2 respectivamente
  const merged = []; // Array para almacenar el resultado combinado
  
  // Compara elementos de ambos vectores y los añade ordenadamente al resultado
  while (i < vector1.length && j < vector2.length) {
    if (vector1[i] < vector2[j]) {
      merged.push(vector1[i]);
      i++;
    } else {
      merged.push(vector2[j]);
      j++;
    }
  }
  
  // Añade los elementos restantes de vector1, si los hay
  while (i < vector1.length) merged.push(vector1[i++]);
  
  // Añade los elementos restantes de vector2, si los hay
  while (j < vector2.length) merged.push(vector2[j++]);
  
  // Retorna el vector combinado y ordenado
  return merged;
}