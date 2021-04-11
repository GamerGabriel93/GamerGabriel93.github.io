function printout() {
    let szam = document.getElementById("data").value;
    if (szam % 2 == 0) {
        let answear = "A(z) " + szam + " páros!";
        let data = document.getElementById("answear");
        data.innerHTML = answear;
    }    
    else {
        let answear = "A(z) " + szam + " páratlan!";
        let data = document.getElementById("answear");
        data.innerHTML = answear;
    }
}
