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
    localStorage.setItem("movieStart", movieStart);
    localStorage.setItem("audioStart", audioStart);

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



function goBack() {
    formContainer.classList.remove("hide");
    sliderContainer.classList.add("hide");
    location.reload();

}