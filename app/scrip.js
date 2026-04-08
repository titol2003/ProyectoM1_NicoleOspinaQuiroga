
const button = document.getElementById("generate")
const sizeSelect = document.getElementById("size")
const palette = document.getElementById("palette")
const formatSelect = document.getElementById("format")

// 🔹 Array para guardar estados de bloqueo
let lockedColors = [];

// 🔹 Función HEX (corregida + mayúscula)
function randomColor() {
    let color = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();

    return "#" + color;
}

// 🔹 Función HSL
function randomHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

// 🔹 Evento botón
button.addEventListener("click", function () {

    const size = parseInt(sizeSelect.value);
    const format = formatSelect.value;

    if (lockedColors.length !== size) {
    lockedColors = [];
    }

    // Guardar referencia a colores anteriores
    const previousColors = [];

    for (let box of palette.children) {
        previousColors.push({
            hex: box.dataset.hex,
            hsl: box.dataset.hsl
        });
    }

    // Limpiar contenedor
    palette.innerHTML = "";

    for (let i = 0; i < size; i++) {

        // Inicializar estado si no existe
        if (lockedColors[i] === undefined) {
            lockedColors[i] = false;
        }

        let color;
        let hsl;

        if (lockedColors[i] && previousColors[i]) {
            color = previousColors[i].hex;
            hsl = previousColors[i].hsl;
        } else {
            color = randomColor();
            hsl = randomHSL();
        }

        let displayText = format === "hex" ? color : hsl;

        // 🔹 Crear tarjeta
        const box = document.createElement("div");
        box.classList.add("color-box");

        // Guardar datos
        box.dataset.hex = color;
        box.dataset.hsl = hsl;

        // 🔹 Contenido HTML
        box.innerHTML = `
            <div class="color-preview" style="background:${color};"></div>
            <div class="color-info">
                <p class="color-code">${displayText}</p>
                <button class="lock-btn">🔓</button>
            </div>
        `;

        // 🔹 Botón de bloqueo
        const lockBtn = box.querySelector(".lock-btn");

        // Mantener estado visual
        if (lockedColors[i]) {
            lockBtn.textContent = "🔒";
        }

        // Evento click
        lockBtn.addEventListener("click", () => {
            lockedColors[i] = !lockedColors[i];
            lockBtn.textContent = lockedColors[i] ? "🔒" : "🔓";
        });

        // Copiar al hacer click (excepto el botón)
        box.addEventListener("click", (e) => {
            if (e.target.classList.contains("lock-btn")) return;

            navigator.clipboard.writeText(box.dataset.current || displayText);

            const text = box.querySelector(".color-code");
            const original = text.textContent;

            text.textContent = "¡Copiado!";

            setTimeout(() => {
                text.textContent = original;
            }, 1000);
        });

        // 🔹 Agregar al DOM
        palette.appendChild(box);
    }
});

formatSelect.addEventListener("change", function () {

    const format = formatSelect.value;

    const boxes = palette.children;

    for (let box of boxes) {

        const color = box.dataset.hex;
        const hsl = box.dataset.hsl;

        const textElement = box.querySelector(".color-code");

        // Cambiar texto según formato
        if (format === "hex") {
            textElement.textContent = color;
        } else {
            textElement.textContent = hsl;
        }

        // 🔥 IMPORTANTE: actualizar el valor para copiar
        box.dataset.current = format === "hex" ? color : hsl;
    }
});







