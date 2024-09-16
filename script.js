document.getElementById('vectorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('result').textContent = '';
    
    const vector1Input = document.getElementById('vector1').value.trim();
    const vector2Input = document.getElementById('vector2').value.trim();
    
    const vector1 = vector1Input.split(' ').map(Number);
    const vector2 = vector2Input.split(' ').map(Number);
    
    if (!validateVector(vector1) || !validateVector(vector2)) {
      document.getElementById('result').textContent = 'Error: Ambos vectores deben tener números enteros, estar ordenados ascendentemente y no superar 5 elementos.';
      return;
    }
    
    const mergedVector = mergeVectors(vector1, vector2);
    document.getElementById('result').textContent = `Vector mezclado: ${mergedVector.join(' ')}`;
  });
  
  function validateVector(vector) {
    if (vector.length > 5 || vector.length === 0 || vector.some(isNaN)) {
      return false;
    }
    for (let i = 1; i < vector.length; i++) {
      if (vector[i] <= vector[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  function mergeVectors(vector1, vector2) {
    let i = 0, j = 0;
    const merged = [];
    while (i < vector1.length && j < vector2.length) {
      if (vector1[i] < vector2[j]) {
        merged.push(vector1[i]);
        i++;
      } else {
        merged.push(vector2[j]);
        j++;
      }
    }
    while (i < vector1.length) merged.push(vector1[i++]);
    while (j < vector2.length) merged.push(vector2[j++]);
    return merged;
  }