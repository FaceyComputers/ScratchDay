//setInterval(changeTitle, 800);

//Scorebox
var mainLoopCount = 0;
var rowNum = 2;
var SHEET_ID;
var board = [];//holds state of scoreboard
var MAX_VELOCITY = 4;//maximum velocity of tile
var ACCELERATION = 0.10;//global acceleration
var TILE_WIDTH = 110;//the width (technically css height) of a tile
var TILE_SPACING = 10;//#of pixels between each tile
var BRAKING_ACCELERATION = 0.01;
var titleSpace = 150;
var schools = ["BFH", "WHF", "FRH", "SAL", "CLB", "ABC"," DEF", "GHI", "JKL"];


//Title
var totalScore = 0;
var totalBeginnerScore = 0;
var totalIntermediateScore = 0;
var totalAdvancedScore = 0;
var time = 0;
var index = 0;
var changeInterval = 300;
var text = ["EIPS Scratch Day"];


function fadeIn(id)
{
    document.getElementById(id).style = "opacity: 1;"; 
    document.getElementById(id).style.transition = "all 1s"; 
    document.getElementById(id).style.WebkitTransition = "all 1s";
    document.getElementById(id).style.MozTransition = "all 1s"; 
    document.getElementById(id).style.OTransition = "all 1s"; 
}

function fadeOut(id)
{
    document.getElementById(id).style = "opacity: 0;"; 
    document.getElementById(id).style.transition = "all 1s"; 
    document.getElementById(id).style.WebkitTransition = "all 1s";
    document.getElementById(id).style.MozTransition = "all 1s"; 
    document.getElementById(id).style.OTransition = "all 1s"; 
}

function addTotalScore()
{
    totalScore = 0;
    totalBeginnerScore = 0;
    totalIntermediateScore = 0;
    totalAdvancedScore = 0;
    		for(var i = 0; i < board.length; i++)
    		{
    		totalScore = totalScore + board[i].score;
        totalBeginnerScore = totalBeginnerScore + board[i].beginnerScore;
        totalIntermediateScore = totalIntermediateScore + board[i].intermediateScore;
        totalAdvancedScore = totalAdvancedScore + board[i].advancedScore;
    		}
}

function changeTitle()
{  
    text[1] = "Total Score: " + totalScore;
    text[2] = "Beginner: " + totalBeginnerScore + " Intermediate: " + totalIntermediateScore + " Advanced: " + totalAdvancedScore;
    if(time == changeInterval-235)
    {  
				addTotalScore();
        fadeIn("Main_title");
        document.getElementById("Main_title").innerHTML = text[index];
    }
    if(time >= changeInterval)
    {
        fadeOut("Main_title");
        time = 0;
        index++;
        addTotalScore();
        if(index >= text.length)
        {
            index = 0;
        }
    }
    time++;
}

window.onload = function() {
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
	xhttp.open("GET", "/testing/Score/sheetURL.txt", true);
	xhttp.send();
}
		
function School(schoolCode, schoolFullName, yPosition, rank){//creates a new school
			this.schoolCode = schoolCode;
			this.schoolFullName = schoolFullName;
			this.score = 0;
      this.beginnerScore = 0;
      this.intermediateScore = 0;
      this.advancedScore = 0;
			this.rank = rank;
			this.y = yPosition;
			this.velocity = 0;
			this.acceleration = 0;
			this.direction = 0;
            this.staticRank = rank;
			this.move = function(endPosition, endRank){//animation function
				this.rank = endRank;
				this.direction = Math.sign(endPosition - this.y);
				this.acceleration = this.direction * ACCELERATION;
				if (Math.abs((0-this.velocity*this.velocity)/(2*(endPosition - this.y)))> BRAKING_ACCELERATION && Math.sign(this.velocity) == this.direction){
					this.acceleration = -this.direction * BRAKING_ACCELERATION;
				}
				if (Math.abs(this.velocity) >= MAX_VELOCITY && Math.sign(this.velocity) == this.direction){
					this.velocity = MAX_VELOCITY*this.direction;
				}
				this.velocity += this.acceleration;
				this.y += this.velocity;
				if (Math.sign(endPosition - this.y) == -this.direction){
					this.y = endPosition;
					this.velocity = 0;
					this.acceleration = 0;
					this.direction = 0;
				}
				document.getElementById(this.schoolCode).style.top = this.y + "px";
			}
}
		
function sortTiles(tileA, tileB) //method defining how to sort schools
{
    return tileB.score - tileA.score;
}
		
function main() //main loop
{
    mainLoopCount++;
    if (mainLoopCount == 600){
				updateScores();
				mainLoopCount = 0;
    }
    board = board.sort(sortTiles);
    changeTitle();
    for (var i = 0; i < board.length; i++){
        board[i].move(i*(TILE_SPACING+TILE_WIDTH) + titleSpace, i);
        board[i].score = board[i].beginnerScore + board[i].intermediateScore + board[i].advancedScore; //Sets the total score equal to beginner+intermediate+advanced score
        document.getElementsByTagName("h2")[board[i].staticRank].innerHTML = board[i].schoolFullName;
        document.getElementsByTagName("h3")[board[i].staticRank].innerHTML = "Beginner: " + board[i].beginnerScore + " Intermediate: " + board[i].intermediateScore + " Advanced: " + board[i].advancedScore + " Total Score: " + board[i].score;
    }
    window.requestAnimationFrame(main);
}

function updateScores(){
			var range = "Form Responses 1!B" + rowNum + ":C";
			var schoolIndex = [];
			for(var i = 0; i < board.length; i++){
				schoolIndex.push(board[i].schoolCode);
			}
			getCellValues(SHEET_ID,range,"ROWS",function(values){
				if (values != undefined){
					for (var i = 0; i<values.length; i++){
						var school = schoolIndex.indexOf(values[i][0]);
						switch(values[i][1]){
							case "3":
								board[school].beginnerScore += 3;
								break;
							case "5":
								board[school].intermediateScore += 5;
								break;
							case "15":
								board[school].advancedScore += 15;
								break;
						}
					}
					rowNum += values.length;
				}
			});
		}
		
function createBoardTiles(tileNameList) //initialization function for board
{
    var body = document.getElementsByTagName("div")[1];
    for (var i = 0; i < tileNameList.length; i++)
    {
        var divElement = document.createElement("div")
        divElement.id = tileNameList[i][0];
        divElement.style.top = ((TILE_SPACING+TILE_WIDTH)*i)+"px";
        var pElement = document.createElement("h2");
        var nodes = document.createTextNode(tileNameList[i][0]);
        var pElement1 = document.createElement("h3");
        var nodes1 = document.createTextNode("Score: 0");
        pElement.appendChild(nodes);
        pElement1.appendChild(nodes1);
        divElement.appendChild(pElement);
        divElement.appendChild(pElement1);
        body.appendChild(divElement);
        board.push(new School(tileNameList[i][0],tileNameList[i][1], ((TILE_SPACING+TILE_WIDTH)*i) + titleSpace, i));
    }
}

function start()
{
		getCellValues(SHEET_ID, "Schools!A2:B50", "ROWS", function(values){
			console.log(values);
			createBoardTiles(values);
		});
    window.requestAnimationFrame(main);
}


