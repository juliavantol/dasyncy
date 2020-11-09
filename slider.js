var slider = document.getElementById("myRange");
var output = document.getElementById("displayValue");
var hours = Math.floor(slider.value / 60);
var minutes = slider.value % 60;
var minuteOutput = $("#minutes")[0];
var hourOutput = $("#hours")[0];
var secOutput = $("#seconds")[0];
var hours = Math.floor(slider.value / 60);
var minutes = slider.value % 60;
var seconds = slider.value % 60;
//
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("displayValue2");
var hours2 = Math.floor(slider.value / 60);
var minutes2 = slider.value % 60;
var minuteOutput2 = $("#minutes2")[0];
var hourOutput2 = $("#hours2")[0];
var secOutput2 = $("#seconds2")[0];
var hours2 = Math.floor(slider.value / 60);
var minutes2 = slider.value % 60;
var seconds2 = slider.value % 60;
hourOutput2.innerHTML = hours;
minuteOutput2.innerHTML = minutes
secOutput2.innerHTML = seconds


hourOutput.innerHTML = hours;
minuteOutput.innerHTML = minutes
secOutput.innerHTML = seconds

// movie
function playback(){
        var hours = Math.floor(slider.value / 3600);
        var minutes = Math.floor((slider.value % 3600) / 60);
        var seconds = slider.value % 60;
        hourOutput.innerHTML = hours;
        minuteOutput.innerHTML = minutes
        secOutput.innerHTML = seconds
        // audio
        slider2.value = slider.value
        hourOutput2.innerHTML = hours;
        minuteOutput2.innerHTML = minutes
        secOutput2.innerHTML = seconds

}

// audiotrack
function playback2(){
        var hours2 = Math.floor(slider2.value / 3600);
        var minutes2 = Math.floor((slider2.value % 3600) / 60);
        var seconds2 = slider2.value % 60;
        hourOutput2.innerHTML = hours2;
        minuteOutput2.innerHTML = minutes2
        secOutput2.innerHTML = seconds2

        // moviesync
        slider.value = slider2.value
        hourOutput.innerHTML = hours2;
        minuteOutput.innerHTML = minutes2
        secOutput.innerHTML = seconds2


}



document.getElementById("mytime").value = "00:00:00";