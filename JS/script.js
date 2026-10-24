let heroes = [
  {
    name: "White Fox",
    attack_type: "Proyectiles",
    role: "Estratega",
    difficulty: 3,
    description: "Ami Han, la última de las legendarias Kumiho, puede invocar su ancestral Poder de Nueve Colas para fortificarse y curar a sus aliados en el campo de batalla. Como directora tranquila y capaz de la División Tigre, ella es la columna vertebral inquebrantable de cualquier equipo, sin importar quién sea el enemigo.",
    image:
      "https://static.dotgg.gg/rivals/characters/white-fox-headbig.webp",
  },
  {
    name: "Jubilee",
    attack_type: "Proyectiles",
    role: "Estratega",
    difficulty: 4,
    description: "Jubilation Lee tiene la capacidad mutante de generar ráfagas de plasma pirotécnico. Ella transforma la energía radiante en proyectiles vibrantes que brillan con una luz brillante y colorida. ¡Combinado con sus poderes vampíricos, cada uno de los fuegos artificiales de Jubilee es una celebración vigorizante en el campo de batalla!",
    image:
      "https://static.dotgg.gg/rivals/characters/jubilee-headbig.webp",
  },
  {
    name: "The Hood",
    attack_type: "Hitscan",
    role: "Vanguardia",
    difficulty: 2,
    description: "Como Hood, Parker Robbins está recorriendo el peligroso camino hacia el trono del inframundo criminal. Envuelto en un manto maldito, devora la potencia de fuego de sus enemigos, alimentando su propio poder oscuro. Cuando se transforma en su estado demoníaco completo, ¡un torrente de magia oscura arrasa con todos los que se interponen en su camino!",
    image:
      "https://static.dotgg.gg/rivals/characters/the-hood-headbig.webp",
  },
  {
    name: "Rogue",
    attack_type: "Melee",
    role: "Vanguardia",
    difficulty: 5,
    description: "Anna Marie posee la capacidad mutante de absorber los poderes de los demás con un toque. Su arsenal siempre adaptable de habilidades sobrehumanas ayuda a cambiar el rumbo de cualquier pelea. Después de tocar Raw Chronovium, la fuerza de Rogue alcanzó nuevas alturas, ¡lo que le permitió abrumar a los enemigos con una fuerza imparable!",
    image:
      "https://static.dotgg.gg/rivals/characters/rogue-headbig.webp",
  },
  {
    name: "Gorr The God Butcher",
    attack_type: "Melee",
    role: "Duelista",
    difficulty: 4,
    description: "Gorr, que empuña la palabra necrosword All-Black, es la pesadilla de todos los dioses. La carne divina que desgarra se transforma en una marea interminable de negros berserkers, que marchan para siempre a su paso. Cuando la legión impía del Dios Carnicero desciende, ¡seres tanto mortales como divinos se convierten en sacrificios bajo sus pies!",
    image:
      "https://static.dotgg.gg/rivals/characters/gorr-the-god-butcher-headbig.webp",
  },
  {
    name: "Black Widow",
    attack_type: "Hitscan",
    role: "Duelista",
    difficulty: 4,
    description: "Natasha Romanova es la espía más elitista del mundo en cualquier época. Su dominio del rifle de francotirador elimina objetivos a distancia, mientras que sus porras neutralizan amenazas de corto alcance. ¡Black Widow está cerrada, cargada y lista para dar una mordedura fatal!",
    image:
      "https://static.dotgg.gg/rivals/characters/black-widow-headbig.webp",
  },
  {
    name: "Groot",
    attack_type: "Melee",
    role: "Vanguardia",
    difficulty: 2,
    description: "Un coloso de la flora del Planeta X, el extraterrestre conocido como Groot exhibe una vitalidad mejorada y la capacidad de manipular todas las formas de vegetación. Tan robusto como un árbol imponente, Groot forja su propio camino, sirviendo como el explorador silencioso pero confiable del equipo.",
    image:
      "https://static.dotgg.gg/rivals/characters/groot-headbig.webp",
  },
  {
    name: "Elsa Bloodstone",
    attack_type: "Hitscan",
    role: "Duelista",
    difficulty: 3,
    description: "Nacida en una línea de legendarios cazadores de monstruos, Elsa Bloodstone cuenta con una increíble destreza física y un talento innato para someter a las criaturas más espeluznantes. ¡El instinto de cazar está en su sangre y cada enemigo al que se enfrenta inevitablemente se convierte en presa atrapada en sus trampas!",
    image:
      "https://static.dotgg.gg/rivals/characters/elsa-bloodstone-headbig.webp",
  },
];

