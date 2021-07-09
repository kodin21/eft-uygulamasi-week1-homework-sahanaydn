buttonGonder.addEventListener("click", Gonder);




var yanlisSifre = 0;


function Gonder() {
    if (miktar.value < 500) {
      alert("BAŞARILI");
    } else {
      var sifre = prompt("Lütfen telefonunuza gelen şifrei girin");
  
      if (sifre == 1234) {
        alert("BAŞARILI");
      }
      
      else if (yanlisSifre>1){
          alert("HESABINIZ BLOKE OLDU")
  
  
  
      }
      else {
        alert("ŞİFRE YANLIŞ");
        yanlisSifre++;
        
      }
  
     
    }
  }