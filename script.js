let counterElement = document.getElementById('counterValue');

function onIncrement() {
    let previousCounterVal = counterElement.textContent;
    // console.log(typeof(previousCounterVal));
    let updatedCounterVal = parseInt(previousCounterVal) + 1;
    console.log((updatedCounterVal));
    counterElement.textContent = updatedCounterVal;
    if (updatedCounterVal > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterVal < 0) {
        counterElement.style.color = "red";

    } else {
        counterElement.style.color = "black";

    }
}

function onDecrement() {
    let previousCounterVal = counterElement.textContent;
    // console.log(typeof(previousCounterVal));
    let updatedCounterVal = parseInt(previousCounterVal) - 1;
    console.log((updatedCounterVal));
    counterElement.textContent = updatedCounterVal;
    if (updatedCounterVal > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterVal < 0) {
        counterElement.style.color = "red";

    } else {
        counterElement.style.color = "black";

    }
}

function onReset() {
    let updatedCounterVal = 0;
    counterElement.textContent = updatedCounterVal;
    if (updatedCounterVal > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterVal < 0) {
        counterElement.style.color = "red";

    } else {
        counterElement.style.color = "black";

    }
}