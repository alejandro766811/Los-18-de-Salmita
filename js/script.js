// =========================
// MUSICA
// =========================

function iniciarViaje(){

    const musica =
    document.getElementById("musicaInicio");

    if (!musica) return;

    musica.volume = 0;

    musica.play().catch(error => {

        console.log(
            "La reproducción automática fue bloqueada:",
            error
        );

    });

    let volumen = 0;

    const fade = setInterval(() => {

        if (volumen < 0.5) {

            volumen += 0.01;

            musica.volume = volumen;

        } else {

            clearInterval(fade);

        }

    }, 100);

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

}

// =========================
// ANIMACIONES AL SCROLL
// =========================

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        });

    document
        .querySelectorAll(".fade-up")
        .forEach(el => observer.observe(el));

}

// =========================
// CARTA
// =========================

const sobre =
    document.querySelector(".sobre");

const mensaje =
    document.querySelector(".mensaje");

if(sobre && mensaje){

    sobre.addEventListener("click",()=>{

        mensaje.classList.toggle("abierto");

        if(mensaje.classList.contains("abierto")){

            const musicaInicio =
            document.getElementById("musicaInicio");

            const musicaCarta =
            document.getElementById("musicaCarta");

            // Detener música principal

            musicaInicio.pause();

            // Reiniciar canción Totoro

            musicaCarta.currentTime = 0;

            musicaCarta.volume = 0;

            musicaCarta.play();

            crearPetalos();

            // Fade In

            let volumen = 0;

            const fadeCarta = setInterval(()=>{

                if(volumen < 0.6){

                    volumen += 0.02;

                    musicaCarta.volume = volumen;

                }else{

                    clearInterval(fadeCarta);

                }

            },100);

        }

    });

}

// =========================
// LUCIERNAGAS
// =========================

const firefliesContainer =
    document.querySelector(".fireflies");

if (firefliesContainer) {

    for (let i = 0; i < 35; i++) {

        const firefly =
            document.createElement("div");

        firefly.classList.add("firefly");

        firefly.style.left =
            Math.random() * 100 + "%";

        firefly.style.animationDuration =
            (6 + Math.random() * 10) + "s";

        firefly.style.animationDelay =
            Math.random() * 8 + "s";

        firefliesContainer.appendChild(firefly);

    }

}

// =========================
// HOJAS
// =========================

const leavesContainer =
    document.querySelector(".leaves-container");

if (leavesContainer) {

    const hojas =
        ["🍃", "🍂", "🌿"];

    for (let i = 0; i < 25; i++) {

        const hoja =
            document.createElement("div");

        hoja.classList.add("leaf");

        hoja.innerHTML =
            hojas[
            Math.floor(
                Math.random() * hojas.length
            )
            ];

        hoja.style.left =
            Math.random() * 100 + "%";

        hoja.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        hoja.style.animationDelay =
            Math.random() * 10 + "s";

        hoja.style.fontSize =
            (18 + Math.random() * 18) + "px";

        leavesContainer.appendChild(hoja);

    }

}

// =========================
// INTRO
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const intro =
            document.getElementById("intro");

        if (intro) {

            intro.style.opacity = "0";

            setTimeout(() => {

                intro.style.display = "none";

            }, 2000);

        }

    }, 14000);

});

// =========================
// ESTRELLAS FUGACES
// =========================

setInterval(() => {

    const star =
        document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top =
        Math.random() * 40 + "%";

    star.style.left =
        Math.random() * 100 + "%";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2000);

}, 5000);

// =========================
// FONDO DE ESTRELLAS
// =========================

const stars =
    document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 350; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        stars.appendChild(star);

    }

}

// =========================
// MENSAJE SECRETO
// =========================

const secretBtn =
    document.getElementById("secret-btn");

const secretMessage =
    document.getElementById("secret-message");

if (secretBtn && secretMessage) {

    secretBtn.addEventListener("click", () => {

        secretMessage.classList.add("show");

    });

}
function crearPetalos(){

    const container =
    document.querySelector(".petals-container");

    if(!container) return;

    for(let i=0;i<40;i++){

        const petal =
        document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML = "🌸";

        petal.style.left =
        Math.random()*100 + "%";

        petal.style.animationDuration =
        (5 + Math.random()*5) + "s";

        petal.style.fontSize =
        (20 + Math.random()*20) + "px";

        container.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },10000);

    }

}