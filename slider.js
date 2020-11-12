var slider = document.getElementById("myRange");
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

var movieSliderValue  = document.getElementById("movieValue");
var audioSliderValue = document.getElementById("audioValue");

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

        movieSliderValue.innerHTML = slider.value
        audioSliderValue.innerHTML = slider2.value

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

        movieSliderValue.innerHTML = slider.value
        audioSliderValue.innerHTML = slider2.value

}

function calculateValue() {
    var movietime = document.time.movie.value
    var audiotime = document.time.audio.value
    var movielength = document.time.movielength.value
    var audiolength = document.time.audiolength.value

    // hours
    var h = movietime[0] + movietime[1]
    // minutes
    var m = movietime[3] + movietime[4]
    // seconds
    var s = movietime[6] + movietime[7]

    inth = parseInt(h, 10)
    intm = parseInt(m, 10)
    ints = parseInt(s, 10)
    a = inth * 3600
    b = intm * 60
    c = a + b + ints


}

document.getElementById("movieStart").value = "00:00:00";
document.getElementById("audioStart").value = "00:00:00";
document.getElementById("movieLength").value = "00:00:00";
document.getElementById("audioLength").value = "00:00:00";