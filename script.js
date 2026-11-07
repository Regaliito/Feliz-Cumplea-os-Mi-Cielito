
/* =================================
   BIENVENIDA
================================= */

function entrar() {
    document.getElementById("inicio").classList.add("oculto");

    document.getElementById("contenido").classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    iniciarCorazones();
}



/* ==========================================
   HISTORIA INTERACTIVA DE ADRIÁN
========================================== */

// Control del recorrido

let recuerdoActual = 0;

let listaRecuerdos = [];

let tituloRecuerdos = "";


/* RAZONES POR LAS QUE ME ENAMORÉ */

const razonesEnamore = [

    {
        titulo: "La primera flor 🌷",
        texto: "Nunca nadie me había regalado una flor solo porque quiso ser lindo y tú fuiste la primera persona en hacerlo. Quizás para ti fue un detalle pequeño, pero para mí significó muchísimo. No sabes lo bonito que fue sentir que alguien pensaba en mí de esa manera.",
        numero: "01"
    },

    {
        titulo: "Cuando estuviste para nosotras ❤️",
        texto: "Recuerdo aquella vez que Bruno empezó a perseguirnos y tú nos ayudaste a mí y a Jenny, cuando ni siquiera éramos algo. No tenías ninguna obligación de hacerlo, pero estuviste ahí. Y creo que nunca voy a olvidar ese gesto.",
        numero: "02"
    },

    {
        titulo: "Aquella salida a McDonald's 🍟",
        texto: "Todavía me da risa recordar aquella salida a la mac, cuando ni siquiera éramos nada y pusiste tu mano sobre mi pierna. Yo por dentro estaba en modo: 'Quietaaaa'. Definitivamente estaba intentando disimular los nervios.",
        numero: "03"
    },

    {
        titulo: "Tu abrazo 🥺",
        texto: "Recuerdo cuando me viste llorar por primera vez y simplemente me abrazaste durante muchísimo tiempo. A veces un abrazo dice más que cualquier cosa y ese es uno de los que guardo con más cariño.",
        numero: "04"
    },

    {
        titulo: "Tus besitos 💋",
        texto: "Me encanta cuando me das muchooos besitos. Son esos pequeños momentos en los que me haces sentir querida, consentida y feliz. Puede parecer algo sencillo, pero para mí son de mis muestras de cariño favoritas.",
        numero: "05"
    },

    {
        titulo: "Cuando buscas hacerme sentir mejor 🧸",
        texto: "Cuando estoy triste buscas la manera de venir a verme, comprarme algo o simplemente pasar tiempo conmigo. Valoro muchísimo que, incluso cuando tienes tus propias cosas, busques la manera de hacerme sentir un poquito mejor.",
        numero: "06"
    },

    {
        titulo: "Tu manera de hacerme reír ❤️",
        texto: "Tienes esa capacidad de hacerme reír incluso cuando no estoy teniendo un buen día. Me encanta compartir tonterías contigo, reírnos juntos y descubrir que hasta los momentos más simples pueden convertirse en recuerdos bonitos.",
        numero: "07"
    }

];


/* ==========================================
   MOSTRAR EL RECORRIDO
========================================== */


function mostrarRazones(lista, titulo) {

    listaRecuerdos = lista.map((item, indice) => {

        if (typeof item === "string") {
            return {
                titulo: "Algo que quiero que sepas ❤️",
                texto: item,
                numero: String(indice + 1).padStart(2, "0")
            };
        }

        return item;
    });

    tituloRecuerdos = titulo;
    recuerdoActual = 0;

    // Diseño diferente para la sección "Me importas"

    if (titulo.includes("importas")) {

        return `
            <div class="historia historia-importas">

                <p class="historia-etiqueta">
                    UNAS PALABRAS PARA ALGUIEN MUY ESPECIAL
                </p>

                <h2 class="titulo-ventana">
                    Cositas que quiero que sepas ❤️
                </h2>

                <p class="introduccion-importas">
                    Porque a veces hay sentimientos que merecen
                    ser recordados y palabras que quiero que
                    nunca olvides.
                </p>

                <div id="recuerdo-dinamico"></div>

            </div>
        `;
    }

    // Diseño de la historia de enamoramiento

    return `
        <div class="historia">

            <p class="historia-etiqueta">
                UNA PEQUEÑA HISTORIA DE NOSOTROS
            </p>

            <h2 class="titulo-ventana">
                ${titulo}
            </h2>

            <div id="recuerdo-dinamico"></div>

        </div>
    `;
}


