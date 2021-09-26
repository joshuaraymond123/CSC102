//Countdown timer <=11 variable
function betterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                "Warning Less than half 1/2 way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);

        }
    }
}
// Countdown timer i<12 variable, better option of the two. 
function whileCount() {
    var currtime = 10;
    var i = 1;
    while (i < 12) {

        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!:)";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half 1/2 way to launch, time left = " + currTime;
                currtime = currtime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currtime;
                currtime = currtime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}