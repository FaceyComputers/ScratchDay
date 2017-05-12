setInterval(changeTitle, 800);
setInterval(refreshScores, 100);

var time = 0;
var totalScore = 0;
var debug = false;
var totalBeginnerScore = 0;
var totalIntermediateScore = 0;
var totalAdvancedScore = 0;
var currentFirst = 0;
var currentFirstName = "";
var currentSecond = 0;
var currentSecondName = "";
var currentThird = 0;
var currentThirdName = "";
var currentForth = 0;
var currentForthName = "";
var currentFifth = 0;
var currentFifthName = "";

var schoolNames = ["CLB", "FSE", "FRH", "FSC", "LLR", "MUN", "PNE", "RHJ", "SCE", "SCS", "WBO", "WFG", "SPO", "AEL", "CBN", "EPE"];
var schoolFullNames = {};
var schoolBeginner = {};
var schoolIntermediate = {};
var schoolAdvanced = {};
var schoolTotal = {};

function changeTitle()
{
    if(time < 10)
    {
    document.getElementById("Main_title").style = "opacity: 1;"; 
    document.getElementById("Main_title").style.transition = "all 1s"; 
    document.getElementById("Main_title").style.WebkitTransition = "all 1s";
    document.getElementById("Main_title").style.MozTransition = "all 1s"; 
    document.getElementById("Main_title").style.OTransition = "all 1s"; 
    document.getElementById("Main_title").innerHTML = "EIPS Scratch Day";
    }
    if(time > 9)
    {
    document.getElementById("Main_title").style = "opacity: 0;"; 
    document.getElementById("Main_title").style.transition = "all 1s"; 
    document.getElementById("Main_title").style.WebkitTransition = "all 1s";
    document.getElementById("Main_title").style.MozTransition = "all 1s"; 
    document.getElementById("Main_title").style.OTransition = "all 1s"; 
    }
    if(time > 10)
    {
    document.getElementById("Main_title").style = "opacity: 1;"; 
    document.getElementById("Main_title").style.transition = "all 1s"; 
    document.getElementById("Main_title").style.WebkitTransition = "all 1s";
    document.getElementById("Main_title").style.MozTransition = "all 1s"; 
    document.getElementById("Main_title").style.OTransition = "all 1s"; 
    document.getElementById("Main_title").innerHTML = "Total Score: " + totalScore;  
    }
    if(time > 17)
    {
    document.getElementById("Main_title").style = "opacity: 0;"; 
    document.getElementById("Main_title").style.transition = "all 1s"; 
    document.getElementById("Main_title").style.WebkitTransition = "all 1s";
    document.getElementById("Main_title").style.MozTransition = "all 1s"; 
    document.getElementById("Main_title").style.OTransition = "all 1s";  
    }
    if(time > 18)
    {
    document.getElementById("Main_title").style = "opacity: 1;"; 
    document.getElementById("Main_title").style.transition = "all 1s"; 
    document.getElementById("Main_title").style.WebkitTransition = "all 1s";
    document.getElementById("Main_title").style.MozTransition = "all 1s"; 
    document.getElementById("Main_title").style.OTransition = "all 1s"; 
    document.getElementById("Main_title").innerHTML = "Beginner: " + totalBeginnerScore + " Intermediate: " + totalIntermediateScore + " Advanced: " + totalAdvancedScore;  
    }
    if(time > 24)
    {
    document.getElementById("Main_title").style = "opacity: 0;"; 
    document.getElementById("Main_title").style.transition = "all 1s"; 
    document.getElementById("Main_title").style.WebkitTransition = "all 1s";
    document.getElementById("Main_title").style.MozTransition = "all 1s"; 
    document.getElementById("Main_title").style.OTransition = "all 1s";  
    }
    if(time >= 25)
    {
        time = 0;
    }
    time++;
}

