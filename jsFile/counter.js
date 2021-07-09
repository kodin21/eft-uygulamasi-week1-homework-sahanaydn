var timeleft = 120;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("sayac").innerHTML =
      "<h3>Verilen süre doldu. 5 saniye içinde sayfa tekrar yenilenecek <h3/> ";
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  } else {
    document.getElementById("deneme").innerHTML = timeleft + " saniye kaldı";
  }
  timeleft -= 1;
}, 1000);
