function calcAmount() {
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    return amountNumber;
}

function burgerLimit() {
    let amountNumber = calcAmount();
    if (amountNumber > 10) {
        alert("You can pick maximum 10 burger!")
        return amountNumber;
    }
    else if (amountNumber < 1) {
        alert("You need to pick minimum 1 burger!")
        return amountNumber;
    }
}

function deliveryLimit() {
    let price = 4;
    let deliveriPrice = 2;
    let amountNumber = calcAmount();
    if (amountNumber <= 4 && amountNumber > 0) {
        let amount = amountNumber * price + deliveriPrice;
        return amount;
    } else if (amountNumber >= 5 ) {
        let amount = amountNumber * price;
        return amount;
    } else if (amountNumber == 0) {
        let amount = 0;
        return amount;
    }
}

function finalPrice() {
    let amount = deliveryLimit();
    let showAmount = document.querySelector("span.show-total");
    showAmount.innerHTML = amount;
}

function fillOutValidation() {
    if (((document.querySelector("input[name='userName']")).value) == "") {
        return false;
    }
    if (((document.querySelector("input[name='userEmail']")).value) == "") {
        return false;
    }
    else if (((document.querySelector("input[name='userAddress']")).value) == "") {
        return false;
    }
    else if (((document.querySelector("input[name='userTelephone']")).value) == "" ){
        return false;
    }    
    else {
        return true;
    }
}

function emailValidation() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test((document.
        querySelector("input[name='userEmail']")).value)) {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function finalValidation() {
    if (fillOutValidation() == true) {
        if (emailValidation() == true){
        burgerLimit();
        deliveryLimit();
        finalPrice();
        }
    }
    else {
        alert("You must fill out all label which marked by * !");
    }
}
