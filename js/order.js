function calcAmount() {
    let price = 6;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-total");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    

    if (amountNumber > 10) {
        alert("You can only buy maximum 10 burger!")
        return}
    else if (amountNumber < 1) {
        alert("You need to buy minimum 1 burger!")
    }
    else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
    
}