// DOM
const contenedor = document.querySelector("#mainContainer");
const buscador = document.querySelector("#buscador");
const contador = document.querySelector("#contador");
const sinResultados = document.querySelector("#sinResultados");
const modal = document.querySelector("#modalHeroe");
const modalContenido = document.querySelector("#modalContenido");
const modalFormulario = document.querySelector("#modalFormulario");
const formHeroe = document.querySelector("#formHeroe");
const mensajeForm = document.querySelector("#mensajeForm");
const textoErrorForm = document.querySelector("#textoErrorForm");
const agregarFormulario = document.querySelector("#agregarFormulario");
const btnGuardarForm = document.querySelector("#btnGuardarForm");
const modalConfirmar = document.querySelector("#modalConfirmar");
const nombreEliminar = document.querySelector("#nombreEliminar");
const modalRestablecer = document.querySelector("#modalRestablecer");
const toast = document.querySelector("#toast");

// Correcciones texto y dificultad

const normalizar = (texto) =>
  String(texto).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const escapar = (texto) =>
  String(texto).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

const estrellas = (n) => "★".repeat(n) + "☆".repeat(Math.max(0, 5 - n));

//Imagen de Respaldo

const IMAGEN_RESPALDO = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">' +
  '<rect width="100%" height="100%" fill="#dbdbdb"/>' +
  '<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" ' +
  'font-family="sans-serif" font-size="28" fill="#4a4a4a">Sin imagen</text></svg>'
);
document.addEventListener("error", (e) => {
  const img = e.target;
  if (img.tagName === "IMG" && img.closest("#mainContainer, #modalContenido") && !img.dataset.respaldo) {
    img.dataset.respaldo = "1";
    img.src = IMAGEN_RESPALDO;
  }
}, true);


// Scroll bloqueado

function actualizarScroll() {
  document.documentElement.classList.toggle("is-clipped", Boolean(document.querySelector(".modal.is-active")));
}

// LocalStorage

const CLAVE_ALMACENAMIENTO = "coleccion_personajes";

const estadoVacio = () => ({ agregados: [], editados: {}, eliminados: [] });
const idBase = (heroe) => `base:${heroe.name}`;

function esHeroeValido(h) {
  return Boolean(h) && typeof h === "object" &&
    ["name", "attack_type", "role", "description", "image"].every(
      (k) => typeof h[k] === "string" && h[k].trim() !== ""
    ) &&
    Number.isInteger(h.difficulty) && h.difficulty >= 1 && h.difficulty <= 5;
}

function cargarEstado() {
  const estado = estadoVacio();
  try {
    const crudo = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    if (!crudo) return estado;
    const datos = JSON.parse(crudo);

    if (Array.isArray(datos.agregados)) {
      estado.agregados = datos.agregados.filter((h) => esHeroeValido(h) && typeof h.id === "string");
    }
    if (datos.editados && typeof datos.editados === "object") {
      Object.entries(datos.editados).forEach(([id, h]) => {
        if (id.startsWith("base:") && esHeroeValido(h)) estado.editados[id] = h;
      });
    }
    if (Array.isArray(datos.eliminados)) {
      estado.eliminados = datos.eliminados.filter((id) => typeof id === "string");
    }
  } catch {
    // Datos dañados
  }
  return estado;
}