/* ==========================================
   DIBUJAR CADA RECUERDO
========================================== */

function dibujarRecuerdo() {

    const contenedor = document.getElementById("recuerdo-dinamico");

    if (!contenedor) return;

    const esImportas = tituloRecuerdos.toLowerCase().includes("importas");

    // FINAL DE LAS RAZONES POR LAS QUE ME IMPORTAS

    if (recuerdoActual >= listaRecuerdos.length) {

        if (esImportas) {

            contenedor.innerHTML = `

                <div class="final-importas">

                    <div class="final-icono">💌</div>

                    <h2>Y nunca quiero que lo olvides...</h2>

                <h3>Eres importante para mí.</h3>

            <p>
                No solamente por lo que haces por mí, sino por la persona que eres.
                Me importa tu felicidad, tus sueños, tus días buenos y los no tan buenos.
                Y espero poder recordarte muchas veces lo especial que eres para mí.
            </p>

            <h3>Con muchísimo cariño. ❤️</h3>


                    <button class="btn-historia"
                        onclick="reiniciarRecuerdos()">
                        Volver a leer mis mensajitos ❤️
                    </button>

                    <button class="btn-secundario"
                        onclick="cerrarSeccion()">
                        Volver a mis regalos
                    </button>

                </div>

            `;

            return;
        }

        // FINAL DE LA HISTORIA DE ENAMORAMIENTO

        contenedor.innerHTML = `

            <div class="final-historia">

                <div class="final-icono">❤️</div>

                <p class="historia-etiqueta">
                    FIN DE NUESTROS RECUERDOS...
                </p>

                <h2>¿O APENAS EL COMIENZO?</h2>

                <p>
                    Y aunque podría seguir enumerando
                    mil razones más, creo que lo más bonito
                    es que muchas de ellas todavía las
                    seguimos construyendo juntos.
                </p>

                <p class="frase-final">
                    Todavía nos quedan muchísimos
                    recuerdos por crear. ❤️
                </p>

                <button class="btn-historia"
                    onclick="reiniciarRecuerdos()">
                    Volver a leer nuestra historia ↻
                </button>

                <button class="btn-secundario"
                    onclick="cerrarSeccion()">
                    Volver a mis regalos
                </button>

            </div>

        `;

        return;
    }

    const recuerdo = listaRecuerdos[recuerdoActual];

    const progreso = ((recuerdoActual + 1) / listaRecuerdos.length) * 100;

    // PRESENTACIÓN DE LOS MENSAJES

    if (esImportas) {

        contenedor.innerHTML = `

            <div class="progreso-contenedor">

                <div class="progreso-texto">
                    <span>MENSAJITO ${recuerdo.numero}</span>
                    <span>${recuerdoActual + 1} de ${listaRecuerdos.length}</span>
                </div>

                <div class="progreso-fondo">
                    <div class="progreso-barra"
                        style="width: ${progreso}%">
                    </div>
                </div>

            </div>

            <div class="nota-importas">

                <div class="nota-decoracion">💌</div>

                <p class="nota-etiqueta">
                    ALGO QUE QUIERO QUE SEPAS
                </p>

                <p class="nota-texto">
                    ${recuerdo.texto}
                </p>

                <div class="nota-corazon">❤️</div>

            </div>

            <div class="navegacion-recuerdos">

                <button class="btn-secundario"
                    onclick="cambiarRecuerdo(-1)"
                    ${recuerdoActual === 0 ? "disabled" : ""}>
                    ← Anterior
                </button>

                <button class="btn-historia"
                    onclick="cambiarRecuerdo(1)">
                    ${recuerdoActual === listaRecuerdos.length - 1
                        ? "Terminar mensajitos ❤️"
                        : "Leer otro mensajito →"}
                </button>

            </div>

        `;

        return;
    }

    // PRESENTACIÓN DE LOS RECUERDOS

    contenedor.innerHTML = `

        <div class="progreso-contenedor">

            <div class="progreso-texto">
                <span>RECUERDO ${recuerdo.numero}</span>
                <span>${recuerdoActual + 1} de ${listaRecuerdos.length}</span>
            </div>

            <div class="progreso-fondo">
                <div class="progreso-barra"
                    style="width: ${progreso}%">
                </div>
            </div>

        </div>

        <div class="tarjeta-recuerdo">

            <div class="decoracion-recuerdo">🕷️</div>

            <h2>${recuerdo.titulo}</h2>

            <div class="linea-decorativa">❤️</div>

            <p>${recuerdo.texto}</p>

            <div class="corazon-recuerdo">🕸️</div>

        </div>

        <div class="navegacion-recuerdos">

            <button class="btn-secundario"
                onclick="cambiarRecuerdo(-1)"
                ${recuerdoActual === 0 ? "disabled" : ""}>
                ← Anterior
            </button>

            <button class="btn-historia"
                onclick="cambiarRecuerdo(1)">
                ${recuerdoActual === listaRecuerdos.length - 1
                    ? "Ver el final ❤️"
                    : "Siguiente recuerdo →"}
            </button>

        </div>

    `;
}


