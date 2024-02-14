// Initial counter value
let counter = 999999;

const DISPLAY = document.getElementById('display');

// Error messages for display
const ALERT_EL = document.getElementById('alert');
const ERROR_MSG_OUT_OF_MEMORY = 'Out of memory';
const ERROR_MSG_INVALID_RANGE = 'Zero is the low limit';

// Function to update the display based on the counter value
function updateDisplay() {
    const spanElements = DISPLAY.children;
    let numberToString = addPaddingAtStart(counter.toString(), 4, '0');
    for (let i = 0; i < numberToString.length; i++) {
        spanElements.item(i).innerText = numberToString[i];
    }
}

// Function to add a box to the display
function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}

// Function to handle incrementing the counter and updating the display
function increment() {
    const boxCount = DISPLAY.children.length;
    counter++;

    // Increment the counter and add a box if needed
    if (counter.toString().length === 5 && boxCount === 4) {
        addBox();
    } else if (counter.toString().length === 6 && boxCount === 5) {
        addBox();
    } else if (counter.toString().length > 6) {
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY;
        return;
    }
    // Clear any previous error messages and update the display
    ALERT_EL.innerText = '';
    updateDisplay();
}

// Function to remove the last box from the displa
function removeBox() {
    const boxCount = DISPLAY.children.length;

    // Remove the last box if there is at least one box
    if (boxCount > 0) {
        const lastBox = DISPLAY.lastElementChild;
        lastBox.parentNode.removeChild(lastBox);
    }
}


// Function to handle decrementing the counter and updating the display
function decrement() {
    const boxCount = DISPLAY.children.length; // Define boxCount here
    if (counter === 0) {
        ALERT_EL.innerText = ERROR_MSG_INVALID_RANGE;
        return
    };
    counter--;
    if (counter.toString().length === 5 && boxCount === 6) {
        addBox();
    } else if (counter.toString().length === 4 && boxCount === 5) {
        addBox();
    } else if (counter.toString().length > 6) {
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY;
        return;
    }
    ALERT_EL.innerText = '';
    updateDisplay();
}

// Function to reset button of the counter to zero and update the display
function reset() {
    counter = 0;
    updateDisplay();
}

// Function to add padding to the start of a string
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if (remainingSpace > 0) {
        let newString = originalString;
        for (let i = 0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}

updateDisplay();
