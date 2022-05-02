



function  calcu() {
let Nascimento = document.getElementById("ano").value;
let resultado = document.getElementById("resultado");

if (Nascimento <= 2004) {
    resultado.innerHTML = "Voce pode dirigir"
} else {
    resultado.innerHTML = "Voce nao pode dirigir"
}

  
}