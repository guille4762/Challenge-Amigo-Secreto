const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ullistaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  if (nombre === "") {
    alert("Debes ingresar un nombre");
    return;
  }
  listaAmigos.push(nombre);
  ullistaAmigos.innerHTML += `<li>${nombre}</li>`;
  inputAmigo.value = ""; 
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[random];
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
