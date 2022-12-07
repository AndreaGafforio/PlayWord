let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

//button1
function modifybtn1(){
let word = document.querySelector("#demo").value;
let result = document.querySelector("#result");

let updateword = word.slice(1,8);//return specify word

result.value = updateword; //output new string

let wrong = document.querySelector(".Error");

wrong.innerHTML="";
//Correct the User if they do not enter an input in the field
try {
	
if(word === "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}


return 0;
}

btn1.addEventListener('click', modifybtn1);

//button2
function modifybtn2(){
let word = document.querySelector("#demo").value;
let result = document.querySelector("#result");

//put the word into an array letter per letter
let updateword = word.split('');

delete updateword[2];//eliminate the 3 element in the array

result.value = updateword.join(""); // output the array as new sentence


let wrong = document.querySelector(".Error");
wrong.innerHTML="";

//Correct the User if they do not enter an input in the field
try {
	
if(word === "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}



return 0;
}

btn2.addEventListener('click', modifybtn2);

//button3
function modifybtn3(){
let word = document.querySelector("#demo").value;
let result = document.querySelector("#result");

//put the word into an array letter per letter
let updateword = word.split('');

delete updateword[4];//eliminate the 5th element in the array

result.value = updateword.join(""); // output the array as new sentence



let wrong = document.querySelector(".Error");
wrong.innerHTML="";

//Correct the User if they do not enter an input in the field
try {
	
if(word === "") throw "Empty input";
	
}catch(err){
	
 wrong.innerHTML = "Error: " + err;
	
}


return 0;
}

btn3.addEventListener('click', modifybtn3);
