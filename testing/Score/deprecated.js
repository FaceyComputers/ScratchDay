var SHEET_ID = "1vfJ5M8Vdt0fto9ZrjA5drVNj9gncsvnnE47O6nf1A1E";

window.onload = function() {
	var jsErrorElements = document.getElementsByClassName("jsError");
	for (var i = 0; i < jsErrorElements.length; i++){
		jsErrorElements[i].style.display = "none";
	}
	document.getElementById("main").style.visibility = "visible";
	signIn();
}

function main(){
	getCellValues(SHEET_ID, "Schools!A2:B50", "ROWS", function(values){
		console.log(values);
		changeSchoolSelector(values);
	});
}

function changeSchoolSelector(tileNameList){
	var selectElement = document.getElementById("schools");
	for (var i = 0; i < tileNameList.length; i++){
		var optionElement = document.createElement("option")
		optionElement.value = tileNameList[i][0];
		var node = document.createTextNode(tileNameList[i][1]);
		optionElement.appendChild(node);
		selectElement.appendChild(optionElement);
	}
}

function grayOut(){
	var unchecked = document.querySelectorAll('input[name="points"]:not(:checked)+label');
	unchecked[0].style.background = "#FFCA7D";
	unchecked[1].style.background = "#FFCA7D";
	document.querySelector('input[name="points"]:checked+label').style.background = "#F9A937";
}

function clearErrors(){
	document.getElementById("schoolSelect").innerHTML = "";
	document.getElementById("pointSelect").innerHTML = "";
}

function sendData(){
	var xhttp = new XMLHttpRequest();
	var school = document.getElementById("schools");
	var points = document.querySelector('input[name="points"]:checked');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("demo").innerHTML = this.responseText;
		}
	};
	if (school.value !== "" && points !== null){
		var point = points.value;
		xhttp.open("POST", "score.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("getData=false&school=" + school.value + "&points=" + point);
		var unchecked = document.querySelectorAll('input[type="radio"]:not(:checked) + label');
		unchecked[0].style.background = "";
		unchecked[1].style.background = "";
		points.checked = false;
		school.value = "";
	} else {
		if (points === null){
			document.getElementById("pointSelect").innerHTML = " *Required";
		}
		if (school.value === ""){
			document.getElementById("schoolSelect").innerHTML = " *Required";

		}
	}
}
