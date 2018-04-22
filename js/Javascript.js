setInterval(changeTitle, 800);

//Scorebox
var board = [];//holds state of scoreboard
var MAX_VELOCITY = 4;//maximum velocity of tile
var ACCELERATION = 0.02;//global acceleration
var TILE_WIDTH = 100;//the width (technically css height) of a tile
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
var text = ["EIPS Scratch Day", "Total Score: " + totalScore, "Beginner: " + totalBeginnerScore + " Intermediate: " + totalIntermediateScore + " Advanced: " + totalAdvancedScore];


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

function changeTitle()
{  
    if(time == 1)
    {  
        fadeIn("Main_title");
        document.getElementById("Main_title").innerHTML = text[index];
    }
    if(time >= 10)
    {
        fadeOut("Main_title");
        time = 0;
        index++;
        if(index >= text.length)
        {
            index = 0;
        }
    }
    time++;
}
		
function School(schoolName, yPosition, rank, beginnerRank, intermediateRank, advancedRank){//creates a new school
			this.name = schoolName;
			this.score = 0;
			this.rank = rank;
			this.y = yPosition;
			this.velocity = 0;
			this.acceleration = 0;
			this.direction = 0;
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
				document.getElementById(this.name).style.top = this.y + "px";
			}
}
		
function sortTiles(tileA, tileB) //method defining how to sort schools
{
    return tileB.score - tileA.score;
}
		
function main() //main loop
{
    board = board.sort(sortTiles);
    for (var i = 0; i < board.length; i++){
	   board[i].move(i*(TILE_SPACING+TILE_WIDTH) + titleSpace, i);
        var test = document.getElementsByTagName("p")[i].innerHTML = board[i].name + " Score: " + board[i].score;
    }
    window.requestAnimationFrame(main);
}
		
function createBoardTiles(tileNameList) //initialization function for board
{
    var body = document.getElementsByTagName("div")[1];
    for (var i = 0; i < tileNameList.length; i++)
    {
        var divElement = document.createElement("div")
        divElement.id = tileNameList[i];
        divElement.style.top = ((TILE_SPACING+TILE_WIDTH)*i)+"px";
        var pElement = document.createElement("p");
        var nodes = document.createTextNode(tileNameList[i] + " Scorge: 0");
        pElement.appendChild(nodes);
        divElement.appendChild(pElement);
        body.appendChild(divElement);
        board.push(new School(tileNameList[i], ((TILE_SPACING+TILE_WIDTH)*i) + titleSpace, i, 0, 0, 0));
    }
}

function start()
{
    createBoardTiles(schools);
    window.requestAnimationFrame(main);
}


