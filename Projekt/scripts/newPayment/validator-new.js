class Validator{

    customValidation (inputObj) {
        console.log(inputObj)
        if(inputObj.regexp.test(inputObj.selector.value)){
            
            inputObj.selector.classList.contains("border-red") && inputObj.selector.classList.remove("border-red"); 
            inputObj.selector.classList.add("border-green");
            console.log("Passed!")
            inputObj.shouldSend = true;
            return true
        }else {
            inputObj.selector.classList.contains("border-green") && inputObj.selector.classList.remove("border-green") 
            inputObj.selector.classList.add("border-red");
            console.log("Wrong!")
            inputObj.shouldSend = false;
            return false
        }
     }

}

function sendToValidator(){
    return new Validator();
}