function guardarEstado() {
  try {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(estado));
    return true;
  } catch {
    return false;
  }
}

function construirColeccion() {
  const base = heroes
    .map((h) => ({ id: idBase(h), ...h }))
    .filter((h) => !estado.eliminados.includes(h.id))
    .map((h) => (estado.editados[h.id] ? { id: h.id, ...estado.editados[h.id] } : h));
  const agregados = estado.agregados.map((h) => ({ ...h }));
  return [...base, ...agregados];
}

let estado = cargarEstado();
let coleccion = construirColeccion();

// Guardar coleccion

function conservar() {
  const guardado = guardarEstado();
  coleccion = construirColeccion();
  return guardado;
}

function agregarHeroe(datos) {
  const id = `u-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
  estado.agregados.push({ id, ...datos });
  return conservar();
}

function editarHeroe(id, datos) {
  if (id.startsWith("base:")) {
    estado.editados[id] = { ...datos };
  } else {
    const i = estado.agregados.findIndex((h) => h.id === id);
    if (i >= 0) estado.agregados[i] = { id, ...datos };
  }
  return conservar();
}

function eliminarHeroe(id) {
  if (id.startsWith("base:")) {
    if (!estado.eliminados.includes(id)) estado.eliminados.push(id);
    delete estado.editados[id];
  } else {
    estado.agregados = estado.agregados.filter((h) => h.id !== id);
  }
  return conservar();
}

// Heroes Cards

function mostrarHeroes(lista) {
  contenedor.innerHTML = lista
    .map((heroe) => `
      <div class="column is-one-quarter">
        <div class="card heroe-card" data-id="${escapar(heroe.id)}" tabindex="0" role="button"
             aria-label="Ver detalles de ${escapar(heroe.name)}">
          <div class="card-image">
            <figure class="image is-square">
              <img src="${escapar(heroe.image)}" alt="${escapar(heroe.name)}" loading="lazy" />
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <p class="title is-5">${escapar(heroe.name)}</p>
          </div>
        </div>
      </div>`)
    .join("");

  sinResultados.classList.toggle("is-hidden", lista.length > 0);
  contador.textContent = `${lista.length} personaje(s)`;
}

// Buscar

function filtrar() {
  const termino = normalizar(buscador.value.trim());
  const filtrados = coleccion.filter((heroe) =>
    normalizar(heroe.name).includes(termino) ||
    normalizar(heroe.role).includes(termino) ||
    normalizar(heroe.attack_type).includes(termino)
  );
  mostrarHeroes(filtrados);
}

let temporizador;
buscador.addEventListener("input", () => {
  clearTimeout(temporizador);
  temporizador = setTimeout(filtrar, 150);
});

// Mensajes (toast)

let temporizadorToast;
function mostrarToast(texto, tipo = "success") {
  toast.textContent = texto;
  toast.classList.toggle("is-success", tipo === "success");
  toast.classList.toggle("is-warning", tipo === "warning");
  toast.classList.remove("is-hidden");
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => toast.classList.add("is-hidden"), 3500);
}

function avisarResultado(guardado, textoExito) {
  if (guardado) {
    mostrarToast(textoExito);
  }
}

// Detalles del Personaje

let idDetalle = null;

function abrirDetalle(id) {
  const heroe = coleccion.find((h) => h.id === id);
  if (!heroe) return;
  idDetalle = id;

  modalContenido.innerHTML = `
    <div class="card">
      <div class="card-image">
        <figure class="image is-square">
          <img src="${escapar(heroe.image)}" alt="${escapar(heroe.name)}" />
        </figure>
      </div>
      <div class="card-content">
        <div class="detalle-encabezado">
          <p class="title is-3">${escapar(heroe.name)}</p>
          <div class="detalle-acciones">
            <button class="button is-info is-light" type="button" data-accion="editar"
                    title="Editar héroe" aria-label="Editar ${escapar(heroe.name)}">✏️</button>
            <button class="button is-danger is-light" type="button" data-accion="eliminar"
                    title="Eliminar héroe" aria-label="Eliminar ${escapar(heroe.name)}">🗑️</button>
          </div>
        </div>
        <div class="tags mb-3">
          <span class="tag is-link is-medium">${escapar(heroe.role)}</span>
          <span class="tag is-info is-medium">${escapar(heroe.attack_type)}</span>
          <span class="tag is-warning is-medium" title="Dificultad ${heroe.difficulty} de 5">
            Dificultad: ${estrellas(heroe.difficulty)}
          </span>
        </div>
        <div class="content">${escapar(heroe.description)}</div>
      </div>
    </div>`;

  modal.classList.add("is-active");
  actualizarScroll();
}

function cerrarDetalle() {
  modal.classList.remove("is-active");
  actualizarScroll();
}

// Abrir Detalle
function manejarAbrir(e) {
  const card = e.target.closest(".heroe-card");
  if (card) abrirDetalle(card.dataset.id);
}
contenedor.addEventListener("click", manejarAbrir);

// Editar y Eliminar Botones

modalContenido.addEventListener("click", (e) => {
  const boton = e.target.closest("[data-accion]");
  if (!boton) return;
  const heroe = coleccion.find((h) => h.id === idDetalle);
  if (!heroe) return;

  if (boton.dataset.accion === "editar") {
    cerrarDetalle();
    abrirFormulario(heroe);
  } else if (boton.dataset.accion === "eliminar") {
    abrirConfirmacion(heroe);
  }
});

document.querySelector("#cerrarModal").addEventListener("click", cerrarDetalle);
modal.querySelector(".modal-background").addEventListener("click", cerrarDetalle);

// Eliminar Confirmacion

let idPorEliminar = null;

function abrirConfirmacion(heroe) {
  idPorEliminar = heroe.id;
  nombreEliminar.textContent = heroe.name;
  modalConfirmar.classList.add("is-active");
  actualizarScroll();
  document.querySelector("#cancelarEliminar").focus();
}

function cerrarConfirmacion() {
  idPorEliminar = null;
  modalConfirmar.classList.remove("is-active");
  actualizarScroll();
}

document.querySelector("#confirmarEliminar").addEventListener("click", () => {
  if (!idPorEliminar) return;
  const guardado = eliminarHeroe(idPorEliminar);
  cerrarConfirmacion();
  cerrarDetalle();
  filtrar();
  avisarResultado(guardado, "El personaje se eliminó de la colección.");
});
document.querySelector("#cancelarEliminar").addEventListener("click", cerrarConfirmacion);
document.querySelector("#cerrarConfirmar").addEventListener("click", cerrarConfirmacion);
modalConfirmar.querySelector(".modal-background").addEventListener("click", cerrarConfirmacion);

// Restablecer Coleccion

const hayCambios = () =>
  estado.agregados.length > 0 || estado.eliminados.length > 0 || Object.keys(estado.editados).length > 0;

function restablecerColeccion() {
  estado = estadoVacio();
  coleccion = construirColeccion();
  try {
    localStorage.removeItem(CLAVE_ALMACENAMIENTO);
    return true;
  } catch {
    return false;
  }
}

function cerrarRestablecer() {
  modalRestablecer.classList.remove("is-active");
  actualizarScroll();
}

document.querySelector("#btnRestablecer").addEventListener("click", () => {
  if (!hayCambios()) {
    mostrarToast("La colección ya está en su estado original.");
    return;
  }
  modalRestablecer.classList.add("is-active");
  actualizarScroll();
  document.querySelector("#cancelarRestablecer").focus();
});

document.querySelector("#confirmarRestablecer").addEventListener("click", () => {
  const guardado = restablecerColeccion();
  cerrarRestablecer();
  buscador.value = "";
  filtrar();
  avisarResultado(guardado, "La colección se restableció a los héroes originales.");
});
document.querySelector("#cancelarRestablecer").addEventListener("click", cerrarRestablecer);
document.querySelector("#cerrarRestablecer").addEventListener("click", cerrarRestablecer);
modalRestablecer.querySelector(".modal-background").addEventListener("click", cerrarRestablecer);

// Formulario Agregar y Editar

const CAMPOS = ["name", "attack_type", "role", "difficulty", "description", "image"];
let idEdicion = null;

const REGEX_NOMBRE = /^[\p{L}\p{N}][\p{L}\p{N} .'’-]*$/u;
const REGEX_CATEGORIA = /^\p{L}[\p{L} -]*$/u;
const REGEX_DESCRIPCION = /^[\p{L}\p{N}\s.,;:!?¡¿()"'“”‘’\-–—…%&\/+]+$/u;
const REGEX_IMAGEN = /\.(png|jpe?g|webp|gif|avif|svg)$/i;

function validarCategoria(valor, etiqueta) {
  if (!valor) return `${etiqueta} es obligatorio.`;
  if (valor.length < 3 || valor.length > 30) return `${etiqueta} debe tener entre 3 y 30 caracteres.`;
  if (!REGEX_CATEGORIA.test(valor)) return `${etiqueta} solo puede contener letras, espacios y guiones.`;
  return "";
}

const validadores = {
  name(valor) {
    if (!valor) return "El nombre es obligatorio.";
    if (valor.length < 2 || valor.length > 30) return "El nombre debe tener entre 2 y 30 caracteres.";
    if (!REGEX_NOMBRE.test(valor)) return "El nombre solo puede contener letras, números, espacios, puntos, apóstrofes y guiones.";
    if (coleccion.some((h) => h.id !== idEdicion && normalizar(h.name) === normalizar(valor))) {
      return "Ya existe un personaje con ese nombre.";
    }
    return "";
  },
  attack_type: (valor) => validarCategoria(valor, "El tipo de ataque"),
  role: (valor) => validarCategoria(valor, "El rol"),
  difficulty(valor) {
    if (!valor) return "La dificultad es obligatoria.";
    if (!/^[1-5]$/.test(valor)) return "La dificultad debe ser un número entero del 1 al 5.";
    return "";
  },
  description(valor) {
    if (!valor) return "La descripción es obligatoria.";
    if (valor.length < 20) return "La descripción debe tener al menos 20 caracteres.";
    if (valor.length > 600) return "La descripción no puede superar los 600 caracteres.";
    if (!REGEX_DESCRIPCION.test(valor)) return "La descripción contiene caracteres no permitidos (por ejemplo < > { } [ ] \\ | ^ ~ ` $ # @ = * _).";
    return "";
  },
  image(valor) {
    if (!valor) return "La URL de la imagen es obligatoria.";
    if (/\s/.test(valor)) return "La URL no puede contener espacios.";
    let url;
    try { url = new URL(valor); } catch { return "Ingresa una URL válida, por ejemplo https://sitio.com/imagen.webp"; }
    if (!["http:", "https:"].includes(url.protocol)) return "La URL debe comenzar con http:// o https://";
    if (!REGEX_IMAGEN.test(url.pathname)) return "La URL debe dirigir a una imagen (.png, .jpg, .jpeg, .webp, .gif, .avif o .svg).";
    return "";
  }
};

