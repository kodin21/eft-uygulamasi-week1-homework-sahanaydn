import { accounts } from "../example-other-file";

var select = document.getElementById("GonderenHesap");
var select1 = document.getElementById("AliciHesap");
var buttonGonder = document.getElementById("buttonGonder");
var miktar = document.getElementById("miktar");
var uyarıBakiye = document.getElementById("yetersizBakiye");
var uyarıAlan = document.getElementById("bosAlan");

buttonGonder.hidden = true;
uyarıBakiye.hidden = true;
uyarıAlan.hidden = false;

for (var i = 0; i < Object.keys(accounts).length; i++) {
  var opt = accounts[i].iban;
  var el = document.createElement("option");
  var el1 = document.createElement("option");

  el.textContent = opt;
  el1.textContent = opt;

  el.setAttribute("value", accounts[i].balance);
  select.appendChild(el);
  select1.appendChild(el1);
}

select.addEventListener("click", fonksiyon);
select1.addEventListener("click", fonksiyon);
miktar.addEventListener("input", fonksiyon);

function fonksiyon() {
  if (select.value && select1.value && miktar.value) {
    uyarıAlan.hidden = true;

    if (Number(select.value) > Number(miktar.value)) {
      buttonGonder.hidden = false;
      uyarıBakiye.hidden = true;
    } else {
      buttonGonder.hidden = true;
      uyarıBakiye.hidden = false;
    }
  }
}
