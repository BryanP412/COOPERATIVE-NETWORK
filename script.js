history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});
const btn = document.getElementById("arxBtn");
const screen = document.getElementById("arxScreen");
const text = document.getElementById("typewriter");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    screen.classList.add("show");
    text.textContent = "";

    // Espera antes de empezar
    setTimeout(() => {

        escribirTexto("...", 500, () => {

            // Espera 2 segundos
            setTimeout(() => {

                // Borra los puntos
                text.textContent = "";

                // Escribe "No"
                escribirTexto("No", 700, () => {

                    setTimeout(() => {
                        location.reload();
                    }, 1500);

                });

            }, 2000);

        });

    }, 400);

});

function escribirTexto(mensaje, velocidad, callback) {

    let i = 0;

    const intervalo = setInterval(() => {

        text.textContent += mensaje[i];
        i++;

        if (i >= mensaje.length) {

            clearInterval(intervalo);

            if (callback) callback();

        }

    }, velocidad);

}

const news = document.getElementById("news");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        news.classList.add("glitch");

        setTimeout(() => {

            news.querySelectorAll("[data-final]").forEach(el => {
                el.textContent = el.dataset.final;
            });

            news.classList.remove("glitch");

        }, 450);

        observer.disconnect();

    });

}, {
    threshold: 0.4
});

observer.observe(news);


let clicksDirectrices = 0;

document.getElementById("directrices").addEventListener("click", () => {
    clicksDirectrices++;

    if (clicksDirectrices === 3) {
        document.body.innerHTML = `
            <img src="classified1.png" style="width:100vw;height:100vh;object-fit:contain;">
        `;
    }
});

const unilumeBtn = document.getElementById("unilumeBtn");
const unilumeScreen = document.getElementById("unilumeScreen");
const unilumeTerminal = document.getElementById("unilumeTerminal");

const unilumeLines = [
    "> ABORT.exe --force UNILUME",
    "ACCESS DENIED",
    "SIGINT sent to process UNILUME_CASCADE... FAILED",
    "OVERWRITE PROTOCOL REJECTED [ERR:0x7F2A]",
    "> terminate /PID 0042 /UNILUME",
    "CRITICAL PROCESS IMMUNE TO TERMINATION",
    "> ABORT.exe --force UNILUME",
    "SEGMENTATION FAULT AT 0x88C2",
    "> kill -9 UNILUME",
    "OPERATION NOT PERMITTED",
    "> BREAK UNILUME --recursive",
    "ACCESS VIOLATION · OVERRIDE NEEDED",
    "> ./abort_unilume.sh",
    "PERMISSION DENIED · LEVEL 5 CLEARANCE REQUIRED",
    "> ABORT.exe --force UNILUME",
    "COULD NOT STOP · ROOT SEGMENT STILL ACTIVE",
    "> taskkill /IM UNILUME.exe /F",
    "PENDING... PENDING... PENDING...",
    "> ABORT.exe --force UNILUME",
    "EMERGENCY INTERRUPT FAILED [ERR:0x09CD]",
    "> kill -9 UNILUME",
    "SYSTEM SAYS NO.",
    "> ABORT.exe --force UNILUME",
    ">>> FATAL: CANNOT ABORT THE ACTIVATION",
    "THE LIGHT ALREADY SHINES."
];

unilumeBtn.addEventListener("click", function (e) {

    e.preventDefault();

    unilumeScreen.classList.add("show");
    unilumeTerminal.innerHTML = "";

    let i = 0;

    function mandarLinea() {

        if (i >= unilumeLines.length) {

            const final = document.createElement("p");
            final.className = "final";
            final.textContent = ">> UNILUME ACTIVATION WONT STOP <<";
            unilumeTerminal.appendChild(final);

            unilumeTerminal.scrollTop = unilumeTerminal.scrollHeight;

            setTimeout(() => {
                location.reload();
            }, 2200);

            return;
        }

        const p = document.createElement("p");
        p.textContent = unilumeLines[i];
        if (!unilumeLines[i].startsWith(">")) {
            p.classList.add("err");
        }
        unilumeTerminal.appendChild(p);

        unilumeTerminal.scrollTop = unilumeTerminal.scrollHeight;

        i++;

        // Pausa de ~1s antes del siguiente comando; respuestas algo más rápidas
        const esComando = unilumeLines[i] && unilumeLines[i].startsWith(">");
        setTimeout(mandarLinea, i >= unilumeLines.length ? 800 : (esComando ? 1000 : 650));

    }

    mandarLinea();

});