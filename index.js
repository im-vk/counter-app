const counterVal = document.querySelector('#counter');


const increment = () => {
    let val = parseInt(counterVal.innerText);
    val = val + 1;
    counterVal.innerText = val;
};

const decrement = () => {
    let val = parseInt(counterVal.innerText);
    val = val - 1;
    counterVal.innerText = val;
}