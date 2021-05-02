var a = document;
var table = [];


function getname() {
  var adat = a.getElementById("data").value;
  table.push(adat);
  document.getElementById("data").value = '';
  window.location.replace("https://gamergabriel93.github.io/teszt2.html");

  /*var today = new Date();
  var day = today.getFullYear() + "/" + String(today.getMonth()+1).padStart(2,'0') + "/" + String(today.getDate()).padStart(2,'0');
  var time = String(today.getHours()).padStart(2,'0') + ":" + String(today.getMinutes()).padStart(2,'0');
  var answear = "Üdvözöljük újra " + adat + "!";
  var answear2 = "<br>" + answear + "<br><br>Utoljára bejelentkezve: " + day + " " + time;
  value.innerHTML = answear2;*/
}