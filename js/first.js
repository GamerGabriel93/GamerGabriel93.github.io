var a = document;

function printout() {
    let szam = a.getElementById("data").value;
    if (szam % 2 == 0) {
        let answear = "A(z) " + szam + " páros!";
        let data = a.getElementById("answear");
        data.innerHTML = answear;
    }
    else {
        let answear = "A(z) " + szam + " páratlan!";
        let data = a.getElementById("answear");
        data.innerHTML = answear;
    }
}

let namebase = ["Gábor", "Balázs"];
let pwbase = ["1234"];


function check() {
    let username = a.getElementById("username").value;
    let password = a.getElementById("password").value;
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
    let password = a.getElementById("password").value
    let username = a.getElementById("username").value
    if (password.length < 8){
        alert('Not enough long or empty password input!');}
    else{
        innerHTML = 
        alert("Registration success!");
    }
    namebase.push(username)
    pwbase.push(password)
    console.log(namebase, pwbase) 
}

function login(){
    window.location.replace("https://gamergabriel93.github.io/login.html")
}