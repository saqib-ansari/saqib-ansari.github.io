	// ======================================================================================
	// =========================            Add to localStorage      ========================
	// ======================================================================================

	// 
	function addQuestion(){
		var status;
		if(questionType == "mcq" || questionType == "scq"){
			status = mcqScqValidator();
		}else if(questionType == "ftb"){
			status = ftbValidator(question.val());
		}

		if(status == 1){
			addToArr();
			addToLocal();
		}

	}

	// ========   create object of question and its data -- of mcq and scq..
	function mcqScqObj (){
		var obj = {};
		obj.questionType = questionType;
		obj.title = title.val();
		obj.subTitle = subTitle.val();
		obj.question = question.val();
		obj.option1 = option1.val();
		obj.option2 = option2.val();
		obj.option3 = option3.val();
		obj.option4 = option4.val();
		obj.cA = cAMcqScq();
		return obj;
	}

	// ===========      create object of question and its data --- of type ftb..
	// this function needs a string value as its parameter...
	// it stores answer in between of braces into an array.. and removes that from string value..
	// it returns an object containing question and its answers..
	function ftbObj (str){
		var ansArr = [];
		var obj = {};
		for(var i = 0; i != -1;){
			var x = str.indexOf("{");
			var y = str.indexOf("}");
			var ans = str.slice(x+1, y);
			ansArr.push(ans);

			var repText = str.slice(x, y+1);
			var str = str.replace(repText, "-");
			i = str.indexOf("{");	
		}
		obj.title = title.val();
		obj.subTitle = subTitle.val()
		obj.question = str;
		obj.cA = ansArr;
		return obj;
	}
	
	// ======   get correct answers of mcq and scq type.
	function cAMcqScq(){
		if(questionType == "mcq"){
			var cA = [];
			// store a ref of checkboxes in a variable
			var x = $("#mcq-div input[type='checkbox']");
			for(var i = 0; i < x.length; i++){
				if(x[i].checked){
					cA.push(i);
				}
			}
			return cA;
		}else if (questionType == "scq"){
			var x = $("#scq-div input[name='radio-options']:checked").val();
			console.log(x);
			return x;
		}
	}
	
	// ======   add object of questions into an array
	function addToArr(){
		// if key is present --- assign its value to quizArr --- add new values --- store it again..
		// else add values to quizArr  --- and store it.
		if(!localStorage.getItem(keyLocal)){
			quizArr = [];
		}else {
			quizArr = JSON.parse(localStorage.getItem(keyLocal));
		}
		// add object into an array according to its type..
		if(questionType == "mcq" || questionType == "scq"){
			var obj = mcqScqObj();
			quizArr.push(obj);
		}else if(questionType == "ftb"){
			var value = question.val();
			var obj = ftbObj(value);
			quizArr.push(obj);
		}
	}

	// =======  add data to localStorage..
	function addToLocal(){
		var quizStr = stringify(quizArr);
		localStorage.setItem(keyLocal, quizStr);
		alert("Question added successfully.")
	}



	// else if (type == "ftb"){
	// 			var ques = question.val();

	// 		}



	// ====================================================================================
	// =========================     Helper functions       ===============================
	// ====================================================================================

	function stringify(x){
		return JSON.stringify(x);
	}