let arr = [21, 65, 64, 457, 343, 23, 142, 4, 33, 23];
console.log(arr)

// Array sum
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  document.getElementById("sum").innerHTML = ("Array sum: "+sum);
  console.log("Array sum: " + sum);
}
arraySum(arr);

// Array max
function maxOfArray(array) {
  document.getElementById('max').innerHTML = ("Array max: " + Math.max.apply(null, array));
  console.log("Array max: " + Math.max.apply(null, array));
}
maxOfArray(arr);

// Array min
function minOfArray(array) {
  document.getElementById("min").innerHTML = ("Array min: " + Math.min.apply(null, array));
  console.log("Array min: " + Math.min.apply(null, array));
}
minOfArray(arr);

// Replace min and max
function swap(array) {
  let temp = array[array.indexOf(Math.max.apply(null, array))];
  array[array.indexOf(Math.max.apply(null, array))] = array[array.indexOf(Math.min.apply(null, array))];
  array[array.indexOf(Math.min.apply(null, array))] = temp;
  document.getElementById("replace").innerHTML = array;
  console.log(array)
}
swap(arr);

// Callback
function createQuote(quote, callback) {
  let myQuote = "Where is the money, " + quote;
  callback(myQuote);
}

function logQuote(quote) {
  console.log(quote);             document.getElementById("quote").innerHTML = quote;
}

createQuote("Lebowski?", logQuote);

// Replace
let a = [4, 43, 94, 7, 2, 4, 3];
function replace(array) {
  for (let i = 0; i < array.length; i++) {

    if (array[i] % 3 === 0 && array[i] % 7 === 0) {
      array[i] = "foobar"
    }

    else if (array[i] % 7 === 0) {
      array[i] = "bar"
    }

    else if (array[i] % 3 === 0) {
      array[i] = "foo"
    }

  }
  document.getElementById("replacement").innerHTML = array;
  console.log(array)
}

replace(a)

// match of two strings
function checker(first, second) {
  let hits = 0
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] == second[j]) {
        hits++;
      }
    }
  }
  let percent = hits / (first.length + second.length) * 100 + " %";
  document.getElementById("hits").innerHTML = ("Matches: " + hits)
  console.log("Matches: " + hits)
  document.getElementById("percent").innerHTML = ("Matches (percent): " + percent);
  console.log("Matches (percent): " + percent)

}

checker("Democracy", "Republic") 