/* ==========================================
   CAMBIAR DE RECUERDO
========================================== */

function cambiarRecuerdo(direccion) {

    recuerdoActual += direccion;

    if (recuerdoActual < 0) {
        recuerdoActual = 0;
    }

    dibujarRecuerdo();

}


/* ==========================================
   REINICIAR LA HISTORIA
========================================== */

function reiniciarRecuerdos() {

    recuerdoActual = 0;

    dibujarRecuerdo();

}



/* =================================
   RAZONES POR LAS QUE ME IMPORTAS
================================= */

const razonesImportas = [

    "Porque tu felicidad también es importante para mí. Me encanta verte sonreír y saber que estás bien. Ojalá nunca te falten motivos para sentirte feliz.",

    "Porque no quiero estar solamente en tus días bonitos. También quiero acompañarte cuando estés cansado, preocupado o cuando simplemente tengas un día difícil. No tienes que estar bien todo el tiempo conmigo.",

    "Porque quiero verte cumplir cada uno de tus sueños. Deseo que la vida te dé muchísimas oportunidades y que nunca pierdas esas ganas de hacer las cosas que te ilusionan.",

    "Porque me importa cómo te sientes, incluso cuando no encuentras las palabras para explicarlo. Quiero que siempre tengas la confianza de poder contarme lo que te pasa, sin miedo a ser juzgado.",

    "Porque admiro muchas cosas de ti, incluso algunas que quizás tú mismo no notas. Me gusta tu manera de ser, tu forma de tratarme y esos pequeños detalles que te hacen tan especial.",

    "Porque disfruto muchísimo compartir mi tiempo contigo. No necesitamos hacer algo extraordinario para que un momento sea bonito; muchas veces basta con tenerte cerquita.",

    "Porque quiero celebrar tus logros como si fueran míos, emocionarme con tus buenas noticias y recordarte lo orgullosa que estoy de ti. Quiero verte crecer y alcanzar todo aquello que deseas.",

    "Porque quisiera que nunca dudaras de lo valioso que eres. No tienes que demostrarme nada ni ser perfecto para merecer cariño. Me gustas siendo tú, con tus virtudes y también con tus imperfecciones.",

    "Porque me nace cuidarte, consentirte y tener pequeños detalles contigo. Me gusta hacerte sentir querido, así como tú, muchas veces sin darte cuenta, haces que yo también me sienta especial.",

    "Y porque, entre tantas personas que existen en el mundo, me alegra muchísimo que nuestros caminos se hayan encontrado. No sé qué nos tenga preparado la vida, pero sí sé que hoy eres alguien a quien quiero muchísimo y cuya felicidad deseo de corazón."
];

/* =================================
   CANCIONES QUE TE DEDICO
================================= */


const canciones = [

    {
        nombre: "Creo en ti",
        artista: "Reik",
        imagen: "img/cancion1.jpg",
        archivo: "./musica/cancion1.mp3"
    },

    {
        nombre: "Todo cambió",
        artista: "Camila",
        imagen: "img/cancion2.jpg",
        archivo: "./musica/cancion2.mp3"
    },

    {
        nombre: "Bendita tu luz",
        artista: "Maná",
        imagen: "img/cancion3.jpg",
        archivo: "./musica/cancion3.mp3"
    },

    {
        nombre: "Disfruto",
        artista: "Carla Morrison",
        imagen: "img/cancion4.jpg",
        archivo: "./musica/cancion4.mp3"
    },

    {
        nombre: "Te vi venir",
        artista: "Sin Bandera",
        imagen: "img/cancion5.jpg",
        archivo: "./musica/cancion5.mp3"
    }

];


