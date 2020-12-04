var hourOutput = document.getElementById("movieHours")
var minuteOutput = document.getElementById("movieMinutes")
var secOutput = document.getElementById("movieSeconds")

var hourOutput2 = document.getElementById("audioHours")
var minuteOutput2 = document.getElementById("audioMinutes")
var secOutput2 = document.getElementById("audioSeconds")

function moviespot() {
    // Get time
    var movieTime = document.getElementById("moviespotForm").value;
    var movieSum = calculateLength(movieTime)

    // Change spot in slider
    var movieSlider = document.getElementById("movieSlider");
    var audioSlider = document.getElementById("audioSlider");

    var values = calculateValue()
    movieStart = values[0]
    audioStart = values[1]

    var values2 = calculateDifference(audioStart, movieStart)
    var difference = values2[0]
    var msg = values2[1]
    console.log(difference);

    movieSlider.value = movieSum
    // audiosync
    if (msg == "audiofurther") {
       audioSlider.value = (movieSum + difference)
    } else {
       audioSlider.value = (movieSum - difference)
    }


}

function audiospot() {
    // Get time
    var audioTime = document.getElementById("audiospotForm").value;
    var audioSum = calculateLength(audioTime)

    // Change spot in slider
    var movieSlider = document.getElementById("movieSlider");
    var audioSlider = document.getElementById("audioSlider");

    var values = calculateValue()
    movieStart = values[0]
    audioStart = values[1]

    var values2 = calculateDifference(audioStart, movieStart)
    var difference = values2[0]
    var msg = values2[1]


    audioSlider.value = audioSum
    // audiosync
    if (msg == "audiofurther") {
       movieSlider.value = (audioSum - difference)
    } else {
       movieSlider.value = (audioSum + difference)
    }


}



function calculateLength(totalTime){

    if (totalTime.length < 8) {
    // Hours
    var h = totalTime[0] + totalTime[1]
    // Minutes < 5
    var m = totalTime[3] + totalTime[4]

    inth = parseInt(h, 10)
    intm = parseInt(m, 10)

    // Convert hours to seconds
    a = inth * 3600
    // Convert minutes to seconds
    b = intm * 60
    // Total amount of seconds, used to get the max value for the slider
    maxValue = a + b
    return maxValue;

    } else {
    // Hours
    var h = totalTime[0] + totalTime[1]
    // Minutes < 5
    var m = totalTime[3] + totalTime[4]
    // Seconds < 8
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

}

$("#movieSpot").submit(function(e) {
    e.preventDefault();
});

$("#audioSpot").submit(function(e) {
    e.preventDefault();
});


function calculateDifference(audioStart, movieStart){

     // Calculate difference
    if (audioStart > movieStart) {
        var difference = audioStart - movieStart
        var msg = "audiofurther"

    } else {
        var difference = movieStart - audioStart
        var msg = "moviefurther"
    }
    return [difference, msg];

}

// Function to calculate the time output
function calculateTime(sliderValue) {
     // Calculate time
     var hours = Math.floor(sliderValue / 3600);
     var minutes = Math.floor((sliderValue % 3600) / 60);
     var seconds = sliderValue % 60;

     return [hours, minutes, seconds]

}

// With this function you calculate both values of the sliders
function calculateSlider(sliderValue, slider) {

        testing = calculateValue()
        movieStart = testing[0]
        audioStart = testing[1]
        // Get slider values
        var values = calculateDifference(audioStart, movieStart)
        // Get difference
        var difference = values[0]
        var msg = values[1]

        intvalue = parseInt(sliderValue, 10)

        // Sync up with difference
        if (slider == "movie") {
            // audiosync
            var movieValue = intvalue
            if (msg == "audiofurther") {
                audioValue = (intvalue + difference)
            } else {
                audioValue = (intvalue - difference)
            }

        } else if (slider == "audio") {
            // moviesync
            var audioValue = intvalue
            if (msg == "audiofurther") {
                movieValue = (intvalue - difference)
            } else {
                movieValue = (intvalue + difference)
            }

        }

        return [movieValue, audioValue];
}

function changeMovieSlider() {
    // Get slider
    var movieSlider = document.getElementById("movieSlider");
    // Get value
    movieValue = movieSlider.value
    var slider = "movie"

    // Calculate new value
    newValues = calculateSlider(movieValue, slider)
    newMovie = newValues[0]
    newAudio = newValues[1]

    changeSlider(newMovie, newAudio)
}

function changeAudioSlider() {
    // Get slider
    var audioSlider = document.getElementById("audioSlider");
    // Get value
    audioValue = audioSlider.value
    var slider = "audio"

    // Calculate new value
    newValues = calculateSlider(audioValue, slider)
    newMovie = newValues[0]
    newAudio = newValues[1]

    changeSlider(newMovie, newAudio)
}


function changeSlider(newMovie, newAudio) {
    // Get the sliders
    var movieSlider = document.getElementById("movieSlider");
    var audioSlider = document.getElementById("audioSlider");

    // Fetch the slider value output
    var movieSliderValue = document.getElementById("movieValue");
    var audioSliderValue = document.getElementById("audioValue");

    // Set the texts to the new value
    movieSliderValue.innerHTML = newMovie
    audioSliderValue.innerHTML = newAudio

    // Set the slider values
    movieSlider.value = newMovie
    audioSlider.value = newAudio

    movieTimes = calculateTime(newMovie)
    audioTimes = calculateTime(newAudio)

    hourOutput.innerHTML = movieTimes[0]
    minuteOutput.innerHTML = movieTimes[1]
    secOutput.innerHTML = movieTimes[2]

    hourOutput2.innerHTML = audioTimes[0]
    minuteOutput2.innerHTML = audioTimes[1]
    secOutput2.innerHTML = audioTimes[2]

}