function printout() {
    let szam = document.getElementById("data").value;
    if (szam % 2 == 0) {
        let answear = "A szám páros!";
        let data = document.getElementById("answear");
        data.innerHTML = answear;
    }    
    else {
        let answear = "A szám páratlan!";
        let data = document.getElementById("answear");
        data.innerHTML = answear;
    }
}
