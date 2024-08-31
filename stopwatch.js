let Start=document.getElementById("start");
let Stop=document.getElementById("stop");
let Lap=document.getElementById("lap");
let Reset=document.getElementById("reset");
let hr = 0;
let min = 0;
let sec = 0;
let milli = 0;
let laplist=document.getElementById("lapul");
let hrLap;
let minLap;
let secLap;
let milliLap;
let c=0;
Start.addEventListener("click",function(){
    
    timer = true;
    StopWatch();
    Start.style.display="none";
    Stop.style.display="block";
    Lap.style.display="block";
    Reset.style.display="block";

});

Stop.addEventListener("click",function(){
    timer = false;
    Stop.style.display = "none";
    Start.style.display = "block";
});

Reset.addEventListener("click",function(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    milli = 0;
    Start.style.display="block";
    Stop.style.display="none";
    Lap.style.display="none";
    Reset.style.display="none";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("msec").innerHTML = "00";
});

function StopWatch(){
    if(timer){
        milli++;
        if(milli == 100){
            sec++;
            milli = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
        }
    }

    let hrstring = hr;
    let minstring = min;
    let secstring = sec;
    let millistring = milli;

    if(hr < 10){
        hrstring = "0" + hrstring;
    }

    if(min < 10){
        minstring = "0" + minstring;
    }

    if(sec < 10){
        secstring = "0" + secstring;
    }

    if(milli < 10){
        millistring = "0" + millistring;
    }

    document.getElementById("hr").innerHTML = hrstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("msec").innerHTML = millistring;
    hrLap=hrstring;
    minLap=minstring;
    secLap=secstring;
    milliLap=millistring;
    setTimeout(StopWatch,2);
};

Lap.addEventListener("click", function(){
    if(milliLap!=0){
    let lapList=document.createElement("li");
    lapList.setAttribute("id","LapList");
    ++c;
    lapList.innerHTML= "LapTime"+" : "+hrLap + " : "+minLap + " : "+secLap + " : "+milliLap;
    laplist.appendChild(lapList);
    console.log(lapList);
 }
});

