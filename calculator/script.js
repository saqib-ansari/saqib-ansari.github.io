const keysRef = document.getElementsByClassName('key');
const inputRef = document.getElementById('input');
const resultRef = document.getElementById('result');
const inputBoxRef = document.getElementsByClassName('input-box')[0];

// setting default values.
inputRef.value = '';
const handleInputBehaviour = handleBehavior(inputRef);
inputRef.focus();  // focus on load..


// [ === Event Listeners ===]

// adding click event to all calculator keys..
([...keysRef].forEach((element) => {
	element.addEventListener('click', (e) => {
		if(e.target.attributes.action?.value === 'clear') {
			clearInputField();
		} else if(element.attributes.action?.value === 'delete') {
			deleteAtCursor();
		} else if(element.attributes.action?.value === 'equalTo') {
			shiftResultToInputField();
		} else {
			setInputValue(e);
		}
		setResultValue(inputRef.value);
		handleInputBehaviour();
		inputRef.scrollTop = inputRef.scrollHeight;
		resultRef.scrollLeft = resultRef.scrollWidth;
	})
}));

inputRef.addEventListener('input', () => {
	setResultValue(inputRef.value);
	handleInputBehaviour();
	
	resultRef.scrollLeft = resultRef.scrollWidth;
	inputRef.scrollTop = inputRef.scrollHeight;
});

// preventing user to insert 'space' and 'new line'
inputRef.addEventListener('beforeinput', function(e) {
	if(e.data === ' ' || e.inputType === 'insertLineBreak') {
		e.preventDefault();
	}
});

// to not loose the input focus on button click..
buttonSection.addEventListener('mousedown', (e) => {
	e.preventDefault();
	inputRef.focus();
})

// to focus input on input box click..
inputBoxRef.addEventListener('click', () => {
	inputRef.focus();
})

// [ === keys functions === ]

function setInputValue(e) {
    // inserting value at cursor position.
	const caretPosition = inputRef.selectionStart;
	const selectionEnd = inputRef.selectionEnd;
	const deleteCount = selectionEnd - caretPosition;

	let strArray = inputRef.value.split('');

	if((e.target.value === '(' || e.target.value === ')') && deleteCount > 0) {
		strArray.splice(caretPosition, 0, '(');
		strArray.splice(selectionEnd + 1, 0, ')');

		inputRef.value = strArray.join('');
		inputRef.selectionStart = selectionEnd + 2;
		inputRef.selectionEnd = selectionEnd + 2;
	} else {
		strArray.splice(caretPosition, deleteCount, e.target.value);
		inputRef.value = strArray.join('');
		inputRef.selectionStart = caretPosition + 1;
		inputRef.selectionEnd = caretPosition + 1;
	}
}

function clearInputField() {
	inputRef.value = '';
}

function deleteAtCursor() {
	const caretPosition = inputRef.selectionStart;
	const selectionEnd = inputRef.selectionEnd;
	let strArray = inputRef.value.split('');

	if(caretPosition !== selectionEnd) {
		const deleteCount = selectionEnd - caretPosition;

		strArray.splice(caretPosition, deleteCount);
		inputRef.value = strArray.join('');

		inputRef.selectionStart = caretPosition;
		inputRef.selectionEnd = caretPosition;
	} else if(caretPosition != 0) {
		strArray.splice(caretPosition - 1, 1);
		inputRef.value = strArray.join('');
	
		inputRef.selectionStart = caretPosition - 1;
		inputRef.selectionEnd = caretPosition - 1;
	}
}

function shiftResultToInputField() {
	inputRef.value = resultRef.innerText;
}

// [=== Result Functions ===]

function setResultValue(value) {
	let errorObj = validateExpression(value);
	resultRef.innerText = errorObj ? errorObj.text : calculateResult(value);
	styleResult(errorObj);
}

function calculateResult(exp) {
	// because of treating '0x' as 'prefix' in string ( Number('0x2') returns 2 instead of NaN ).
	exp = exp.replaceAll('x', '*');

	let result = 0;
	result = isNaN(Number(exp)) ? calculate(exp, ['/', '*', '-', '+']) : exp;

	return result;
}

