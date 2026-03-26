
const button = document.getElementById("generate")
const sizeSelect = document.getElementById("size")
const palette = document.getElementById("palette")


function randomColor() {
    let color = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();

    return "#" + color;
}




function randomHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}


button.addEventListener("click", function(){
    const size = parseInt(sizeSelect.value);

    palette.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const color = randomColor();
        const hsl = randomHSL();

        // Crea caja 
        const box = document.createElement("div");
        box.classList.add("color-box");

        
        
        

        //Mostrar HEX y HSL
        box.innerHTML = `
            <div class="color-preview" style="background:${color};"></div>
            <div class="color-info">
                <p class="hex">${color}</p>
                <p class="hsl">${hsl}</p>
            </div>
        `;

        palette.appendChild(box);
        
    }
    
});







