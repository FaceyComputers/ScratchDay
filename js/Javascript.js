setInterval(changeTitle, 800);

var time = 0;
var index = 0;
var totalScore = 0;
var debug = true;
var totalBeginnerScore = 0;
var totalIntermediateScore = 0;
var totalAdvancedScore = 0;
var y_axis = 147;

var listDictionary = ["d0", "d1", "d2", "d3", "d4"];

var nameDictionary = ["", "", "", "", ""];

var totalDictionary = [0, 0, 0, 0, 0];

var schoolNames = ["CLB", "FSE", "FRH", "FSC", "LLR", "MUN", "PNE", "RHJ", "SCE", "SCS", "WBO", "WFG", "SPO", "AEL", "CBN", "EPE"];
var schoolFullNames = {};
var schoolBeginner = {};
var schoolIntermediate = {};
var schoolAdvanced = {};
var schoolTotal = {};
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


$(setInterval(function () {
        $.getJSON("../testing/Score/data.json", function(result){
            $.each(result.schools, function(school, schools){
                schoolFullNames[schools.name] = schools.fullName;
                schoolBeginner[schools.name] = schools.Beginner;
                schoolIntermediate[schools.name] = schools.Intermediate;
                schoolAdvanced[schools.name] = schools.Advanced;
                schoolTotal[schools.name] = schools.Total;
                //refreshScores();
            });
    });
}, 100));
