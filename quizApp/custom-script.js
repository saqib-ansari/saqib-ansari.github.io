	// variables to store titles and subtitles and their indexes.... and type indexes...
	var titleSubtitle = {};	
	var keyIndexes = {};      // ==== to store key indexes separately...
	var titleIndexes = {};		// ===== to store indexes according to title...
	var typeIndexes = {};		// ===== to store indexes according to type...
	var keyLocal = "Quiz";


	var loggedUserid = localStorage.getItem("loggedUserid");
	console.log(loggedUserid)
	loggedIn();
	var data = JSON.parse(localStorage.getItem(keyLocal));









	// =================================================================================
	// ===================          functions of create quiz      ======================
	// =================================================================================

	// to show selected type questions....
	function selectedQuestionType(typeVal){
		$("#scq-div, #mcq-div, #ftb-div").hide();
		var type = typeVal;
		var id = "#" + type + "-div";
		$(id).show();
	}

	// change ref to take values from options of selected type...
	// this is done because of same #id....
	function changeOptionRef(typeVal){
		if(typeVal == "mcq"){
			option1 = $("#mcq-div #option1");
			option2 = $("#mcq-div #option2");
			option3 = $("#mcq-div #option3");
			option4 = $("#mcq-div #option4");
		}else if(typeVal == "scq"){
			option1 = $("#scq-div #option1");
			option2 = $("#scq-div #option2");
			option3 = $("#scq-div #option3");
			option4 = $("#scq-div #option4");
		}
	}
	
	// ==========    Validate Functions..

	// this checks for empty fields...  and syntax of input for some type of questions such as ftb...
	// returns '1' if all conditions are ok
	function mcqScqValidator(){
		var z = 1; // 1 means no problem..
		if(title.val() == "" || subTitle.val() == "" || question.val() == "" || option1.val() == "" ||
		 	option2.val() == "" || option3.val() == "" || option4.val() == ""){
			z = 0;
			alert("No Fields should Be Empty");
		}
		return z;
	}

	// -------- to validate that there is both braces {} available in the question --------
	// ------- this is done to prevent the loop to run infinite times....
	// ------- and to alert the user ------- to create the blank    --------------
	function ftbValidator(str){
		var z = 1;
		var opening = [];
		var closing = [];
		if(str.indexOf("{") == -1){
			z = 0;
			alert("you must have to provide a question with at least one blank '{}'")
		}else{
			for(var i = 0; i != 1;){
				var x = str.indexOf("{");
				var y = str.indexOf("}");
				if(x != -1 || y != -1){
					if(x != -1){
						opening.push(x);
						str = str.replace("{", "-");
					}
					if(y != -1){
						closing.push(y);
						str = str.replace("}", "-");
					}
					i = 0;
				}else {
					i = 1;
				}
			}	
		}
		
		if(opening.length != closing.length){
			z = 0;
			if(opening.length < closing.length){
				alert("you are somewhere missing '{' ")
			}else if(closing.length < opening.length) {
				alert("you are somewhere missing '}' ")
			}
		}
		return z;
	}


	// =======================================================================================
	// =====================          functions of quiz index       ==========================
	// =======================================================================================

	// ---- to show titles with their subtitles ---
	// --- get all titles from 'titleSubtitle' object in a var title keys ----
	// --- loop over title keys upto its length --- add html code --- attach title to title class ---
	// --- get subtitles array into a var subtitleKeys --- loop upto its length --- push list code ---
	// --- attach subtitle with it on each loop ---
	// --- counter is because of all subtitles have same class ---
	function displayKeys(){
		var titleKeys = keysInObject(titleSubtitle);
			var counter = 0;
		for(var i = 0; i < titleKeys.length; i++){
			sidebar.innerHTML += sidebarCode;
			title[i].textContent = titleKeys[i];

			var subtitleKeys = titleSubtitle[titleKeys[i]];
			for(var z = 0; z < subtitleKeys.length; z++){
				dropMenu[i].innerHTML += listCode.innerHTML;
				subtitle[counter].textContent = subtitleKeys[z];
				counter++
			}
		}
	}

	function getTitleSubtitle(dataArray){
		// this receives an array as parameter...
		// loop over data --- get title and subtitle ----
		// make a key of title --- create an array of subtitles -- and assign it as value of key --
		// and also get indexes of titles --- and title + subtitle..  --- and type indexes --
		for(var i = 0; i < dataArray.length; i++){
			var title = dataArray[i].title;
			var subTitle = dataArray[i].subTitle;
			var type = dataArray[i].questionType;
			if(titleSubtitle[title]){
				if(titleSubtitle[title].indexOf(subTitle) == -1){
					titleSubtitle[title].push(subTitle);
				};
			}else{
				titleSubtitle[title] = [];
				titleSubtitle[title].push(subTitle);
			};

			// make an array of key indexes...
			var key = title + "~" + subTitle;
			if(keyIndexes[key]){
				keyIndexes[key].push(i);
			}else{
				keyIndexes[key] = [];
				keyIndexes[key].push(i);
			}

			// make an array of title indexes...
			if(titleIndexes[title]){
				titleIndexes[title].push(i);
			}else{
				titleIndexes[title] = [];
				titleIndexes[title].push(i);
			}
			// make an array of type indexes...
			if(typeIndexes[type]){
				typeIndexes[type].push(i);
			}else{
				typeIndexes[type] = [];
				typeIndexes[type].push(i);
			}
		}
	}













	// =======================================================================================
	// ==============================        Helper functions     ============================
	// =======================================================================================


	// return keys present in object.....
	function keysInObject(obj){
		var keys = [];
		for(var a in obj) {
			keys.push(a);
		}
		return keys;
	}

	// =======================================================================================
	// ==============================        Login/Signup function    ========================
	// =======================================================================================

	// show hide login and signup on click..
	// to change between login and signup modal...
	$(".header").click(function(){
		$(".header").removeClass("active");
		$("#login").hide();
		$("#signup").hide();
		$("#" + $(this).attr("for")).show();
		$(this).addClass("active");
	})

	// an object to store user information
	var identity = {};
	$("#login-btn").click(function(){
		var identity = JSON.parse(localStorage.getItem("identity"));
		var email = $("#login-email").val();
		var pwd = $("#login-password").val();
		if(email == "" || pwd == ""){
			alert("No fields should be empty");
		}else{
			if(identity[email] != undefined){
				if(pwd == identity[email].password){
					alert("Successfully logged in");
					localStorage.setItem("loggedUserid", email);
					loggedIn();
					location.reload(true);
				}else{
					alert("incorrect password");
				}
			}else{
				alert("Incorrect Email Address.");
			}
		}
	});
	// get data from local and assign it to identity, if present...
	// create a object to store data..
	// get input values and store in variables..
	// if none of the input is empty..  check the email in localstorage...
	// if email entered by user is present alert the user else store it....
	$("#signup-btn").click(function(){
		if(localStorage.getItem("identity") != null){
			identity = JSON.parse(localStorage.getItem("identity"));
		}
		var obj = {};
		var fullname = $("#signup-name").val();
		var email = $("#signup-email").val();
		var pwd = $("#signup-password").val();
		console.log( email, pwd, fullname);
		if(fullname == "" || email == "" || pwd == ""){
			alert("No fields should be empty");
		}else{
			if(identity[email] == undefined){
				obj.name = fullname;
				obj.password = pwd;
				identity[email] = obj;
				var strObj = JSON.stringify(identity);
				localStorage.setItem("identity", strObj);
				localStorage.setItem("loggedUserid", email);
				loggedIn();
				location.reload(true);
				alert("you are registered");
			}else if(identity[email] != undefined){
				alert("you are already registered");
			}else{
				alert("something went wrong");
			}
		}
		
	});

	// function to run when user log in...
	function loggedIn() {
		if(loggedUserid != null){
			keyLocal = loggedUserid;
			identity = JSON.parse(localStorage.getItem("identity"));
			$("#logged-username").text(identity[loggedUserid].name);
			$("#for-login").hide();
			$("#loggedin").show();
		}
		$("#logout").click(function(){
			localStorage.removeItem("loggedUserid");
			location.reload(true)
		});

	}







	// quizArr.splice(from, upto)  ....... to delete array indexes..
