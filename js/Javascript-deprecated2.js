setInterval(changeTitle, 800);
setInterval(refreshScores, 100);

var time = 0;
var totalScore = 0;
var debug = true;
var totalBeginnerScore = 0;
var totalIntermediateScore = 0;
var totalAdvancedScore = 0;
var dataDict = ["first", "second", "top: 150px", "top: -150px", "secondScore", "secondTotal", "second", "third", "top: 150px", "top: -150px", "thirdScore", "thirdTotal", "third", "forth", "top: 150px", "top: -150px", "thirdScore", "forthTotal", "forth", "fifth", "top: 150px", "top: -150px", "fifthScore", "fifthTotal"];
var dataList = [0, "1", 0, "2", 0, "3", 0, "4", 0, "5"];

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

refreshAnimation(6, 2, 500, "PNE")

function refreshAnimation(integer1, integer2, currentTotal, schoolName)
{
    var data1 = "";
    var data2 = "";
    
    switch(integer1)
    {
        case 0:
            data1 = "first";
            data2 = "second";
            break;
        case 6:
            if(dataDict[2] == "first")
            {
            data1 = "first";
            }else{
            data1 = "second";
            }
            data2 = "third";
            break;
        case 12:
            data1 = "third";
            data2 = "forth";
            break;
        case 16:
            data1 = "forth";
            data2 = "fifth"; 
            break;
    }
    
    console.log(data1 + data2);
    
    document.getElementById(dataDict[integer1]).style = dataDict[integer1 + 2];
    document.getElementById(dataDict[integer1 + 1]).style = dataDict[integer1 + 3];
    document.getElementById(dataDict[integer1 + 4]).innerHTML = "Beginner: " + schoolBeginner[schoolName] + " Intermediate: " + schoolIntermediate[schoolName] + " Advanced: " + schoolAdvanced[schoolName];
    document.getElementById(dataDict[integer1 + 5]).innerHTML = "Total Score: " + schoolTotal[schoolName];
    
    dataList[integer2 + 2] = dataList[integer2];
    dataList[integer2 + 3] = dataList[integer2 + 1];
    dataList[integer2] = currentTotal;
    dataList[integer2 + 1] = schoolName;
            
    if(dataDict[integer1] == data1)
    {
    dataDict[integer1] = data2;
    dataDict[integer1 + 1] = data1;
    dataDict[integer1 + 2] = "top: 0px";
    dataDict[integer1 + 3] = "top: 0px";
    dataDict[integer1 + 4] = data1 + "Score";
    dataDict[integer1 + 5] = data1 + "Total";
    }else{
    dataDict[integer1] = data1;
    dataDict[integer1 + 1] = data2;
    dataDict[integer1 + 2] = "top: 150px";
    dataDict[integer1 + 3] = "top: -150px";
    dataDict[integer1 + 4] = data2 + "Score";
    dataDict[integer1 + 5] = data2 + "Total";
    }
    clear = true;    
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
        
        if(currentTotal > dataList[0] && schoolName == dataList[3] && debug == true)
        {
            refreshAnimation(0, 0, currentTotal, schoolName);
        }
        
        if(currentTotal > dataList[0] && clear == false)
        {
            if(dataDict[0] != "first")
            {
                refreshAnimation(0, 0, currentTotal, schoolName);
                console.log("Test");
            }
            document.getElementById("firstTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("firstScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("firstTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            dataList[0] = currentTotal;
            dataList[1] = schoolNames[a];
        }
        
        if(currentTotal > dataList[2] && schoolName == dataList[5] && clear == false && debug == true)
        {
            refreshAnimation(6, 2, currentTotal, schoolName);
        }
        
        if(currentTotal > dataList[2] && currentTotal < dataList[0] && clear == false)
        {           
            document.getElementById("secondTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("secondScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("secondTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            dataList[2] = currentTotal;
            dataList[3] = schoolNames[a];
        }
        
        if(currentTotal > dataList[4] && schoolName == dataList[7] && clear == false && debug == true)
        {
            refreshAnimation(11, 4, currentTotal, schoolName);
        }
        
        if(currentTotal > dataList[4] && currentTotal < dataList[2] && clear == false)
        {
            document.getElementById("thirdTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("thirdScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("thirdTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            dataList[4] = currentTotal;
            dataList[5] = schoolNames[a];
        }
        
        if(currentTotal > dataList[6] && schoolName == dataList[9] && clear == false && debug == true)
        {
            refreshAnimation(18, 6, currentTotal, schoolName);
        }
        
        if(currentTotal > dataList[6] && currentTotal < dataList[4] && clear == false)
        {
            document.getElementById("forthTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("forthScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("forthTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            dataList[6] = currentTotal;
            dataList[7] = schoolNames[a];
        }
        
        if(currentTotal > dataList[8] && currentTotal < dataList[6] && clear == false)
        {
            document.getElementById("fifthTitle").innerHTML = schoolFullNames[schoolNames[a]];
            document.getElementById("fifthScore").innerHTML = "Beginner: " + schoolBeginner[schoolNames[a]] + " Intermediate: " + schoolIntermediate[schoolNames[a]] + " Advanced: " + schoolAdvanced[schoolNames[a]];
            document.getElementById("fifthTotal").innerHTML = "Total Score: " + schoolTotal[schoolNames[a]];
            dataList[8] = currentTotal;
            dataList[9] = schoolNames[a];
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
