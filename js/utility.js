// hide function
function hideById(elementId){
    const hidde= document.getElementById(elementId)
    hidde.classList.add('hidden');
}
//show function
function showById(elementId){
    const show= document.getElementById(elementId)
    show.classList.remove('hidden')
}
function chngText(elementId){
    const total=document.getElementById(elementId)
    total.innerText='500';
}

// this function will convert all inputs
function getValues(inputting){
    const inputs = document.getElementById(inputting);
    const inputStr =inputs.value;
    const inputFlot= parseFloat(inputStr);
    return inputFlot;
    
    }
    
    // this function will set the values 
    function setValues(exporting,area){
        const supply = document.getElementById(exporting);
        supply.innerText=area;
    }
//---------------------------------------
    //disable all buttons
    function disableAllButtons() {
        let buttons = document.getElementsByClassName("dis-btn");
        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }

    // Function to change background color for clicked buttons
// function changeBackgroundColor() {
//     // Change background color for each clicked button
//     for (let i = 0; i < clickedButtons.length; i++) {
//         let button = document.getElementById(clickedButtons[i]);
//         button.style.backgroundColor = 'lightblue';
//         // Disable the button to prevent further clicks
//         button.disabled = true;
//     }
// }