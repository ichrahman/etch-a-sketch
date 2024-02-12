const create = document.querySelector('#create');
const canvas = document.querySelector('.canvas');
const clearCanvas = document.querySelector('#clear');

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

    // Paint when mouse hover each boxes
    const boxElements = document.querySelectorAll('.box');
    boxElements.forEach(box => {
        box.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });
    });
})


clearCanvas.addEventListener('click', function () {
    const boxElements = document.querySelectorAll('.box');
    boxElements.forEach(box => {
        box.classList.remove('hovered')
    })
})