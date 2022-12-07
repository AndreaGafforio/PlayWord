
let btnrst = document.querySelector(".reset");

function Rst(){

let input = document.querySelector("#input");
let result = document.querySelector("#result");
let wrong = document.querySelector(".Error");
	
input.value = "";
result.value = "";
wrong.innerHTML = "";	
	
	
	
	
return 0;
}

btnrst.addEventListener('click', Rst);