module.exports = function getZerosCount(number, base) {
  // your implementation
  var simples = [];
  // calculate array of simple numbers
  for (var i=2; i<=300; i++) {
    var a = true;
    for (var j=2; j<i; j++) {
      if (i%j == 0) {
        a = false;
      }
    }
    if (a === true) {
      simples.push(i);
    }
  }

  var decBase = [];
  // decompose the base into simple numbers
  var index = 0;
  var b = simples[index];
  while ( b <= base) {
    if (base%b === 0) {
      decBase.push(b);
      base /= b;
    } else {
      index++; 
      b = simples[index];
    }
  }

  var result = [];
  // count the quantity of simples in base in namber
  for (var i=0; i<decBase.length; i++) {
    var count = 0;
    var devider = decBase[i];
    do {
      var c = Math.floor(number/devider);
      count += c;
      devider *= decBase[i];
    } while (c);
    result.push(count);
  }
  
  for (var i=0; i<decBase.length; i++) {
    var d = decBase[i];
    var c = 0;
    for (var j=i; j<decBase.length; j++) {
      if (d == decBase[j]) {
        c++;
      }
    }
    result[i] = Math.floor(result[i]/c);
  }

  return Math.min(...result);
}