document.addEventListener("DOMContentLoaded", async function ()
{
	/* const redirectBtn = document.querySelector(".newPaymentBtn");
	redirectBtn &&
		(redirectBtn.addEventListener("click", function ()
		{
			window.location = "./redirect.html"
		})); */
	externalClientsArray = [];
	const inputTable = [];
	const customValidator = validatorObject();

	let john_Doe;
	client("superSecretID", "John", "Doe", "12345678900987654321123456", 10000, "none").then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			this.john_Doe = response.payload;
			return john_Doe;
		} else
		{
			console.log(response.msg)
		}
	})
	let fuck = "hej";
	fetch(`http://localhost:3001/rest/v1/products/`).then((resp) => resp.json()).then(function(data) {
		console.log(data)
		})

/* 	let transferTitle;
	inputElement("transferTitle-input", /^([a-zA-Z0-9_-]){5,60}$/).then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			transferTitle = response.payload;
			transferTitle.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferTitle;
		} else
		{
			throw new Error(response.msg)
		}
	})
	let transferRecName;
	inputElement("transferRecName-input", /^[A-Z]([a-zA-Z]){2,60}$/).then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			transferRecName = response.payload;
			transferRecName.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferRecName;
		} else
		{
			throw new Error(response.msg)
		}
	});
	
	let transferRecAccountNr;
	inputElement("transferRecAccountNr-input", /^\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|\d{26}/).then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			transferRecAccountNr = response.payload;
			transferRecAccountNr.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferRecAccountNr;
		} else
		{
			throw new Error(response.msg)
		}
	});
	
	let transferRecPostalCode;
	inputElement("transferRecPostalCode-input", /^\d{2}[- ]{0,1}\d{3}$/, "12").then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			transferRecPostalCode = response.payload;
			transferRecPostalCode.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferRecPostalCode;
		} else
		{
			throw new Error(response.msg)
		}
	});
	
	let transferRecCity;
	inputElement("transferRecCity-input", /^[A-Z]([a-zA-Z]){2,60}$/).then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			transferRecCity = response.payload;
			transferRecCity.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferRecCity;
		} else
		{
			throw new Error(response.msg)
		}
	});
	
	let transferMsg;
	inputElement("transferMsg-input", /^([a-zA-Z0-9_-]){1,200}$/).then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			transferMsg = response.payload;
			transferMsg.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferMsg;
		} else
		{
			throw new Error(response.msg)
		}
	});
	
	let transferAmount;
	inputElement("transferAmount-input", /^[0-9]{0,}$/, "777").then(response =>
	{
		console.log(response);
		if (response.status === 200)
		{
			transferAmount = response.payload;
			transferAmount.setListenerAndPush(inputTable, customValidator.customValidation);
			return transferAmount;
		} else
		{
			throw new Error(response.msg)
		}
	});
	

	const transferForm = document.querySelector('.transfer-form', "");


	transferForm.addEventListener("submit", function (e)
	{
		e.preventDefault(); //strona sie nie przeladowuje po submicie
		customValidator.finalFromValidation(inputTable, john_Doe);
	}) */
})