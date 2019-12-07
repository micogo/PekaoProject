class TransferInputElement {
	constructor (selector, regexp) {
		this.selector = document.querySelector(`.${selector}`),
		this.regexp = regexp;
		this.shouldSend = false;
		this.value = '';
    }

	setInputListener() {
		this.selector.addEventListener ("keyup", ()=>{
            this.getValue();
			sendToValidator().customValidation(this);
		})
    }
    getValue () {
        this.value = this.selector.value;
    }
}

function prepareInput(selector, regExp) {

    if (selector !== "" && (regExp instanceof RegExp)) {
        return new TransferInputElement (selector, regExp);
    }
    else{
        new Error("Check selector or regExp")
    }

}

function prepareInput(selector, regExp) {

    if (selector !== "" && (regExp instanceof RegExp)) {
        return new TransferInputElement (selector, regExp);
    }
    else{
        new Error("Check selector or regExp")
    }

}