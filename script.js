const calciDisplay=document.getElementById("CalciDisplay");



document.addEventListener("keydown",function (event){
    calciDisplay.style.color="black";
    calciDisplay.style.textAlign="right";
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
    calciDisplay.style.color="black";
    calciDisplay.style.textAlign="right";
}

function DeleteLastElementInCalciDisplay(){
    calciDisplay.style.color="black";
    calciDisplay.style.textAlign="right";
    calciDisplay.value = calciDisplay.value.toString().slice(0,-1);
}

function DeleteAllElementsInCalciDisplay(){
    calciDisplay.style.color="black";
    calciDisplay.style.textAlign="right";
    calciDisplay.value = "";
}

function Evaluation(){
    try{
        calciDisplay.value=eval(calciDisplay.value);
    }
    catch(error){
        calciDisplay.value= "ERROR"; 
        calciDisplay.style.color="red";
        calciDisplay.style.textAlign="center";
    }
}
