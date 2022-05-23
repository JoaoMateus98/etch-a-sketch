
const slider = document.getElementById('myRange');
const sliderOutput = document.getElementById('slider-value');
const screen = document.querySelector('.screen');
console.log(screen);

// get and update slider values
let sliderValue = slider.value;

slider.oninput = function () {
    sliderValue = this.value;
    sliderOutput.textContent = `${sliderValue} X ${sliderValue}`;
    updateScreen(sliderValue);
}

function updateScreen (sliderValue) {
    
}