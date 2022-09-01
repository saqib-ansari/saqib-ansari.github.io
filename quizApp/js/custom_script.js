var quiz = [];

console.log(typeof(quiz))
// refrences... of input fields... of "create-quiz.html" page..
var title = document.getElementById('title');
var subTitle = document.getElementById('sub-title');
var question  = document.getElementById('question');
var op1 = document.getElementById('option1');
var op2 = document.getElementById('option2');
var op3 = document.getElementById('option3');
var op4 = document.getElementById('option4');
var cA = document.getElementsByClassName('local-cb');
// var cop = document.getElementById('cop');
// function caArr(){
// 	var checkedArr = [];
// 	for(var i = 0; i < 4; i++){
// 		if(cA[i].checked){
// 			checkedArr.push(i);
// 		}
// 	}
// 	return checkedArr;
// }
function cAnswer(){
	var checkedVal;
	for(var i = 0; i < 4; i++){
		if(cA[i].checked){
			checkedVal = i;
			break;
		}
	}
	return checkedVal;
}

// get values from user input and store in object.. and push it in array quiz..
function addQuestion() {
	var obj = {
		title : title.value,
		subTitle : subTitle.value,
		question : question.value,
		op1 : op1.value,
		op2 : op2.value,
		op3 : op3.value,
		op4 : op4.value,
		ca  : cAnswer()
	};
	// add this to an array 'quiz'..
	quiz.push(obj);
}


// checks a particular key present in array or not..
function checkKey(k){
	if(localStorage.getItem(k)){
		// if present assign it to quiz to add new questions with existing questions..
		quiz = JSON.parse(localStorage.getItem(k));
		
	}else if (!localStorage.getItem(k)){
		quiz = [];
	}
}

// add an array to localStorage with key... 
function addToL(k){
	// converting array to string before storing to localStorage..
	value = stringify(quiz);
	localStorage.setItem(k, value);
}

// get particular object from localStorage... by key..
function getFromL(k){
	var get = JSON.parse(localStorage.getItem(k));
	console.log(get);
}

// make string of data to store in localStorage..
function stringify(k){
	return JSON.stringify(k);
}
// get back the data from localStorage in original form.. ex.'array'..
function parse(k){
	return JSON.parse(localStorage.getItem(k));
}

// get all keys from localStorage in array...
function keysInL(){
	var keys = [];
	// checks the keys present in localStorage..
	for(var a in localStorage) {
		// push all the keys in array 'b'..
		keys.push(a);
	}
	// remove default keys of localStorage from array 'b'..
	keys.length = keys.length - 6;
	return keys;
}








