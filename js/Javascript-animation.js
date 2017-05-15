setInterval(changeTitle, 800);

var time = 0;
var totalScore = 0;
var debug = true;
var totalBeginnerScore = 0;
var totalIntermediateScore = 0;
var totalAdvancedScore = 0;
var y_axis = 147;

/*var listDictionary = {first: "first",
                     second: "second",
                     third: "third",
                     forth: "forth",
                     fifth: "fifth"};

var nameDictionary = {first: "",
                     second: "",
                     third: "",
                     forth: "",
                     fifth: ""}*/

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

function getStyle(oElm, strCssRule){
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    else if(oElm.currentStyle){
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
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
            if(b == 0)
            {
                //console.log(schoolName + nameDictionary[0]);
                if(currentTotal > totalDictionary[b] && schoolName == nameDictionary[b + 1])
                {
                    var defaultText = y_axis;
                    var defaultText2 = -y_axis;
                    var test = "d" + (b + 1);
                    if(listDictionary[b + 1] != test)
                    {
                        var top = listDictionary[b + 1];
                        top = top.replace('d', '');
                        defaultText2 = 0;
                        for(var c = 0; c < parseInt(top); c++)
                        {
                            defaultText2 = defaultText2 + y_axis;
                        }
                        defaultText2 = -defaultText2;
                    }
                    
                    if(getStyle(document.getElementById(listDictionary[b]), "top") != "0px")
                    {
                        if(listDictionary[b] != test)
                        {
                        var top = listDictionary[b];
                        top = top.replace('d', '');
                        defaultText = 0;
                        for(var c = 0; c < parseInt(top); c++)
                        {
                            defaultText2 = defaultText2 + y_axis;
                        }
                        defaultText = defaultText - y_axis;
                        }else{
                        defaultText = 0;
                        }
                        defaultText2 = 0;
                    }
                    
                    document.getElementById(listDictionary[b]).style = "top: " + String(defaultText) + "px;";
                    document.getElementById(listDictionary[b + 1]).style = "top: " + String(defaultText2) + "px;";
                    var backup = listDictionary[b];
                    listDictionary[b] = listDictionary[b + 1];
                    listDictionary[b + 1] = backup;
                    console.log(listDictionary[b] + " " + listDictionary[b + 1]);
                }
                
                if(currentTotal > totalDictionary[b])
                {
                    document.getElementById(String(listDictionary[b])).getElementsByClassName("School")[0].innerHTML = schoolFullNames[schoolName];
                    document.getElementById(String(listDictionary[b])).getElementsByClassName("Score")[0].innerHTML = "Beginner: " + schoolBeginner[schoolName] + " Intermediate: " + schoolIntermediate[schoolName] + " Advanced: " + schoolAdvanced[schoolName];
                    document.getElementById(String(listDictionary[b])).getElementsByClassName("Total")[0].innerHTML = "Total Score: " + schoolTotal[schoolName];
                    nameDictionary[b] = schoolName;
                    totalDictionary[b] = currentTotal;
                }
            }else{
                
                if(currentTotal > totalDictionary[b] && schoolName == nameDictionary[b + 1])
                {
                    var defaultText = y_axis;
                    var test = "d" + (b + 1);
                    var defaultText2 = -y_axis;
                    console.log(listDictionary[b + 1] + test);
                    if(listDictionary[b + 1] != test)
                    {
                        var top = listDictionary[b + 1];
                        top = top.replace('d', '');
                        defaultText2 = 0;
                        for(var c = 0; c < parseInt(top); c++)
                        {
                            defaultText2 = defaultText2 + y_axis;
                        }
                        defaultText2 = -defaultText2;
                    }
                    if(getStyle(document.getElementById(listDictionary[b]), "top") != "0px")
                    {
                        if(listDictionary[b] != test)
                        {
                        var top = listDictionary[b];
                        top = top.replace('d', '');
                        defaultText = 0;
                        for(var c = 0; c < parseInt(top); c++)
                        {
                            defaultText2 = defaultText2 + y_axis;
                        }
                        defaultText = defaultText - y_axis;
                        }else{
                        defaultText = 0;
                        }
                        defaultText2 = 0;
                    }
                    document.getElementById(listDictionary[b]).style = "top: " + String(defaultText) + "px;";
                    document.getElementById(listDictionary[b + 1]).style = "top: " + String(defaultText2) + "px;";
                    var backup = listDictionary[b];
                    listDictionary[b] = listDictionary[b + 1];
                    listDictionary[b + 1] = backup;
                    console.log(listDictionary[b] + " " + listDictionary[b + 1]);
                }
                
                if(currentTotal > totalDictionary[b] && currentTotal < totalDictionary[b - 1])
                {
                    document.getElementById(String(listDictionary[b])).getElementsByClassName("School")[0].innerHTML = schoolFullNames[schoolName];
                    document.getElementById(String(listDictionary[b])).getElementsByClassName("Score")[0].innerHTML = "Beginner: " + schoolBeginner[schoolName] + " Intermediate: " + schoolIntermediate[schoolName] + " Advanced: " + schoolAdvanced[schoolName];
                    document.getElementById(String(listDictionary[b])).getElementsByClassName("Total")[0].innerHTML = "Total Score: " + schoolTotal[schoolName];
                    nameDictionary[b] = schoolName;
                    totalDictionary[b] = currentTotal;
                }
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

//document.getElementById(listDictionary[2]).style = "top: -140px;";

/*function manualAnimation(b, height)
{
    console.log("Declared with: " + height);
    document.getElementById(listDictionary[b]).style = "top: " + String(height);
    document.getElementById(listDictionary[b + 1]).style = "top: " + String(height);
}*/

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
