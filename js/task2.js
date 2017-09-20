/**
 * Created by Administrator on 2017/7/6.
 */


 function pan(){
  var num = document.getElementById("num");
  var evil=document.getElementById("shashou");
  var peo=document.getElementById("people");
  var t1=parseInt(num.value);
    var a = document.getElementsByTagName('li')[0];
   if(t1<4||t1>18){
     alert("你输入的玩家数量有毛病！");
   }
   else {
         if(t1>3&&t1<6){
            evil.innerHTML=1;
            peo.innerHTML=t1-1;
         }
         else if(t1>5&&t1<10){
           evil.innerHTML=2;
           peo.innerHTML=t1-2;
         }
         else if(t1>9&&t1<15){
             evil.innerHTML=3;
             peo.innerHTML=t1-3;
         }else {
             evil.innerHTML=4;
             peo.innerHTML=t1-4;
         }
   }
 }