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