var operation="";
var numbers =[];
var operators=[];
let text="";

const getNumberPressed = (numPress) => {
    if(numPress=='c'){
        operation=""
        numbers =[];
        operators=[];
    }else{
        operation += numPress
        text += numPress
    }
    setInfoScreen(operation);
    /* console.log(operation); */
}

const result =()=>{
    // añade el ultime numero y por argumento no se le envia nada 
    // ya que al dar igual no introducimos simbolo de calculo
    operatorFun("");

    let position;

    // Buscar operadores * primero
    do {
        position = operators.indexOf('*');
        if (position >= 0) {
            numbers[position] = (+numbers[position]) *  (+numbers[position+1]); 
            numbers.splice(position+1, 1);
            operators.splice(position, 1);
        }
    } while (position >= 0);

    // resolver el resto de operaciones (+, -)
    while (numbers.length>1) {
        if(operators[0] === "+")
            numbers [0] = (+numbers[0])+ (+numbers[1]); 
            else if(operators[0] === "-")
            numbers [0] = (+numbers[0])- (+numbers[1]); 
        numbers.splice(1, 1);
        operators.splice(0, 1);
    }
    /* console.log(numbers[0]); */
    setInfoScreen(numbers[0])
    text="";
    // Limpieza de arrays
    numbers=[];
    operators = [];
}

const operatorFun = (simbols)=>{
    numbers.push(+operation);
    text +=simbols;
    operation ="";
    if (simbols != "") {
        operators.push(simbols);
    }
    setInfoScreen(text);
}

const setInfoScreen= (info) =>{
    document.getElementById("pantalla").textContent = `${info}`;
};