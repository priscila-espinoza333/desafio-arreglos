/*1.- Siempre Hambriento */ 
function siempreHambriento(arr) {
  var comidaEncontrada = false; 
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "comida") {
      console.log("delicioso");
      comidaEncontrada = true; 
    }
  }

  if (!comidaEncontrada) {
    console.log("Ham Ham! Tengo hambre!!"); 
  }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);

siempreHambriento([4, 1, 5, 7, 2]);

console.log("------------------------------")

/*2.- Filtro paso alto */

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]); 
    }
  }
  return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

console.log("------------------------------")

/*3.- Mejor que el promedio */

function betterThanAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var average = sum / arr.length;
  var count = 0;

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > average) {
      count++;
    }
  }

  return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

console.log("------------------------------")

/*4.- Arreglo invertido */

function reverse(arr) {
  var reversedArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]); 
  }

  return reversedArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

console.log("------------------------------")

/*5.- Arreglo fibonacci */

function fibonacciArray(n) {
  var fibArr = [0, 1];

  for (var i = 2; i < n; i++) {
    var nextFib = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(nextFib);
  }

  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // Debería mostrar [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
