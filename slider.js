
// Update the current slider value (each time you drag the slider handle)
//slider.oninput = function() {
 //output.innerHTML = this.value;
//}

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
hourOutput.innerHTML = hours;
minuteOutput.innerHTML = minutes
secOutput.innerHTML = seconds


function showVal(newVal){
        var hours = Math.floor(slider.value / 3600);
        var minutes = Math.floor((slider.value % 3600) / 60);
        var seconds = slider.value % 60;
        hourOutput.innerHTML = hours;
        minuteOutput.innerHTML = minutes
        secOutput.innerHTML = seconds

}


