
let amigos = []; // Arreglo para almacenar los nombres

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre) {
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach(amigo => {
    const elemento = document.createElement("li");
    elemento.textContent = amigo;
    lista.appendChild(elemento);
  });
}

// Función para sortear al amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * amigos.length);
  const seleccionado = amigos[randomIndex];

  const resultado = document.getElementById("resultado");
  resultado.textContent = `El amigo secreto es: ${seleccionado}`;

  // Llamamos a la función reiniciar después de un retraso
  setTimeout(() => {
    reiniciarApp();
  }, 3000); // 3 segundos de espera antes de reiniciar
}

// Función para reiniciar la aplicación
function reiniciarApp() {
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("amigo").value = "";
  alert("La aplicación ha sido reiniciada. ¡Puedes empezar de nuevo!");
}
