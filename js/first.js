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
    /*Ha ezt is megnézed BALÁZS akkor írj messengeren hogy ASUS!!!!!*/
}

var namebase = ["Gábor", "Balázs"];
var pwbase = ["1234"];


function check() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (namebase.includes(username)) {
        if (pwbase.includes(password)) {
            alert('Sikeres bejelentkezés!');
            window.location.replace("https://gamergabriel93.github.io/parosszam.html");
        }

    }
    else {
        alert('Helytelen adat!');
    }
}

function registration(){
    let password = document.getElementById("password").value
    if (password.length < 8){
        alert('Not enough long or empty password input!');

    }
    else{
        innerHTML = 
        alert("Registration success!");
    }
}

function login(){
    window.location.replace("https://gamergabriel93.github.io/login.html")
}