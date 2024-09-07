const calciDisplay=document.getElementById("CalciDisplay");

let value=calciDisplay.value;

document.addEventListener("keydown",function (event){
    if(event.key=="Enter"){
        Evaluation();
    }
    if((event.key<'0'||event.key>'9') && event.key!=="Backspace" && event.key!=="Enter"&& event.key!=='/'&&event.key!=='*'&&event.key!=='-'&&event.key!=='+'&&event.key!=='%'){
        event.preventDefault();
        alert("Only Numbers,Operators are allowed!...")
    }

})

function AddElementToCalciDisplay(input){
    calciDisplay.value += input;
}

function DeleteLastElementInCalciDisplay(){
    calciDisplay.value = calciDisplay.value.toString().slice(0,-1);
}

function DeleteAllElementsInCalciDisplay(){
    calciDisplay.value = "";
}

function Evaluation(){
    try{
        calciDisplay.value=eval(calciDisplay.value);
    }
    catch(error){
        calciDisplay.value= "ERROR" ; 
    }
}