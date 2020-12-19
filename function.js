
var func=require('custom_calculator');
global.result=function (o1,operator,o2){
	if(operator=="+")
  document.getElementById("display").innerHTML = "Result= "+func.add(o1,o2);   
  else if(operator=="-")
  document.getElementById("display").innerHTML = "Result= "+func.sub(o1,o2); 
if(operator=="*")
  document.getElementById("display").innerHTML = "Result= "+func.mul(o1,o2);   
  else if(operator=="/")
  document.getElementById("display").innerHTML = "Result= "+func.div(o1,o2);
}

