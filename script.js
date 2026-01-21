const container = document.querySelector(".container")
const clearBtn = document.querySelector(".clear")
const eraserBtn = document.querySelector(".eraser")
const colorSelector = document.querySelector(".color-selector")
const slider = document.querySelector(".slider")
const sliderLabel = document.querySelector(".resolutionLabel")
let resolution = slider.value;
let isMouseDown = false;
let isEraserActive = false;
let currentColor = "black";

sliderLabel.innerText = "Resolution: " + resolution
document.addEventListener("mousedown", (e)=>{
    isMouseDown = true;
})
document.addEventListener("mouseup", (e)=>{
    isMouseDown = false;
})

// toggles the eraser
eraserBtn.addEventListener("click", (e)=>{
    isEraserActive = !isEraserActive;
})

// gets slider value and applies it to resolution
slider.addEventListener("change", (e)=>{
    resolution = slider.value
    sliderLabel.innerText = "Resolution " + resolution;
    generateCells();
})

const generateCells = ()=>{
    container.innerHTML = '';
    for(let r = 0; r < resolution; r++) {
        const row = document.createElement("div")
        row.className = "row"
     
        for (let c = 0; c < resolution; c++) {
             const cell = document.createElement("div")
             cell.className = "cell"
             cell.addEventListener("mouseover", (e)=>{
                 if (isMouseDown) {
                     if (!isEraserActive) {
                         cell.style.backgroundColor = currentColor;
                     } else if (isEraserActive) {
                         cell.style.backgroundColor = "white";
                     }
                 }
             })
             // Handles initial click down event to color/erase "pixel"
             cell.addEventListener("mousedown", (e)=>{
                 if (!isEraserActive){
                     cell.style.backgroundColor = currentColor;
                 } else {
                     cell.style.backgroundColor = "white";
                 }
             })
             row.appendChild(cell);
        }
     
        container.appendChild(row)
     }
}
generateCells();

clearBtn.addEventListener("click", (e)=>{
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
})

