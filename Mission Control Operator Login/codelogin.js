
// Function command with varibale and if else statement, print command upon incorrect character count, successful retreval of replacement.html when variables are met
function checkCreds() {
    var eventName = document.getElementById("eventName").value;
    var theme = document.getElementById("theme").value;
    var idInfo = document.getElementById("idInfo").value;
    var eventInfo = eventName + " " + theme;
    if (eventInfo.length >20 || eventInfo.length <4) {
        // if (eventInfo.length > 40 || eventInfo.length < 2) {
            document.getElementById("loginStatus").innerHTML = "Credentials are invalid, please re-enter!"; //information is auto-clearing upon submit. Adding delay prevented the information from submitting
        }
        else if (idInfo >150 || idInfo <2) {
            document.getElementById("loginStatus").innerHTML = "Invalid login ID!"; //information is auto-clearing upon submit. Adding delay prevented the information from submitting
        }
        else {
            alert("Login in successful " + eventInfo + "!"); //information prints pop-up window and access to created table.html
           location.replace("table.html")
        }
    }