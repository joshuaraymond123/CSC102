// start function intiated when play button pressed; when stop button pressed action is complete
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerhtml = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerhtml = "Reading Data...";
}
 // stop function greyed out until pressed.
function stop() {
    document.getElementById("data").rows["seconds"].innerhtml = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("data").rows["longitude"].innerhtml = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}