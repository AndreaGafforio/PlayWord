
let btn = document.querySelector("#btn");

let btnC = document.querySelector("#btn2");

function Vowel(){
	
let input = document.querySelector("#input").value;
let result = document.querySelector("#result");
let vowel = ["a","e", "i", "o", "u"];
let count = 0;
let wrong = document.querySelector(".Error");

let ipt = input.toLowerCase(); //transfor the string all in lower case

for (word of ipt){//loops through the values of an iterable object, in this case the input string
	
 for( v of vowel){//array
	 
	 if(word == v){ //compare the input with the array of vowel
		 
		 count++;
	 }	 
	 
 }	
	
}//end for loop


result.value = input + " " + "has" + " "  +count + " " + "vowel";

wrong.innerHTML="";

try {
	
if(input == "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}
	
return 0;
}

btn.addEventListener('click', Vowel);




function Consonant(){
	
let input = document.querySelector("#input").value;
let result = document.querySelector("#result");
let consonant = "bcdfghklmnpqrstvzwyx";
let count = 0;
	
let ipt = input.toLowerCase(); //transfor the string all in lower case	


for (let i=0; i < ipt.length; i++){
	
	if (consonant.indexOf(ipt[i]) > -1){ //-1 indicate the letter who are not consonant
		
		count++;
		
	}	


}


result.value= input + " " + "has"+ " " + count + " " + "consonant";

let wrong = document.querySelector(".Error");

wrong.innerHTML="";

try {
	
if(input == "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}
	
	
return 0;	
}

btnC.addEventListener('click', Consonant);