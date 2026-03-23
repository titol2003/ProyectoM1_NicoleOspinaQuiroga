console.log("Hola mundo");
const button = document.getElementById("generate")
const sizeSelect = document.getElementById("size")
const palette = document.getElementById("palette")

button.addEventListener("click", function(){
    const size =sizeSelect.value;
    console.log(size);

    palette.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const color = randomColor();
        const box = document.createElement("div");
        box.classList.add("color-box");

        box.style.backgroundColor = color;
        box.textContent = color;

        palette.appendChild(box);
        
    }
    
});

function randomColor(){
    const color = "#"+ Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

console.log(randomColor());




