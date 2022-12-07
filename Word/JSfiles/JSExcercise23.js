
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

function LetterSwitch(){
	
let input = document.querySelector(".demo").value;
let result = document.querySelector("#result");	


let array = input.split(''); //put the input user in array


//let FirstElm = array[0];//take first element
//let LastElm = array[array.length -1]; //obtain the last element

let temp = array[0];//strore the first element in a temporary variable
array[0] = array[array.length -1];
array[array.length -1] = temp;

result.value = array.join("");

let wrong = document.querySelector(".Error");

wrong.innerHTML="";

try {
	
if(input === "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}



	
return 0;	
}

btn.addEventListener('click', LetterSwitch);




function NewString(){
	
let input = document.querySelector(".demo").value;
let result = document.querySelector("#result");	
	
let array = input.split('');

array.push(array[0]);
array.splice(0,0, array[0]);

result.value = array.join("");

let wrong = document.querySelector(".Error");
wrong.innerHTML="";

try {
	
if(input === "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}

	
return 0;	
}

btn2.addEventListener('click', NewString);
