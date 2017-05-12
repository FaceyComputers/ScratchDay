setInterval(changeTitle, 800);
setInterval(refreshScores, 1000);

var time = 0;
var totalScore = 0;
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
var clear = true;

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
    document.getElementById("Main_title").innerHTML = "Scratch Day Scoreboard 1.0";
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
        total = total + currentTotal;
        beginnerTotal = beginnerTotal + schoolBeginner[schoolNames[a]];
        intermediateTotal = intermediateTotal + schoolIntermediate[schoolNames[a]];
        advancedTotal = advancedTotal + schoolAdvanced[schoolNames[a]];
        //console.log(schoolTotal[schoolNames[a]]);
        if(currentTotal > currentFirst)
        {
            if(schoolName == currentSecondName || schoolName == currentThirdName || schoolName == currentForthName || schoolName == currentFifthName)
            {
            if(schoolName == currentSecondName)
            {
                document.getElementById("first").style = "top: 150px;";
                document.getElementById("second").style = "top: -150px;";
            }else if(schoolName == currentThirdName){
                document.getElementById("first").style = "top: 250px;";
                document.getElementById("third").style = "top: -250px;";
            }else if(schoolName == currentForthName){
                document.getElementById("first").style = "top: 350px;";
                document.getElementById("forth").style = "top: -350px;";
            }else if(schoolName == currentFifthName){
                document.getElementById("first").style = "top: 650px;";
                document.getElementById("fifth").style = "top: -650px;";
            }
            }else{
            document.getElementById("firstTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("firstScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("firstTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            }
            currentFirst = currentTotal;
            currentFirstName = schoolNames[a];
        }
        
        if(currentTotal > currentSecond && currentTotal < currentFirst)
        {
            if(currentSecondName == currentFirstName || currentSecondName == currentThirdName || currentSecondName == currentForthName || currentSecondName == currentFifthName)
            {
            if(schoolName == currentFirstName)
            {
                document.getElementById("second").style = "top: 150px;";
                document.getElementById("first").style = "top: -150px;";
            }else if(schoolName == currentThirdName){
                document.getElementById("second").style = "top: 250px;";
                document.getElementById("third").style = "top: -250px;";
            }else if(schoolName == currentForthName){
                document.getElementById("second").style = "top: 350px;";
                document.getElementById("forth").style = "top: -350px;";
            }else if(schoolName == currentFifthName){
                document.getElementById("second").style = "top: 650px;";
                document.getElementById("fifth").style = "top: -650px;";
            }
            }else{
            document.getElementById("secondTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("secondScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("secondTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            }
            currentSecond = currentTotal;
            currentSecondName = schoolNames[a];
        }
        
        if(currentTotal > currentThird && currentTotal < currentSecond && clear == false)
        {
            if(currentThirdName == currentFirstName || currentThirdName == currentSecondName || currentThirdName == currentForthName || currentThirdName == currentFifthName)
            {
            if(schoolName == currentFirstName)
            {
                document.getElementById("third").style = "top: 150px;";
                document.getElementById("first").style = "top: -150px;";
            }else if(schoolName == currentSecondName){
                document.getElementById("third").style = "top: 250px;";
                document.getElementById("second").style = "top: -250px;";
            }else if(schoolName == currentForthName){
                document.getElementById("third").style = "top: 350px;";
                document.getElementById("forth").style = "top: -350px;";
            }else if(schoolName == currentFifthName){
                document.getElementById("third").style = "top: 650px;";
                document.getElementById("fifth").style = "top: -650px;";
            }
            }else{
            document.getElementById("thirdTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("thirdScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("thirdTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            }
            currentThird = currentTotal;
            currentThirdName = schoolNames[a];
        }
        if(currentTotal > currentForth && currentTotal < currentThird)
        {
            if(currentForthName == currentFirstName || currentForthName == currentSecondName || currentForthName == currentThirdName || currentForthName == currentFifthName)
            {
            if(schoolName == currentFirstName)
            {
                document.getElementById("forth").style = "top: 150px;";
                document.getElementById("first").style = "top: -150px;";
            }else if(schoolName == currentSecondName){
                document.getElementById("forth").style = "top: 250px;";
                document.getElementById("second").style = "top: -250px;";
            }else if(schoolName == currentThirdName){
                document.getElementById("forth").style = "top: 350px;";
                document.getElementById("third").style = "top: -350px;";
            }else if(schoolName == currentFifthName){
                document.getElementById("forth").style = "top: 650px;";
                document.getElementById("fifth").style = "top: -650px;";
            }
            }else{
            document.getElementById("forthTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("forthScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + "Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("forthTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            }
            currentForth = currentTotal;
            currentForthName = schoolNames[a];
        }
        if(currentTotal > currentFifth && currentTotal < currentForth)
        {
            if(currentFifthName == currentFirstName || currentFifthName == currentSecondName || currentFifthName == currentThirdName || currentFifthName == currentForthName && clear == false)
            {
            if(schoolName == currentFirstName)
            {
                document.getElementById("fifth").style = "top: 150px;";
                document.getElementById("first").style = "top: -150px;";
            }else if(schoolName == currentSecondName){
                document.getElementById("fifth").style = "top: 250px;";
                document.getElementById("second").style = "top: -250px;";
            }else if(schoolName == currentThirdName){
                document.getElementById("fifth").style = "top: 350px;";
                document.getElementById("third").style = "top: -350px;";
            }else if(schoolName == currentForthName){
                document.getElementById("fifth").style = "top: 650px;";
                document.getElementById("forth").style = "top: -650px;";
            }    
            }else{
            document.getElementById("fifthTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("fifthScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("fifthTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            }
            currentFifth = currentTotal;
            currentFifthName = schoolNames[a];
        }
    }
    totalScore = total;
    clear = false;
    //document.getElementById("first").style = "top: 150px;";
    //document.getElementById("second").style = "top: -150px;";
}

$(setInterval(function () {
        $.getJSON("../data/schoolData.json", function(result){
            $.each(result.schools, function(school, schools){
                schoolFullNames[schools.name] = schools.fullName;
                schoolBeginner[schools.name] = schools.Beginner;
                schoolIntermediate[schools.name] = schools.Intermediate;
                schoolAdvanced[schools.name] = schools.Advanced;
                schoolTotal[schools.name] = schools.Total;
            });
    });
}, 700));
