function generateString(length) {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
 let result = ' ';
 const charactersLength = characters.length;
 for ( let i = 0; i <length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
 }
 function myFunction(){
  document.getElementById("btn1").innerHTML=generateString(5);
 }
 
 document.getElementById("btn").onclick = function() {myFunction()};
 window.onload=function(){
generateString(5)
          } 
  document.getElementById("searchBtn").onclick = function() {
  var criteria = document.getElementById("search").value.toLowerCase();
          
   if (criteria ==1234)
              {
                alert("Matching");
              
              }
           
            else {
                alert("NOT Matching");
              }
  }