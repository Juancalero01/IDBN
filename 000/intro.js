function calcularPromedio(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  const promedio = suma / numeros.length;

  return promedio;
}

const numeros = [2, 4, 6, 8, 10];

const promedio = calcularPromedio(numeros);

console.log(promedio);