/* =================================
   CARTA DE CUMPLEAÑOS
================================= */

const carta = `
    <p>Mi amor hermoso:</p>

    <p>
    Aunque sé que para vos este día quizás no sea tan importante,
    para mí sí lo es. Porque para mí significa que es el día en 
    que celebro tu vida y agradezco que estés aquí, que existás 
    y que hoy pueda tenerte conmigo.
    </p>

    <p>
    Espero que este nuevo año de vida esté lleno de momentos bonitos,
    oportunidades, sueños cumplidos y muchísimas razones para sonreír.
    Deseo de todo corazón que la vida te sorprenda con cosas maravillosas
    y que nunca te falten motivos para sentirte feliz.
    </p>

    <p>
    Quiero aprovechar esta carta para decirte lo feliz que me hace
    haberte conocido y lo importante que te has vuelto para mí.
    En este corto tiempo (que, curiosamente, se siente como si hubiera
    pasado muchísimo más), has llegado a significar tanto en mi vida
    que a veces ni siquiera encuentro las palabras para explicarlo.
    He llegado a amarte de una manera que probablemente ni te imaginás,
    y uno de mis mayores deseos es que podamos seguir compartiendo
    este sentimiento y construyendo momentos juntos.
    </p>

    <p>
    Y aunque ciertamente no sé qué nos espera en el futuro,
    hay algo que tengo muy claro hoy, en nuestro presente:
    disfruto cada día que comparto con vos, sé cuánto te amo
    y sé que deseo lo mejor para vos. Deseo con todo mi corazón
    que la vida y el universo te regalen cosas bonitas,
    que te permitan cumplir cada uno de tus sueños y que siempre
    encontrés razones para ser feliz.
    </p>

    <p>
    Gracias por ser simplemente vos. Gracias por quererme,
    por tus detalles, por tu cariño y por cada uno de los momentos
    que hemos compartido. Gracias por permitirme conocerte,
    por dejarme descubrir cada vez un poquito más de vos y por
    hacerme tan feliz con cosas que quizás para vos parecen pequeñas,
    pero que para mí significan muchísimo.
    </p>

    <p>
    Nunca olvidés lo que significás para mí, cuánto te amo
    y lo importante que sos en mi vida. Si hay algo que deseo
    hoy y siempre es verte feliz, verte crecer, cumplir tus sueños
    y disfrutar de todas las cosas bonitas que merecés.
    </p>

    <p><strong>¡Feliz cumpleaños, mi amor! ❤️</strong></p>

    <p>
    No sé cuántos cumpleaños más me permitirá celebrar la vida
    a tu lado, pero si algo deseo, es que este sea solamente
    el primero de muchos que podamos compartir.
    </p>

    <p><strong>Con todo mi cariño. ❤️</strong></p>
`;


/* =================================
   FUNCIÓN PARA MOSTRAR CANCIONES
================================= */


function mostrarCanciones() {

    let contenido = `
        <h2 class="titulo-ventana">
            Canciones que te dedico 🎵
        </h2>

        <p class="texto-canciones">
            Cada una tiene un pedacito de lo que siento por ti. ❤️
        </p>

        <div class="lista-canciones">
    `;

    canciones.forEach((cancion, indice) => {

        contenido += `
            <div class="cancion">

                <img src="${cancion.imagen}" alt="${cancion.nombre}">

                <div class="info-cancion">

                    <span class="numero-cancion">
                        CANCIÓN 0${indice + 1}
                    </span>

                    <h3>${cancion.nombre}</h3>
                    <p>${cancion.artista}</p>

                    <audio controls preload="metadata"
                        onplay="pausarOtrasCanciones(this)">
                        <source src="${cancion.archivo}" type="audio/mpeg">
                        Tu navegador no puede reproducir este audio.
                    </audio>

                </div>
            </div>
        `;
    });

    contenido += `</div>`;

    return contenido;
}


function pausarOtrasCanciones(audioActual) {

    document.querySelectorAll(".cancion audio").forEach(audio => {

        if (audio !== audioActual) {
            audio.pause();
        }

    });

}


/* =================================
   ABRIR CADA SECCIÓN
================================= */

