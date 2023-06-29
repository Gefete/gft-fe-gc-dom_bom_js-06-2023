var operation="";

const getNumberPressed = (numPress) => {
    if(numPress=='c'){
        operation=""
    }else{
        operation += numPress
    }
    document.getElementById("pantalla").textContent = operation;
    console.log(operation);
}