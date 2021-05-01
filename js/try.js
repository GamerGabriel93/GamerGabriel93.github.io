var a = document;
var table = [];

function first(){
  var adat = a.getElementById("data").value;
  var value = a.getElementById("valasz");
  var today = new Date();
  document.getElementById("data").value = '';
  var day = today.getFullYear() + "/" + String(today.getMonth()+1).padStart(2,'0') + "/" + String(today.getDate()).padStart(2,'0');
  var time = String(today.getHours()).padStart(2,'0') + ":" + String(today.getMinutes()).padStart(2,'0');
  var answear = "Üdvözöljük újra " + adat + "!";
  var answear2 = "<br>" + answear + "<br><br>Utoljára bejelentkezve: " + day + " " + time;
  value.innerHTML = answear2;
}
