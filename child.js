 const colors =['green','purple','blue','yellow','orange']
 let index = 0;
 document.getElementById("bgcolor")
.addEventListener("click",function(){
   document.body.style.backgroundColor =colors[index]; 
   index=(index + 1)%colors.length;
});