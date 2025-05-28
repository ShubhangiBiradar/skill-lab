function vote(){
var name= document.getElementById("Name").value;
var age= document.getElementById("Age").value;
var res= document.getElementById("res");


if(age >= 18){
   res.innerHTML = "you are eligible" ; 
}else{
   res.innerHTML = "you are not eligible😁😝";
}
}