function styleResult(isError) {
	if(isError) {
		resultRef.style.color = 'red';
		resultRef.style.textAlign = 'left';
	} else {
		resultRef.style.color = 'black';
		resultRef.style.textAlign = 'right';
	}
}
// [ === Input === ]

// handles the input height according to the content.
function handleBehavior(element) {
	let prevTextLength;
	let baseHeight;
	let diff; // clientHeight - padding   ///////  clientHeight = height + padding..

	return () => {
		const el = element;
		if(baseHeight === undefined) {
				baseHeight = el.clientHeight;
		}
		if(diff === undefined && el.scrollHeight > baseHeight) {
				diff = baseHeight - (el.scrollHeight - el.clientHeight);
		}
		if(el.textLength < prevTextLength) {
				el.style.height = `${baseHeight}px`;
		}
		if(diff !== undefined) {
				const height = el.scrollHeight;
				el.style.height = height +'px'; // <= max ? `${height}px` : `${max}px`;
		}
		prevTextLength = el.textLength;
	}
}





// [=== Calculation ===]

function calculate(strExp, operators) {
	// for expressions inside brackets
	let startingIndex = strExp.indexOf('(');
	while (startingIndex >= 0) {
		if(startingIndex >= 0) {
			let lastIndex = findPairIndex(strExp, startingIndex);
			let newStr = strExp.slice(0, startingIndex) + 
				calculate(strExp.slice(startingIndex + 1, lastIndex), [...operators]) + 
				strExp.slice(lastIndex + 1);
			// update strExp
			strExp = newStr;
		}
		startingIndex = strExp.indexOf('(');
	}

	// calculate expression
	let currentResult;
	let [splitedArr, operator] = splitByOperator(strExp, operators);

	for(let i=0; i<splitedArr.length; i++) {
		if( !isNaN(splitedArr[i]) ) {
			if(operator === '-') {
				currentResult === undefined ?
					currentResult = Number(splitedArr[i]) :
					currentResult -= Number(splitedArr[i]);
			} else if(operator === '/') {
				currentResult === undefined ?
					currentResult = Number(splitedArr[i]) :
					currentResult = currentResult / Number(splitedArr[i]);
			} else if(operator === '+') {
				currentResult === undefined ?
					currentResult = Number(splitedArr[i]) :
					currentResult += Number(splitedArr[i]);
			} else if( operator === '*' ) {
				currentResult === undefined ?
					currentResult = Number(splitedArr[i]) :
					currentResult = currentResult * Number(splitedArr[i]);
			}
		// recurse
		} else if ( isNaN(splitedArr[i]) ) {
			if( operator === '-' ) {
				currentResult === undefined ?
					currentResult = calculate(splitedArr[i], [...operators]) :
					currentResult -= calculate(splitedArr[i], [...operators]);
			} else if( operator === '+' ) {
				currentResult === undefined ?
					currentResult = calculate(splitedArr[i], [...operators]) :
					currentResult += calculate(splitedArr[i], [...operators]);
			} else if( operator === '*' ) {
				currentResult === undefined ?
					currentResult = calculate(splitedArr[i], [...operators]) :
					currentResult *= calculate(splitedArr[i], [...operators]);
			} else if(operator === '/') {
				// Do Nothing as there are no more operators
				// means nothing to split
			}
		}
	}
	return currentResult;
}

// find splitedArr, operator
// runs when strValue is not a valid number.(expected operator between)
function splitByOperator(str, operatorsArr) {
	let splitedArr;
	let operator;
	while(operatorsArr.length) {
		operator = operatorsArr.pop();
		if(operator === '-') {
			// to not splitting negative values like '2/-2'.
			splitedArr = conditionalSplit(str, operator);
		} else {
			splitedArr = str.split(operator);
		}
		if(splitedArr.length >= 1) {
			return [splitedArr, operator];
		} else {
			return [[], '']; // default
		}
	}
}