const campoEntrada = (nombre) => formHeroe.querySelector(`[name="${nombre}"]`);
const leerCampo = (nombre) => campoEntrada(nombre).value.trim();

function mostrarErrorCampo(nombre, error) {
  const entrada = campoEntrada(nombre);
  entrada.classList.toggle("is-danger", Boolean(error));
  entrada.setAttribute("aria-invalid", error ? "true" : "false");
  formHeroe.querySelector(`[data-error="${nombre}"]`).textContent = error;
}

function llenarSugerencias() {
  const unicos = (campo) => [...new Set(coleccion.map((h) => h[campo]))];
  const opciones = (lista) => lista.map((v) => `<option value="${escapar(v)}"></option>`).join("");
  document.querySelector("#listaAtaques").innerHTML = opciones(unicos("attack_type"));
  document.querySelector("#listaRoles").innerHTML = opciones(unicos("role"));
}

// DISTINCION: Formulario vacio = Agregar Heroe. Formulario con datos = Editar Heroe
function abrirFormulario(heroe = null) {
  idEdicion = heroe ? heroe.id : null;
  formHeroe.reset();
  CAMPOS.forEach((c) => mostrarErrorCampo(c, ""));
  mensajeForm.classList.add("is-hidden");

  if (heroe) {
    CAMPOS.forEach((c) => { campoEntrada(c).value = String(heroe[c]); });
    agregarFormulario.textContent = "Editar héroe";
    btnGuardarForm.textContent = "Guardar cambios";
    textoErrorForm.textContent = "No se pueden guardar los cambios del héroe debido a un error en el formulario.";
  } else {
    agregarFormulario.textContent = "Agregar nuevo héroe";
    btnGuardarForm.textContent = "Guardar héroe";
    textoErrorForm.textContent = "No se puede agregar el héroe debido a un error en el formulario.";
  }

  llenarSugerencias();
  modalFormulario.classList.add("is-active");
  actualizarScroll();
  campoEntrada("name").focus();
}

