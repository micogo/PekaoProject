
document.addEventListener("DOMContentLoaded", function ()
{
    const newPaymentBtn = document.querySelector(".newPaymentBtn");
    const newPaymentWrapper = document.querySelector(".new-payment-wrapper-background");
    newPaymentBtn &&
        (newPaymentBtn.addEventListener("click", function ()
        {
            newPaymentWrapper.classList.contains('none') && newPaymentWrapper.classList.remove('none');
            return 0;
        }));

    let data = new FormData();
    data.append(name, "dupa")
    let testVariable = "name=dupa";
    fetch(`http://localhost:3001/rest/v1/products/postForm`, {
        method: 'POST',
        mode: 'cors',
        body: data
    }).then(response =>
    {
        console.log(response)
        if (response.status === 200)
        {
            response.json().then(dupa =>
            {
                console.log(dupa)
            })
        }
    });

    fetch(`http://localhost:3001/rest/v1/products/postSMSToken`, {
        method: 'POST',
        mode: 'cors',
        body: data
    }).then(response =>
    {
        console.log(response)
        if (response.status === 200)
        {
            response.json().then(dupa =>
            {
                console.log(dupa)
            })
        }
    });

    // zly regeex akceptuuej wiecej niz 26 cyfr
    // wszystkie te zmienne zwracaja undefined
    let otherAccount = prepareInput("otherAccount-input", /^\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|\d{26}/);
    console.log(otherAccount.setInputListener());

    let amountTransfer = prepareInput("amount-transfer-input", /^[0-9]+(\.[0-9]{1,2})?$/);
    console.log(amountTransfer.setInputListener());

    let addressRecipient = prepareInput("address-recipient-input", /^([a-zA-Z0-9_-]){0,200}$/);
    console.log(addressRecipient.setInputListener());

    let transferTitle = prepareInput("transfer-title-input", /^([a-zA-Z0-9_-]){1,200}$/);
    console.log(transferTitle.setInputListener());

    let transferName = prepareInput("transfer-name-input", /^([a-zA-Z0-9_-]){1,10}$/);
    console.log(transferName.setInputListener());


    /* transferForm.addEventListener("submit", function (e)
    {
        e.preventDefault(); //strona sie nie przeladowuje po submicie
        customValidator.finalFromValidation(inputTable, john_Doe);
    })   */
})
let checkboxSaveTransfer = document.querySelector(`.checkbox-save-transfer`).checked;
function changeState()
{
    checkboxSaveTransfer = !checkboxSaveTransfer;

    if (checkboxSaveTransfer === true)
    {
        document.querySelector(`.transfer-name-input`).disabled = false;
    }
    else
    {
        document.querySelector(`.transfer-name-input`).disabled = true;
    }

}

