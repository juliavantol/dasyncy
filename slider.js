var hourOutput = document.getElementById("movieHours")
var minuteOutput = document.getElementById("movieMinutes")
var secOutput = document.getElementById("movieSeconds")

var hourOutput2 = document.getElementById("audioHours")
var minuteOutput2 = document.getElementById("audioMinutes")
var secOutput2 = document.getElementById("audioSeconds")

var movieSliderValue = document.getElementById("movieValue")
var audioSliderValue = document.getElementById("audioValue")

var difference = 0

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
    var audioSlider = document.getElementById("audioSlider");

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

    var movie = document.time.movie.value
    var audio = document.time.audio.value
    var movielength = document.time.movieLength.value
    var audiolength = document.time.audioLength.value

    movieMax = calculateLength(movielength)
    audioMax = calculateLength(audiolength)
    movieStart = calculateLength(movie)
    audioStart = calculateLength(audio)


    if (movieMax < audioMax) {
        movieSlider.max = audioMax
        audioSlider.max = audioMax
    } else {
        movieSlider.max = movieMax
        audioSlider.max = movieMax
    }

    // Calculate difference
    if (audioStart > movieStart) {
        var difference = audioStart - movieStart
        var msg = "audiofurther"

    } else {
        var difference = movieStart - audioStart
        var msg = "moviefurther"
    }

}

function calculateLength(totalTime){

    // Hours
    var h = totalTime[0] + totalTime[1]
    // Minutes
    var m = totalTime[3] + totalTime[4]
    // Seconds
    var s = totalTime[6] + totalTime[7]

    inth = parseInt(h, 10)
    intm = parseInt(m, 10)
    ints = parseInt(s, 10)

    // Convert hours to seconds
    a = inth * 3600
    // Convert minutes to seconds
    b = intm * 60
    // Total amount of seconds, used to get the max value for the slider
    maxValue = a + b + ints
    return maxValue;

}


$("#timeForm").submit(function(e) {

    e.preventDefault();
});