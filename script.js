const create = document.querySelector('#create');
const canvas = document.querySelector('.canvas');
const clearCanvas = document.querySelector('#clear');




create.addEventListener('click', function () {
    let boxes = parseInt(prompt('Number of Boxes'));
    canvas.innerHTML = " ";
    canvas.style.setProperty("--numBoxes", boxes);
    for (let i = 0; i < boxes; i++) {
        for (let j = 0; j < boxes; j++) {
            const div = document.createElement('div');
            div.classList.add('box');
            canvas.appendChild(div);
        }
    }
    // Add event listener for each box
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