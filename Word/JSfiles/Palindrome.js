
let btn = document.querySelector("#btn");

function palindrome(){
	
let Uinput = document.querySelector("#input").value;
let result = document.querySelector("#result");


let removeSplchar = /[\W_]/g; //remove all special character (non alphanumeric)

let replace = Uinput.replace(removeSplchar, "");

	
let PArray = replace.split(""); //put in array the word letter by letter with lower case

let reverse = PArray.reverse().join(""); //reverse the array and return as string



//palindrom check
if(reverse === replace ){
	
	result.value = "It's palindrome";
	
	
}else{
	
result.value = "It's not palindrome";
	
}

let wrong = document.querySelector(".Error");

wrong.innerHTML="";

//Correct the User if they do not enter an input in the field
try {
	
if(Uinput === "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}

	
	
	
return 0;	
}

btn.addEventListener('click', palindrome);