var movieSlider = document.getElementById("movieSlider");
var audioSlider = document.getElementById("audioSlider");

var sliderContainer = document.getElementById("sliderContainer");
var formContainer = document.getElementById("formContainer");

function timeForm() {
    var movie = document.time.movie.value
    var audio = document.time.audio.value
    var movielength = document.time.movieLength.value
    var audiolength = document.time.audioLength.value

    var movieMax = calculateLength(movielength)
    var audioMax = calculateLength(audiolength)
    var movieStart = calculateLength(movie)
    var audioStart = calculateLength(audio)

    if (movieMax < audioMax) {
        movieSlider.max = audioMax
        audioSlider.max = audioMax
    } else {
        movieSlider.max = movieMax
        audioSlider.max = movieMax
    }

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
