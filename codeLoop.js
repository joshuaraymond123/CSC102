
function simpleCount() {
    var currTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to after each loop) i++ same as  i = i+1*/
    for (var i = 1; i < 12; i++) {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "Time until reveal: " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    }
}
function simpleDo() {
    var currTime = 10;
    var i = 1;
    do {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is: " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        i += 1; /* same as i = i+1 */
    } while (i < 12);
}

function betterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Introducing, Count Chocula!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to reveal, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
function whileCount() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {


        if (i == 11) {      
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Introducing, Count Olaf!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to reveal, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}