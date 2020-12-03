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
    console.log(difference);

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


$("#movieSpot").submit(function(e) {
    e.preventDefault();
});

$("#audioSpot").submit(function(e) {
    e.preventDefault();
});