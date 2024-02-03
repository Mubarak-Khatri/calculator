var displayInput = document.getElementById("displayinput");
function getVal(Val){
    displayInput.value += val;
}
function calculate(){
    displayInput.value = eval(displayInput.value);
}
function clearAll(){
    displayInput.value = "";
}