let seccionAbierta = false;
function abrirSeccion(seccion) {

    const ventana = document.getElementById("ventana");

    const contenido = document.getElementById("contenido-dinamico");

    if (seccion === "enamore") {

        contenido.innerHTML = mostrarRazones(
            razonesEnamore,
            "Razones por las que me enamoré de ti ❤️"
        );

    }

    else if (seccion === "importas") {

        contenido.innerHTML = mostrarRazones(
            razonesImportas,
            "Razones por las que me importas 🥰"
        );

    }

    else if (seccion === "canciones") {

        contenido.innerHTML = mostrarCanciones();

    }

    
else if (seccion === "carta") {

    contenido.innerHTML = `

        <div class="sobre-contenedor">

            <h2 class="titulo-ventana">
                Tienes una carta especial 💌
            </h2>

            <div class="sobre" id="sobre">

                <div class="sobre-solapa"></div>

                <div class="sobre-cuerpo">
                    <span>❤️</span>
                </div>

            </div>

            <p class="mensaje-sobre">
                Tengo unas palabras que quiero compartir contigo.
            </p>

            <button class="btn-principal" onclick="abrirCarta()">
                Abrir mi carta ❤️
            </button>

            <div id="carta-abierta" class="oculto">
                <div class="carta">
                    ${carta}
                </div>
            </div>

        </div>

    `;

}


// Registrar la apertura para el botón de atrás del celular

if (!seccionAbierta) {

    history.pushState(
        { ventanaRegalo: true },
        "",
        "#regalo"
    );

    seccionAbierta = true;

}

ventana.classList.add("activa");

document.body.style.overflow = "hidden";

// Dibujar el primer recuerdo

if (seccion === "enamore" || seccion === "importas") {
    dibujarRecuerdo();
}

}

/* =================================
   ABRIR CARTA
================================= */

function abrirCarta() {

    const sobre = document.getElementById("sobre");

    const cartaAbierta = document.getElementById("carta-abierta");

    sobre.classList.add("sobre-abierto");

    setTimeout(() => {

        cartaAbierta.classList.remove("oculto");

        cartaAbierta.classList.add("animacion-carta");

        cartaAbierta.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 700);

}



/* =================================
   CERRAR VENTANA
================================= */

function cerrarVentanaVisual() {

    document.getElementById("ventana").classList.remove("activa");

    document.body.style.overflow = "auto";

    seccionAbierta = false;

}


function cerrarSeccion() {

    if (seccionAbierta) {

        history.back();

    } else {

        cerrarVentanaVisual();

    }

}


/* =================================
   BOTÓN ATRÁS DEL CELULAR
================================= */

window.addEventListener("popstate", function() {

    if (seccionAbierta) {

        cerrarVentanaVisual();

    }

});


/* Cerrar al presionar fuera de la ventana */

document.getElementById("ventana").addEventListener("click", function(event) {

    if (event.target === this) {

        cerrarSeccion();

    }

});


/* Cerrar con la tecla ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarSeccion();

    }

});



/* =================================
   CORAZONES FLOTANTES
================================= */

function crearCorazon() {

    const corazon = document.createElement("span");

    const corazones = ["❤️", "💕", "💗", "🕷️"];

    corazon.innerHTML = corazones[
        Math.floor(Math.random() * corazones.length)
    ];

    corazon.classList.add("corazon-flotante");

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    corazon.style.fontSize =
        (15 + Math.random() * 20) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 7000);
}


/* Crear corazones al entrar */

function iniciarCorazones() {

    for (let i = 0; i < 12; i++) {
        setTimeout(crearCorazon, i * 180);
    }

    setInterval(crearCorazon, 800);
}



/* =================================
   MENSAJES SORPRESA
================================= */

const mensajesSorpresa = [

    "Si pudiera elegir nuevamente, me encantaría coincidir contigo. ❤️",

    "No necesitas hacer nada extraordinario para ser especial para mí.",

    "Mi parte favorita de muchos de mis días es compartirlos contigo.",

    "Espero que nunca dudes de lo mucho que me importas.",

    "De todas las casualidades bonitas, conocerte ha sido una de mis favoritas.",

    "Hay personas que llegan y hacen que todo se sienta un poquito más bonito. Tú eres una de ellas. ❤️"

];

function mensajeSorpresa() {

    const mensaje = mensajesSorpresa[
        Math.floor(Math.random() * mensajesSorpresa.length)
    ];

    const resultado = document.getElementById("mensaje-sorpresa");

    resultado.innerHTML = mensaje;

    resultado.classList.remove("oculto");

    resultado.classList.add("animacion-carta");

}
