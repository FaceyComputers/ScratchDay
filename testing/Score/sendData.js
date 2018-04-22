var SHEET_ID;

window.onload = function() {
	var jsErrorElements = document.getElementsByClassName("jsError");
	for (var i = 0; i < jsErrorElements.length; i++){
		jsErrorElements[i].style.display = "none";
	}
	document.getElementById("main").style.visibility = "visible";
	getSheetURL();
	signIn();
}

function getSheetURL(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			SHEET_ID = this.responseText.match("spreadsheets/d/([a-zA-Z0-9-_]+)/edit")[1];
		}
	};
	xhttp.open("GET", "sheetURL.txt", true);
	xhttp.send();
}

function main(){
	getCellValues(SHEET_ID, "Schools!A2:B50", "ROWS", function(values){
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
	document.getElementById("demo").innerHTML = "";
}

function sendData(){
	var school = document.getElementById("schools");
	var points = document.querySelector('input[name="points"]:checked');
	var date = new Date();
	var time = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	if (school.value !== "" && points !== null){
		var point = points.value;
		appendCellValues(SHEET_ID, "Form Responses 1!A:C",'ROWS', [[time,school.value,point.toString()]], function(values){
			var result = values.updates.updatedData.values[0]
			document.getElementById("demo").innerHTML = result[1] + " just earned " + result[2] + " points!";
			console.log(result);
		});
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
