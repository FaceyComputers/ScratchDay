var myVar = setInterval(changeTitle, 1000);

var time = 0;

function changeTitle()
{
    if(time < 10)
    {
    document.getElementById("Main_title").innerHTML = "Scratch Day Scoreboard 1.0";
    }
    if(time > 10)
    {
    document.getElementById("Main_title").innerHTML = "Total Score: ";  
    }
    if(time >= 20)
    {
        time = 0;
    }
    time++;
}
