const create = document.querySelector('#create');
const canvas = document.querySelector('.canvas');
const clearCanvas = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
// Toggle Eraser
let eraserToogler = false;

// Take input using slider
const slider = document.querySelector('#slider');
const output = document.querySelector('#sliderValue');


slider.addEventListener("input", function () {
    canvas.innerHTML = " ";
    let inputValue = parseInt(this.value);
    output.textContent = `${this.value} x ${this.value}`;
    canvas.style.setProperty("--numBoxes", inputValue);
    for (let i = 0; i < inputValue; i++) {
        for (let j = 0; j < inputValue; j++) {
            const div = document.createElement('div');
            div.classList.add('box');
            canvas.appendChild(div);
        }
    }
    // Toggle painting on click
    let isPainting = false;
    // Paint when mouse hover each boxes
    const boxElements = document.querySelectorAll('.box');
    boxElements.forEach(box => {

        // Add event listeners to each box
        box.addEventListener("click", function () {
            isPainting = !isPainting;
            this.classList.add('hovered')
        });

        box.addEventListener("mouseover", function () {
            if (isPainting) {
                this.classList.add('hovered');
            }

        });

    });
})


clearCanvas.addEventListener('click', function () {
    const boxElements = document.querySelectorAll('.box');
    boxElements.forEach(box => {
        box.classList.remove('hovered')
    })
})


eraser.addEventListener('click', function () {
    eraserToogler = !eraserToogler;
    if (eraserToogler) {
        eraser.style.backgroundColor = 'black';
        eraser.style.color = 'white';
    } else {
        eraser.style.backgroundColor = '';
        eraser.style.color = '';
    }
    const boxElements = document.querySelectorAll('.box');
    boxElements.forEach(box => {
        box.addEventListener('mouseover', function () {
            if (eraserToogler) {
                this.classList.remove('hovered');
            }
        })
    })
})