function cerrarFormulario() {
  modalFormulario.classList.remove("is-active");
  idEdicion = null;
  actualizarScroll();
}

// Validacion en tiempo real

formHeroe.addEventListener("input", (e) => {
  const nombre = e.target.name;
  if (!CAMPOS.includes(nombre)) return;
  if (e.target.classList.contains("is-danger")) {
    mostrarErrorCampo(nombre, validadores[nombre](leerCampo(nombre)));
  }
  if (!CAMPOS.some((c) => campoEntrada(c).classList.contains("is-danger"))) {
    mensajeForm.classList.add("is-hidden");
  }
});

formHeroe.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = {};
  let primerError = null;
  CAMPOS.forEach((campo) => {
    datos[campo] = leerCampo(campo);
    const error = validadores[campo](datos[campo]);
    mostrarErrorCampo(campo, error);
    if (error && !primerError) primerError = campo;
  });

  if (primerError) {
    mensajeForm.classList.remove("is-hidden");
    mensajeForm.scrollIntoView({ block: "nearest" });
    campoEntrada(primerError).focus();
    return;
  }

  const heroeNuevo = {
    name: datos.name,
    attack_type: datos.attack_type,
    role: datos.role,
    difficulty: Number(datos.difficulty),
    description: datos.description,
    image: datos.image
  };

  if (idEdicion) {
    // Editar Heroe
    const guardado = editarHeroe(idEdicion, heroeNuevo);
    cerrarFormulario();
    filtrar();
    avisarResultado(guardado, "¡Los datos del personaje se actualizaron correctamente!");
  } else {
    // Heroe nuevo
    const guardado = agregarHeroe(heroeNuevo);
    cerrarFormulario();
    buscador.value = "";
    filtrar();
    if (contenedor.lastElementChild) {
      contenedor.lastElementChild.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    avisarResultado(guardado, "¡Tu personaje se agregó correctamente a la colección!");
  }
});

document.querySelector("#btnAgregar").addEventListener("click", () => abrirFormulario());
document.querySelector("#cerrarFormulario").addEventListener("click", cerrarFormulario);
document.querySelector("#cancelarFormulario").addEventListener("click", cerrarFormulario);

// Iniciar
filtrar();