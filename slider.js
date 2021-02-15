var mHr = document.getElementById("movieHours")
var mMin = document.getElementById("movieMinutes")
var mSec = document.getElementById("movieSeconds")

var aHr = document.getElementById("audioHours")
var aMin = document.getElementById("audioMinutes")
var aSec = document.getElementById("audioSeconds")

function movieSlider() {

    var movieSlider = document.getElementById("movieSlider");
    movieValue = movieSlider.value
    var slider = "movie"

    bothSliders(movieValue, slider)
}

function audioSlider() {

    var audioSlider = document.getElementById("audioSlider");
    audioValue = audioSlider.value
    var slider = "audio"

    bothSliders(audioValue, slider)
}

function bothSliders(value, slider) {

    // Calculate new value
    newValues = calculateSlider(value, slider)
    newMovie = newValues[0]
    newAudio = newValues[1]

    changeSlider(newMovie, newAudio)

}

// With this function you calculate both values of the sliders
function calculateSlider(sliderValue, slider) {

        movieStart = localStorage.getItem("movieStart");
        audioStart = localStorage.getItem("audioStart");

        // Calculate the difference
        var values = calculateDifference(audioStart, movieStart)
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

function convertToSeconds(totalTime){

    var h = totalTime[0] + totalTime[1]
    var m = totalTime[3] + totalTime[4]
    var ints = 0

    if (totalTime.length > 5) {
        var s = totalTime[6] + totalTime[7]
        ints = parseInt(s, 10)
    }

    inth = parseInt(h, 10)
    intm = parseInt(m, 10)

    // Convert hours to seconds
    a = inth * 3600
    // Convert minutes to seconds
    b = intm * 60
    // Total amount of seconds
    total = a + b + ints
    return total;
}

function changeSlider(newMovie, newAudio) {
    // Get the sliders
    var movieSlider = document.getElementById("movieSlider");
    var audioSlider = document.getElementById("audioSlider");

    movieSlider.max = localStorage.getItem("movieMax");
    audioSlider.max = localStorage.getItem("audioMax");

    // Set the slider values
    movieSlider.value = newMovie
    audioSlider.value = newAudio

    // Set the time
    movieTimes = calculateTime(newMovie, mHr, mMin, mSec)
    audioTimes = calculateTime(newAudio, aHr, aMin, aSec)
}

// Function to calculate the time output
function calculateTime(sliderValue, h, m, s) {
     // Calculate time
     var hours = Math.floor(sliderValue / 3600);
     var minutes = Math.floor((sliderValue % 3600) / 60);
     var seconds = sliderValue % 60;

     h.innerHTML = hours;
     m.innerHTML = minutes;
     s.innerHTML = seconds;

     return [hours, minutes, seconds]

}

function moviespot() {
    // Get time
    var movieTime = document.getElementById("moviespotForm").value;
    var slider = "movie"

    value = convertToSeconds(movieTime)
    // Calculate new value
    newValues = calculateSlider(value, slider)
    newMovie = newValues[0]
    newAudio = newValues[1]

    changeSlider(newMovie, newAudio)
}

function audiospot() {
    // Get time
    var audioTime = document.getElementById("audiospotForm").value;
    var slider = "audio"

    value = convertToSeconds(audioTime)
    // Calculate new value
    newValues = calculateSlider(value, slider)
    newMovie = newValues[0]
    newAudio = newValues[1]

    changeSlider(newMovie, newAudio)
}

$("#movieSpot").submit(function(e) {
    e.preventDefault();
});

$("#audioSpot").submit(function(e) {
    e.preventDefault();
});

// Handle LocalStorage
function saveSlider() {

    var movieSlider = document.getElementById("movieSlider");
    var audioSlider = document.getElementById("audioSlider");
    var difference = calculateDifference(audioSlider.value, movieSlider.value)
    var max = localStorage.getItem("movieMax");

    // Dict to save a slider
    var slider = {
        "movieValue": movieSlider.value,
        "audioValue": audioSlider.value,
        "difference": difference[0],
        "position": difference[1],
        "max": max
    }

    var title = localStorage.getItem("title");

    // Check if the dict already exists
    var sliders = JSON.parse(window.localStorage.getItem("sliders"));
    if (sliders == null) {
        // dict with all the sliders and their names
        var new_sliders = {}
        new_sliders[title] = slider
        // store the dict of sliders in local storage
        window.localStorage.setItem("sliders", JSON.stringify(new_sliders));

    } else {
        // check length of the dict
        lengthSliders = Object.keys(sliders).length
        sliders[title] = slider
        // store the dict of sliders in local storage
        window.localStorage.setItem("sliders", JSON.stringify(sliders));

    }

    // this retrieves a dict of all the sliders
    var slidersDict = JSON.parse(window.localStorage.getItem("sliders"));
    // delete slidersDict["finding nemo"]

    // log dict with all the dicts
    showSliders()

    // DELETE OR ACCESS ENTRY
    // delete slidersDict["Finding Nemo"]

}

function showSliders() {
    // Show all the saved sliders in the navigation bar
    // this retrieves a dict of all the sliders
    document.getElementById("sideNav").innerHTML = "";
    var slidersDict = JSON.parse(window.localStorage.getItem("sliders"));
    var prop;
    for (prop in slidersDict) {
//        var b = document.createElement("b");
//        var text = document.createTextNode(prop);
//        b.appendChild(text);
//        b.title = prop
//        b.id = "savedslider"
//        b.onclick = "popup()"
//        var element = document.getElementById("sideNav");
//        element.appendChild(b);
        var stripped = prop.split(" ").join("")
        var span = document.createElement('span');

        //span.innerHTML =  "<button type='button' onclick='tip(" + "{stripped}" + ")'> hey" + "</button>"
        span.innerHTML = '<button type="button" onclick="loadSlider(' + "'"+ prop + "'" + ')">' + prop + '</button>'
        var element = document.getElementById("sideNav");
        element.appendChild(span);

    }

}



function loadSlider(title)
{
    // this retrieves a dict of all the sliders
    var slidersDict = JSON.parse(window.localStorage.getItem("sliders"));
    var current = slidersDict[title]
    console.log(current)

}

window.onload = showSliders;

function test() {
    var movieSlider = document.getElementById("movieSlider");
    var audioSlider = document.getElementById("audioSlider");
    var difference = calculateDifference(audioSlider.value, movieSlider.value)
    var max = localStorage.getItem("movieMax");

    // Dict to save a slider
    var slider = {
        "movieValue": movieSlider.value,
        "audioValue": audioSlider.value,
        "difference": difference[1],
        "max": max
    }

    console.log(slider);
}