function refreshScores()
{
    var total = 0;
    var beginnerTotal = 0;
    var intermediateTotal = 0;
    var advancedTotal = 0;
    
    for(var a = 0; a < schoolNames.length; a++)
    {
        var currentTotal = schoolTotal[schoolNames[a]];
        var schoolName = schoolNames[a];
        var clear = false;
        total = total + currentTotal;
        beginnerTotal = beginnerTotal + schoolBeginner[schoolNames[a]];
        intermediateTotal = intermediateTotal + schoolIntermediate[schoolNames[a]];
        advancedTotal = advancedTotal + schoolAdvanced[schoolNames[a]];
        //console.log(schoolTotal[schoolNames[a]]);
        
        //console.log(schoolName + " " + currentFirstName);
        if(currentTotal > currentFirst && schoolName == currentSecondName && debug == true)
        {
            //console.log(currentTotal + " " + currentFirst);
            document.getElementById("first").style = "top: 150px;";
            document.getElementById("second").style = "top: -150px;";
            document.getElementById("secondScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("secondTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentSecond = currentFirst;
            currentSecondName = currentFirstName;
            currentFirst = currentTotal;
            currentFirstName = schoolNames[a];
            clear = true;
        }
        
        if(currentTotal > currentFirst && clear == false)
        {
            document.getElementById("firstTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("firstScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("firstTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentFirst = currentTotal;
            currentFirstName = schoolNames[a];
        }
        
        if(currentTotal > currentSecond && schoolName == currentThirdName && clear == false && debug == true)
        {
            //console.log(currentTotal + " " + currentFirst);
            document.getElementById("secondScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("secondTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentFirst = currentTotal;
            document.getElementById("second").style = "top: 150px;";
            document.getElementById("third").style = "top: -150px;";
            currentThird = currentSecond;
            currentThirdName = currentSecondName;
            currentSecond = currentTotal;
            currentSecondName = schoolNames[a];
            clear = true;
        }
        
        if(currentTotal > currentSecond && currentTotal < currentFirst && clear == false)
        {           
            console.log("test");
            document.getElementById("secondTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("secondScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("secondTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentSecond = currentTotal;
            currentSecondName = schoolNames[a];
        }
        
        if(currentTotal > currentThird && schoolName == currentForthName && clear == false && debug == true)
        {
            //console.log(currentTotal + " " + currentFirst);
            document.getElementById("secondScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("secondTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentFirst = currentTotal;
            document.getElementById("third").style = "top: 150px;";
            document.getElementById("forth").style = "top: -150px;";
            currentForth = currentThird;
            currentForthName = currentThirdName;
            currentThird = currentTotal;
            currentThirdName = schoolNames[a];
            clear = true;
        }
        
        if(currentTotal > currentThird && currentTotal < currentSecond && clear == false)
        {
            document.getElementById("thirdTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("thirdScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("thirdTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentThird = currentTotal;
            currentThirdName = schoolNames[a];
        }
        
        if(currentTotal > currentForth && schoolName == currentFifthName && clear == false && debug == true)
        {
            //console.log(currentTotal + " " + currentFirst);
            document.getElementById("forthScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("forthTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentFirst = currentTotal;
            document.getElementById("forth").style = "top: 150px;";
            document.getElementById("fifth").style = "top: -150px;";
            currentFifth = currentForth;
            currentFifthName = currentForthName;
            currentForth = currentTotal;
            currentForthName = schoolNames[a];
            clear = true;
        }
        
        if(currentTotal > currentForth && currentTotal < currentThird && clear == false)
        {
            document.getElementById("forthTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("forthScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("forthTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentForth = currentTotal;
            currentForthName = schoolNames[a];
        }
        
        if(currentTotal > currentFifth && currentTotal < currentForth && clear == false)
        {
            document.getElementById("fifthTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("fifthScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("fifthTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            currentFifth = currentTotal;
            currentFifthName = schoolNames[a];
    }
    totalScore = total;
	totalBeginnerScore = beginnerTotal;
	totalIntermediateScore = intermediateTotal;
	totalAdvancedScore = advancedTotal;
    //document.getElementById("first").style = "top: 150px;";
    //document.getElementById("second").style = "top: -150px;";
}
}

$(setInterval(function () {
        $.getJSON("../testing/Score/data.json", function(result){
            $.each(result.schools, function(school, schools){
                schoolFullNames[schools.name] = schools.fullName;
                schoolBeginner[schools.name] = schools.Beginner;
                schoolIntermediate[schools.name] = schools.Intermediate;
                schoolAdvanced[schools.name] = schools.Advanced;
                schoolTotal[schools.name] = schools.Total;
            });
    });
}, 100));
