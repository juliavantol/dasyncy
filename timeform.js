var movieSlider = document.getElementById("movieSlider");
var audioSlider = document.getElementById("audioSlider");
var sliderContainer = document.getElementById("sliderContainer");
var formContainer = document.getElementById("formContainer");

// Handles the form with all the time data
// Sets the max values of the sliders
function timeForm() {
    var movieStart = document.time.movieStart.value
    var audioStart = document.time.audioStart.value

    // Convert input to seconds
    var movieMax = convertToSeconds(movieLength.value)
    var audioMax = convertToSeconds(audioLength.value)
    var movieStart = convertToSeconds(movieStart)
    var audioStart = convertToSeconds(audioStart)

    if (movieMax < audioMax) {
        movieSlider.max = audioMax
        audioSlider.max = audioMax
        localStorage.setItem("movieMax", audioMax);
        localStorage.setItem("audioMax", audioMax);
    } else {
        movieSlider.max = movieMax
        audioSlider.max = movieMax
        localStorage.setItem("movieMax", movieMax);
        localStorage.setItem("audioMax", movieMax);
    }

    // Check if the dict already exists
    var ifEmpty = JSON.parse(window.localStorage.getItem("sliders"));
    if (ifEmpty == null) {
        console.log("empty")
        // dict with all the sliders and their names
        var sliders = {}
        sliders[1] = "this is one"
        sliders[2] = "this is two"
        // store the dict of sliders in local storage
        window.localStorage.setItem("sliders", JSON.stringify(sliders));

    } else {
        console.log("already exists i guess")

        // check length of the dict
        lengthSliders = Object.keys(ifEmpty).length
        ifEmpty[(lengthSliders + 1)] = "this is another one"
        // store the dict of sliders in local storage
        window.localStorage.setItem("sliders", JSON.stringify(ifEmpty));

    }

    // this retrieves a dict of all the sliders
    var testing = JSON.parse(window.localStorage.getItem("sliders"));

    console.log(testing)

    return [movieStart, audioStart]
}

$("#timeForm").submit(function(e) {
    formContainer.classList.add("hide");
    sliderContainer.classList.remove("hide");
    e.preventDefault();
});

function goBack() {
    formContainer.classList.remove("hide");
    sliderContainer.classList.add("hide");
    location.reload();

}