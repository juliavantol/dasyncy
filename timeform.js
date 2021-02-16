var movieSlider = document.getElementById("movieSlider");
var audioSlider = document.getElementById("audioSlider");
var sliderContainer = document.getElementById("sliderContainer");
var formContainer = document.getElementById("formContainer");

// Handles the form with all the time data
// Sets the max values of the sliders
function timeForm() {
    var movieStart = document.time.movieStart.value
    var audioStart = document.time.audioStart.value
    var title = document.getElementById("title").value;
    localStorage.setItem("title", title);

    // Convert input to seconds
    var movieMax = convertToSeconds(movieLength.value)
    var audioMax = convertToSeconds(audioLength.value)
    var movieStart2 = convertToSeconds(movieStart)
    var audioStart2 = convertToSeconds(audioStart)

    // problematic
    localStorage.setItem("movieStart", movieStart2);
    localStorage.setItem("audioStart", audioStart2);



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


    return [movieStart2, audioStart2]
}
