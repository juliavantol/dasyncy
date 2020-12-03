function moviespot() {
    // Get time
    var movieTime = document.getElementById("moviespotForm").value;

    if (movieTime.length < 8) {
    // Divide the time
    h = movieTime[0] + movieTime[1]
    m = movieTime[3] + movieTime[4]
    inth = parseInt(h, 10)
    intm = parseInt(m, 10)

    // Calculate spot
    hours = inth * 3600
    minutes = intm * 60
    sum = (hours + minutes)

    } else {

    h = movieTime[0] + movieTime[1]
    m = movieTime[3] + movieTime[4]
    s = movieTime[6] + movieTime[7]
    inth = parseInt(h, 10)
    intm = parseInt(m, 10)
    ints = parseInt(s, 10)

    // Calculate spot
    hours = inth * 3600
    minutes = intm * 60
    sum = (hours + minutes + ints)
    }

    console.log(sum);

    // Change spot in slider
    var movieSlider = document.getElementById("movieSlider");
    movieSlider.value = sum
    console.log(movieSlider.value);

}

$("#movieSpot").submit(function(e) {
    e.preventDefault();
});