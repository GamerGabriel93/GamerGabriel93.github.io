function calcAmount() {
    let price = 4;
    let deliveriPrice = 2;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-total");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;


    if (amountNumber > 10) {
        alert("You can pick maximum 10 burger!")
        return
    }
    else if (amountNumber < 1) {
        alert("You need to pick minimum 1 burger!")
        return
    }

    if (amountNumber < 5) {
        let amount = amountNumber * price + deliveriPrice;
        showAmount.innerHTML = amount;
    }
    else if (amountNumber > 4) {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }

}

function fillOut() {
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

function validation() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test((document.querySelector("input[name='userEmail']")).value))
    
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function finalValidation() {
    if (fillOut() == true) {
        if (validation() == true){
        calcAmount()
        }
    }
    else {
        alert("You must fill out all label which marked by * !");
    }
}
