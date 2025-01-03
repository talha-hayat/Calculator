
























var inputscreen = document.getElementById('num');

function getNumber(num) {
    inputscreen.value += num;
}
function clearall() {
    inputscreen.value = "";
}

function emptyfield(){
    
}

function getans() {
    try {
        
        inputscreen.value = eval(inputscreen.value);
        
    }
    catch (_a) {
        inputscreen.value = "Error";
    }
}
function calculatePercentage() {
    if (inputscreen.value !== '' && !isNaN(inputscreen.value)) {
        inputscreen.value = parseFloat(inputscreen.value) / 100;
    }
}
function getback() {
    
    inputscreen.value = inputscreen.value.substring(0, inputscreen.value.length - 1);
}
inputscreen.value = "";