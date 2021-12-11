window.addEventListener('load', () => {
    const name = localStorage.getItem('name');
    const welcome = "Üdvözlünk újra itt " + name + "!";

    document.getElementById("user").innerHTML = welcome;
})