function buyNow() {
    hideById('main');
    showById('popup')
}
function conButton() {
    hideById('popup');
    showById('main')
}
//---


let clickCount = 0;
let clickedButtons = [];
// Function to check if 4 buttons have been clicked
function checkButtonClick(event) {
    // If the button has already been clicked and background color changed, return
    if (event.target.classList.contains('bg-lime-400')) {
        return;
    }

    clickCount++;
    // Highlight the clicked button
    event.target.classList.add('bg-lime-400');
    // Add the ID of the clicked button to the array
    // Generate pId based on click count
    let pId = 'p' + clickCount;
    let totalPrice = 550 * clickCount;
    let changText = document.getElementById('tp');
    
    
    

    // Add the ID of the clicked button and pId to the array
    clickedButtons.push({ id: event.target.id, pId: pId });
    // clickedButtons.push(event.target.id);

    //-------------------------------------------------
    if (clickCount === 5) {
        // Call your function here
        console.log("4 buttons have been clicked!");
        // Reset the click count for further use
        clickCount = 0;
        // Disable all buttons
        disableAllButtons();
        // Trigger  program to change background color for clicked buttons
        changeBackgroundColor();

    }
    showById(pId);
    changText.innerText = totalPrice;
    // colText.innerText=
}

for (let charCode = 97; charCode <= 106; charCode++) {
    const letter = String.fromCharCode(charCode);
    for (let i = 1; i <= 4; i++) {
        const id = letter + i;
        const element = document.getElementById(id);
        element.addEventListener('click', checkButtonClick);
    }
}

//------
function checkNumber() {
    let grandPrice = document.getElementById('grand-price');
    let coupon = document.getElementById('coupon-input').value;
    let totalPrice = document.getElementById('tp');
    console.log(totalPrice);

    // if (coupon === "NEW15") {
    //     grandPrice.innerText = totalPrice - (totalPrice * 0.15); // Apply 15% discount
    // } else if (coupon === "Couple20") {
    //     grandPrice.innerText = totalPrice - (totalPrice * 0.20); // Apply 20% discount
    // } else {
    //     grandPrice.innerText = totalPrice; // No discount applied
    // }
}

//------


    

    function validateInput() {
        let inputField = document.getElementById("numb-field");
        let nextButton = document.getElementById("next-button");
        let totalPrice = document.getElementById("tp").innerText;
        let inputValue = inputField.value;
        let onlyNumbers = /^\d+$/; 
        console.log(totalPrice)
    
        if (onlyNumbers.test(inputValue) && inputValue.length === 11 && totalPrice.length !== 1) {
            nextButton.classList.remove('btn-disabled')
        } 
    }

//add-here
//total-price
//final-price