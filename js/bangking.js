// Coding for Deposite & widthdraw 
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = parseFloat(inputField.value);
    inputField.value = '';
    return amountValue;
}

function updateTotal(totalInputId, newInputValue) {
    const totalElement = document.getElementById(totalInputId);
    const totalText = totalElement.innerText;
    previousDepositeConvertTotal = parseFloat(totalText);
    totalAmountDeposite = newInputValue + previousDepositeConvertTotal;
    totalElement.innerText = totalAmountDeposite;

}

function updateBalance(newInputDepositeValue, isAdd) {
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceConvert = parseFloat(previousBalance.innerText);

    if (isAdd == true) {
        const totalBalance = previousBalanceConvert + newInputDepositeValue;
        previousBalance.innerText = totalBalance;
    } else {
        const totalBalance = previousBalanceConvert - newInputDepositeValue;
        previousBalance.innerText = totalBalance;
    }

}


// Coding for Deposite Button

document.getElementById('deposite-button').addEventListener('click', function() {

    const newInputDepositeValue = getInput('input-deposite');

    updateTotal('deposite-total', newInputDepositeValue);

    updateBalance(newInputDepositeValue, true);

});


// Coding for Widthdraw Button

document.getElementById('widthdraw-button').addEventListener('click', function() {

    const convertWidthdrawValue = getInput('input-widthdraw');

    updateTotal('widthdraw-total', convertWidthdrawValue);

    updateBalance(convertWidthdrawValue, false);

});