// finding pair of opening bracket (also in nested case)
function findPairIndex(exp, startingIndex = 0) {
	let openingBrackets = 0;
	let closingBrackets = 0;

	for(let i = startingIndex; i < exp.length; i++) {
		if (exp[i] === '(') {
			openingBrackets += 1;
		} else if (exp[i] === ')') {
			closingBrackets += 1;
		}

		if(openingBrackets === closingBrackets) {
			return i;
		}
	} 
}

// [=== Validation ===]

function validateExpression(exp) {
	let bracketsValidated = false;

	for(let i=0; i<exp.length; i++) {
		let cc = exp.charCodeAt(i);
		let prev_cc = exp.charCodeAt(i-1);

		if((cc >= 48 && cc <= 57) || cc === 46) { // 0-9
			if(prev_cc === 41) {
				return {text: `operator missing: '${exp[i-1]}${exp[i]}' at ${i+1}`};
			}
			continue; // Do nothing
		} else if (cc === 43 || cc === 45) { // +, -
			if(prev_cc === 43 || prev_cc === 45 || prev_cc === 42 || prev_cc === 120 || prev_cc === 47) {
				return {text: `invalid syntax: '${exp[i-1]}${exp[i]}' at ${i+1}`};
			}
		} else if (cc === 42 || cc === 120 || cc === 47) { // *, x, /
			if(isNaN(prev_cc) || prev_cc === 43 || prev_cc === 45 || prev_cc === 42 || prev_cc === 120 || prev_cc === 47 || prev_cc === 40) {
				return {text: `invalid syntax: '${exp[i-1]}${exp[i]}' at ${i+1}`};
			}
		} else if ((cc === 40 || cc === 41) && !bracketsValidated) {
			bracketsValidated = true;
			let errorMessage = validateBrackets(exp);
			if (errorMessage) {
				return {text: errorMessage};
			}
		} else if (!(cc === 43 || cc === 45 || cc === 47 || cc === 42 || cc === 120 || cc === 40 || cc === 41 || cc === 46)) {
			return {text: `Invalid Value: '${exp[i]}'`};
		}
	}
}

function validateBrackets(exp) {
	let openingBrackets = 0;
	let	closingBrackets = 0;
	let errorMessage;

	for(let i=0; i<exp.length; i++) {
		let cc = exp.charCodeAt(i);
		let prev_cc = exp.charCodeAt(i-1);
		if(cc === 40) { // '('
			openingBrackets += 1;

			if(i > 0 && !(prev_cc === 43 || prev_cc === 45 || prev_cc === 47 || prev_cc === 42 || prev_cc === 120 || prev_cc === 40) ) {
				errorMessage =  `operator required: '${exp[i-1]}${exp[i]}' at ${i+1}`;
				break;
			}
		} else if(cc === 41) { // ')'
			closingBrackets += 1;

			if (prev_cc === 43 || prev_cc === 45 || prev_cc === 42 || prev_cc === 120 || prev_cc === 47) {
				errorMessage = `number expected at ${i+1}`;
			} else if(closingBrackets === openingBrackets) {
				openingBrackets = 0;
				closingBrackets = 0;
			} else if(closingBrackets > openingBrackets) {
				errorMessage = `missing bracket: '(' at ${i+1}`;
				break;
			}
		}
		
		if(i >= exp.length - 1 && openingBrackets > closingBrackets) {
			const missingClosingBracketsCount = openingBrackets - closingBrackets;
			errorMessage = `${missingClosingBracketsCount} missing bracket(s): ')'`;
			break;
		}
	}
	return errorMessage;
}

// if there is a '-' sign with '/' or '*' sign.
// do  not split beacause that is a negative value sign and not for subtract. 
function conditionalSplit(exp, operator) {
	const splittedArr = [];

	let fromIndex = 0;
	for(let i=0; i<exp.length; i++) {
		if(exp[i] === '-' && !(exp[i-1] === '/' || exp[i-1] === '*')) {
			console.log(exp[i], exp[i-1] !== '/')
			splittedArr.push(exp.slice(fromIndex, i));
			fromIndex = i+1;
		} else if( i === exp.length - 1) {
			splittedArr.push(exp.slice(fromIndex, i+1));
		}
	}

	return splittedArr;
}