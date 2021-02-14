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

    return [movieStart, audioStart]
}

$("#timeForm").submit(function(e) {
    formContainer.classList.add("hide");
    sliderContainer.classList.remove("hide");
    e.preventDefault();

    //window.location.href="sliders.html";

});

function goBack() {
    formContainer.classList.remove("hide");
    sliderContainer.classList.add("hide");
    location.reload();

}