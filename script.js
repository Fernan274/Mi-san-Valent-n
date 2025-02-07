document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const message = document.getElementById("message");
    const moveMessage = document.getElementById("moveMessage");

    const messages = [
        "¿Por qué me haces esto? 😢",
        "No me quieres, ¿verdad? 💔",
        "¡Eso no es justo! 😭",
        "Dame una oportunidad... 🥺",
        "No puedes presionarme así 😣",
        "¡Detente! Me mareo 😵‍💫"
    ];

    // Guardar la posición inicial del botón "No"
    const initialX = noButton.offsetLeft;
    const initialY = noButton.offsetTop;

    noButton.addEventListener("mouseover", () => {
        // Definir un rango de movimiento limitado
        const moveRange = 100; // Distancia máxima que puede moverse

        const randomX = initialX + (Math.random() * moveRange - moveRange / 2);
        const randomY = initialY + (Math.random() * moveRange - moveRange / 2);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        // Mostrar un mensaje aleatorio
        moveMessage.innerText = messages[Math.floor(Math.random() * messages.length)];
        moveMessage.classList.remove("hidden");
    });

    yesButton.addEventListener("click", () => {
        message.innerHTML = "¡Sabía que dirías que sí! ❤️<br>Eres la persona más especial del mundo y no puedo esperar para celebrar este día contigo Te amo muxho mi amor eres lo mas bontio que tengo en esta vida ";
        message.classList.remove("hidden");
        moveMessage.classList.add("hidden"); // Oculta el mensaje del "No"
    });
});