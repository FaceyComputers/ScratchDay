setInterval(changeTitle, 800);

var time = 0;
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
        
        for(var b = 0; b < listDictionary.length; b++)
        {
            for(var d = 0; d < listDictionary.length; d++)
            {
            if(nameDictionary[d] == nameDictionary[d - 1])
            {
                console.log("test");
            }
            }
            if(b == 0)
            {
                //console.log(schoolName + nameDictionary[0]);
                
                if(currentTotal > totalDictionary[b])
                {
                    fadeout(b);
                    nameDictionary[b] = schoolName;
                    totalDictionary[b] = currentTotal;
                    setTimeout(animation, 1000);
                }
            }else{
                
                if(currentTotal == totalDictionary[b - 1] && nameDictionary[b - 1] != schoolName && nameDictionary[b - 2] != schoolName && nameDictionary[b - 3] != schoolName && nameDictionary[b + 1] != schoolName && nameDictionary[b + 2] != schoolName)
                {
                    console.log("test2");
                    fadeout(b);
                    nameDictionary[b] = schoolName;
                    totalDictionary[b] = currentTotal;
                    setTimeout(animation, 1000);
                }else if(currentTotal > totalDictionary[b] && currentTotal < totalDictionary[b - 1] && schoolName != nameDictionary[b - 1])
                {
                    console.log("test");
                    fadeout(b);
                    nameDictionary[b] = schoolName;
                    totalDictionary[b] = currentTotal;
                    setTimeout(animation, 1000);
                }  
        }
           
    totalScore = total;
	totalBeginnerScore = beginnerTotal;
	totalIntermediateScore = intermediateTotal;
	totalAdvancedScore = advancedTotal;
    //document.getElementById("first").style = "top: 150px;";
    //document.getElementById("second").style = "top: -150px;";
}
}
}

function fadeout(b)
{
                    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style = "opacity: 0;"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style = "opacity: 0;"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style = "opacity: 0;"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.transition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.WebkitTransition = "all 1s";
                    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.MozTransition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.OTransition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.transition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.WebkitTransition = "all 1s";
                    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.MozTransition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.OTransition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.transition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.WebkitTransition = "all 1s";
                    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.MozTransition = "all 1s"; 
                    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.OTransition = "all 1s";     
}

function animation(b)
{
    for(var b = 0; b < listDictionary.length; b++)
    {
    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style = "opacity: 1;"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style = "opacity: 1;"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style = "opacity: 1;"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.transition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.WebkitTransition = "all 1s";
    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.MozTransition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("School")[0].style.OTransition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.transition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.WebkitTransition = "all 1s";
    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.MozTransition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("Total")[0].style.OTransition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.transition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.WebkitTransition = "all 1s";
    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.MozTransition = "all 1s"; 
    document.getElementById(listDictionary[b]).getElementsByClassName("Score")[0].style.OTransition = "all 1s";   
    document.getElementById(String(listDictionary[b])).getElementsByClassName("School")[0].innerHTML = schoolFullNames[nameDictionary[b]];
    document.getElementById(String(listDictionary[b])).getElementsByClassName("Score")[0].innerHTML = "Beginner: " + schoolBeginner[nameDictionary[b]] + " Intermediate: " + schoolIntermediate[nameDictionary[b]] + " Advanced: " + schoolAdvanced[nameDictionary[b]];
    document.getElementById(String(listDictionary[b])).getElementsByClassName("Total")[0].innerHTML = "Total Score: " + schoolTotal[nameDictionary[b]];    
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
                refreshScores();
            });
    });
}, 100));
