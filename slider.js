var hourOutput = document.getElementById("movieHours")
var minuteOutput = document.getElementById("movieMinutes")
var secOutput = document.getElementById("movieSeconds")

var hourOutput2 = document.getElementById("audioHours")
var minuteOutput2 = document.getElementById("audioMinutes")
var secOutput2 = document.getElementById("audioSeconds")

var movieSliderValue = document.getElementById("movieValue")
var audioSliderValue = document.getElementById("audioValue")

// movie
function playback(){
        var hours = Math.floor(movieSlider.value / 3600);
        var minutes = Math.floor((movieSlider.value % 3600) / 60);
        var seconds = movieSlider.value % 60;

        hourOutput.innerHTML = hours;
        minuteOutput.innerHTML = minutes
        secOutput.innerHTML = seconds

        // audio
        audioSlider.value = movieSlider.value
        hourOutput2.innerHTML = hours;
        minuteOutput2.innerHTML = minutes
        secOutput2.innerHTML = seconds

        movieSliderValue.innerHTML = movieSlider.value
        audioSliderValue.innerHTML = audioSlider.value

}

// audiotrack
function playback2(){
        var hours2 = Math.floor(audioSlider.value / 3600);
        var minutes2 = Math.floor((audioSlider.value % 3600) / 60);
        var seconds2 = audioSlider.value % 60;
        hourOutput2.innerHTML = hours2;
        minuteOutput2.innerHTML = minutes2
        secOutput2.innerHTML = seconds2

        // moviesync
        movieSlider.value = audioSlider.value
        hourOutput.innerHTML = hours2;
        minuteOutput.innerHTML = minutes2
        secOutput.innerHTML = seconds2

        movieSliderValue.innerHTML = movieSlider.value
        audioSliderValue.innerHTML = audioSlider.value

}

function calculateValue() {
     // Movie slider
    var movieSlider = document.getElementById("movieSlider");
    var hourOutput = $("#movieHours")[0];
    var minuteOutput = $("#movieMinutes")[0];
    var secOutput = $("#movieSeconds")[0];

    // Audio slider
    var audioSlider = document.getElementById("audioSlider");
    var hourOutput2 = $("#audioHours")[0];
    var minuteOutput2 = $("#audioMinutes")[0];
    var secOutput2 = $("#audioSeconds")[0];

    var movieSliderValue  = document.getElementById("movieValue");
    var audioSliderValue = document.getElementById("audioValue");
    var sliderContainer  = document.getElementById("sliderContainer");
    var formContainer = document.getElementById("formContainer");

    var movietime = document.time.movie.value
    var audiotime = document.time.audio.value
    var movielength = document.time.movieLength.value
    var audiolength = document.time.audioLength.value

    // Hours
    var h = movietime[0] + movietime[1]
    // Minutes
    var m = movietime[3] + movietime[4]
    // Seconds
    var s = movietime[6] + movietime[7]

    inth = parseInt(h, 10)
    intm = parseInt(m, 10)
    ints = parseInt(s, 10)
    a = inth * 3600
    b = intm * 60
    c = a + b + ints
    sliderContainer.removeAttribute("class", "hide");
    formContainer.setAttribute("class", "hide");



}

$("#timeForm").submit(function(e) {

    e.preventDefault();
});
