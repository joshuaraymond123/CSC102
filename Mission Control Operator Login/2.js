// Function command with varibale and if else statement, print command upon incorrect character count, successful retreval of replacement.html when variables are met
function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    if (fullName.length > 20 || fullName.length < 4) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!"; //failed login attempt due to invalid character count 
    } else if (badgeNumb > 999 || badgeNumb < 100) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!"; // invalid badge entry variable
    } else {
        alert(" Welcome " + fullName + "!"); // successful attempt login pop up display and opens table.html
        location.replace("table.html");
    }
}