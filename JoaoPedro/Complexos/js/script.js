
function Complex(a = 0, b = 0){
  var c0 = {
    real: 0,
    imaginary: 0
  }
    if(typeof a === "string"){
    var v = a.split("");
      for(var i = 0; i < v.length; i++)if(v[i] == " ")v.splice(i, 1);
      v = v.join("").split("+");
      if(v.length > 1){
        v = v[0] + "|" + v[1].replace("i", "");
        v = v.split("|");
        c0.real = Number(v[0]);
        c0.imaginary = Number(v[1]);
      }
      else{
        if(v[0].indexOf("i") > -1){
          v = v[0].replace("i", "");
          c0.imaginary = Number(v[0])
        }
        else{
          c0.real = Number(v[0]);
        }
      }
    }
    else{
      c0.real = a;
      c0.imaginary = b;
    }
  return c0;

}

function add(a, b){
  var c0 = {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary
  }
  return c0;
}
function subtract(a, b){
  var c0 = {
    real: a.real - b.real,
    imaginary: a.imaginary - b.imaginary
  }
  return c0;
}
function multiply(a, b){
  var c0 = {
    real: (a.real * b.real) - (a.imaginary * b.imaginary),
    imaginary: (a.real * b.imaginary) + (b.real * a.imaginary)
  }
  return c0;
}
function conjugate(a){
  var c0 = {
    real: a.real,
    imaginary: - a.imaginary
  }
  return c0;
}
function complexToString(a){
  var b;
  if((a.real != 0) && (a.imaginary != 0))
  {
    if(a.imaginary.toString().indexOf("-") > -1)
    {
      b = a.real.toString() + a.imaginary.toString() + "i";

    }
    else{
      b = a.real + "+" + a.imaginary + "i";
    }
  }
  else{
    if(a.real != 0){
      b = a.real.toString();
    }
    else{
      if(a.imaginary.toString.indexOf("-") > -1)
      {
        b = a.imaginary + "i";
      }
      else{
        b = "+" + a.imaginary + "i";
      }
    }
  }
  return b;
}
var c1 = {real: 2, imaginary: 3};
console.log(c1.real === 2);
console.log(c1.imaginary === 3);

var c2 = Complex('2+3i');
console.log(c2.real === 2);
console.log(c2.imaginary === 3);

var c3 = Complex('5');
console.log(c3.real === 5);
console.log(c3.imaginary === 0);

var c4 = Complex('4i');
console.log(c4.real === 0);
console.log(c4.imaginary === 4);

var c5 = Complex('5 + 4i');
console.log(c5.real === 5);
console.log(c5.imaginary === 4);

var c6 = Complex('5.5 + 4.3i');
console.log(c6.real === 5.5);
console.log(c6.imaginary === 4.3);

var c7 = Complex(2, 3);
console.log(c7.real === 2);
console.log(c7.imaginary === 3);

var c8 = Complex(2);
console.log(c8.real === 2);
console.log(c8.imaginary === 0);

var c9 = add(c1, c5); // 2+3i + 5+4i = 7+7i
console.log(c9.real === 7);
console.log(c9.imaginary === 7);

var c10 = subtract(c5, c1); // 5+4i - 2+3i = 3+1i
console.log(c10.real === 3);
console.log(c10.imaginary === 1);

var c11 = multiply(c1, c9); // 2+3i * 7+7i = 2*7 - 3*7
console.log(c11.real === -7);
console.log(c11.imaginary === 35);

var c12 = subtract(c1, c10); // 2+3i - 3+1i = -1+2i
console.log(c12.real === -1);
console.log(c12.imaginary === 2);

var c13 = conjugate(c9); // conjugate(7+7i) = 7-7i
console.log(c13.real === 7);
console.log(c13.imaginary === -7);

console.log(add(Complex("4+7i"), Complex("5+9i")).real === 9);
console.log(add(Complex("4+7i"), Complex("5+9i")).imaginary === 16);

console.log(add(c1, c1).real === 4);
console.log(add(c1, c1).imaginary === 6);

console.log(add(c9, c10).real === 10);
console.log(add(c9, c10).imaginary === 8);

console.log(subtract(c9, c10).real === 4);
console.log(subtract(c9, c10).imaginary === 6);

console.log(subtract(c7, c4).real === 2);
console.log(subtract(c7, c4).imaginary === -1);

console.log(multiply(c9, c10).real === 14);
console.log(multiply(c9, c10).imaginary === 28);

console.log(multiply(c7, c4).real === -12);
console.log(multiply(c7, c4).imaginary === 8);

console.log(conjugate(c10).real === 3);
console.log(conjugate(c10).imaginary === -1);

console.log(conjugate(c7).real === 2);
console.log(conjugate(c7).imaginary === -3);

var s1 = complexToString(c11);
console.log(s1 === "-7+35i");
console.log(complexToString(c12) === "-1+2i");
console.log(complexToString(c13) === "7-7i");
console.log(complexToString(Complex(8)) === "8");
console.log(complexToString(Complex(8, 2)) === "8+2i");
console.log(complexToString(Complex("8 + 2i")) === "8+2i");
