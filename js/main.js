const numero1 = 0;

// 1 FUNCION EXPONENTE
function calcular() {
    //evento.preventDefault();  
  const numero1 = parseInt(document.getElementById("numero1").value);
  const numero2 = parseInt(document.querySelector("#numero2").value);

  let resultado = numero1 ** numero2;
  alert("El resultado es: " + resultado);

  console.log(numero1, numero2);
}

// 2 FUNCION FACTORIAL
function calcularFactorial() {
    //event.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
  
    if (isNaN(numero) || numero < 0 || numero > 19) {
      alert("Por favor, ingrese un número entero válido entre 0 y 19.");
      return;
    }
  
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    document.getElementById("resultado").textContent = `El factorial de ${numero} es ${factorial}.`;
  }

// 3 OBJETO USUARIO
    const formulario = document.getElementById("formulario");
    let nombreusuario = document.getElementById("nombre-resultado");
    let edadusuario = document.getElementById("edad-resultado");

function ejusuario(evento) {
    evento.preventDefault();

    const nombre = formulario.textnombre.value;
    const edad = formulario.numberedad.value;

    nombreusuario.textContent = nombre;
    edadusuario.textContent = edad;

}

formulario.addEventListener("submit", ejusuario);

// 4 FACTORIAL FLECHA

const calcularFactorial4 = () => {
    const numero4 = parseInt(document.getElementById("numero4").value);
  
    if (isNaN(numero4) || numero4 < 0 || numero4 > 19) {
      alert("Por favor, ingrese un número entero válido entre 0 y 19.");
      return;
    }
  
    let factorial4 = 1;
    for (let i = 1; i <= numero4; i++) {
      factorial4 *= i;
    }
  
    document.getElementById("resultado4").textContent = `El factorial de ${numero4} es ${factorial4}.`;
  };

  // 5 FIBONACCI

  const calcularFibonacci = () => {
    const numero = parseInt(document.getElementById("numero").value);
  
    if (isNaN(numero) || numero < 0 || numero > 19) {
      alert("Por favor, ingrese un número entero válido entre 0 y 19.");
      return;
    }
  
    let fibonacci = [0, 1];
    for (let i = 2; i <= numero; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    document.getElementById("resultado").textContent = `La serie de Fibonacci hasta ${numero} es [${fibonacci.join(", ")}].`;
  };
  
  // 6 PALABRA PALINDROMA

  function esPalindroma() {
    var palabra = document.getElementById("palabra").value;
    var alReves = palabra.split("").reverse().join("");
    if (palabra == alReves) {
      alert("La palabra es palíndroma");
    } else {
      alert("La palabra no es palíndroma");
    }
  }