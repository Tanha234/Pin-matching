function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinSrting=pin+"";
    if(pinSrting.length==4){
          return pin;
    }
    else{
        console.log('noohglasaa');
        return getPin();

    }
       
    

}

function generatePin(){
    
    const pin=getPin();
    document.getElementById("pin-generat").value=pin;
}
document.getElementById("key-press").addEventListener("click",function(event){
  const number=event.target.innerText;
  const calInput=document.getElementById("typed-numbers");
  if(isNaN(number)){
      if(number=="C")
      {
          calInput.value="";
      }
      console.log(number);
  }
  else{
 
  const previousCalc=calInput.value;
  const newNum=previousCalc+number;
 calInput.value=newNum;
  }

})
function clicked(){
    const pink=document.getElementById("pin-generat").value;
    const blue=document.getElementById("typed-numbers").value;
    const notificationSucess=document.getElementById("notify-success");
    const notificationFail=document.getElementById("notify-fail");
    if(pink==blue){
        

        notificationSucess.style.display="block";
        notificationFail.style.display="none";

    }
    else{
        
        notificationFail.style.display="block";
        notificationSucess.style.display="none";
    }
}