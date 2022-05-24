
const slider = document.getElementById('myRange');
const sliderOutput = document.getElementById('slider-value');
const screen = document.querySelector('.screen');
//const colorButton = document.querySelector('.color-selector-button');
const resetButton = document.querySelector('.reset-button');
const span = document.getElementById('color_front');
const colorPickerButton = document.getElementById('colour');

let currentColor = 'black';
let gridItem;
let gridArray;
let changedGrid = false;

// select color
span.addEventListener('click', () => {
    colorPickerButton.click();
});

colorPickerButton.addEventListener('change', (e) => {
    currentColor = e.target.value;
})

// get and update slider values
let sliderValue = slider.value;

// create and set initial grid values
const screenGrid = document.createElement('div');
updateScreen(sliderValue);

// clears the screen
resetButton.addEventListener('click', () =>{
    changedGrid = true;
    updateScreen(sliderValue);
})

screen.appendChild(screenGrid);

slider.oninput = function () {
    changedGrid = true;
    sliderValue = this.value;
    sliderOutput.textContent = `${sliderValue} X ${sliderValue}`;
    updateScreen(sliderValue);
}

function updateScreen (sliderValue) {
    if (changedGrid) {
        clearScreen();
    }

    screenGrid.setAttribute('style', `display: grid; grid-template-columns: repeat(${sliderValue}, 1fr); grid-template-rows: repeat(${sliderValue}, 1fr);height: 100%; width: 100%; border: 1px solid black;`);

    for (let i = 1; i <= sliderValue ** 2; i++) {
        gridItem = document.createElement('div');
        gridItem.classList.add(`item${i}`);
        screenGrid.appendChild(gridItem);
    }

    gridArray = screenGrid.querySelectorAll('div');

    gridArray.forEach(setItemAttributes);
    gridArray.forEach(paintItems);
}

function clearScreen () {
    while (screenGrid.firstChild) {
        screenGrid.removeChild(screenGrid.firstChild);
    }
}

function setItemAttributes (item) {
    item.setAttribute('style', 'border: 1px solid black');
    const itemClass = item.class;
}

function paintItems (currentItem) {
    currentItem.addEventListener('mouseover', function () {
        currentItem.setAttribute('style', `border: 1px solid black; background-color: ${currentColor}`);
    });
}