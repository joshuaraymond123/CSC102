// playCraps function script
function playCraps(){
    // variable for each die. 1-6 number generated when play craps button clicked
    var die1 = Math.ceil(Math.random()* 6);
    var die2 = Math.ceil(Math.random()* 6);
    // variable for adding the sum of each die together to generate final score, which triggers if, else if, else statement
    var sum = die1 + die2
    //Element ID repesents the element's identifiers. Retrival command, refence back to HTML with ID and .innerHTML data transmission function
    document.getElementById("die1Dis").innerHTML= die1;
    document.getElementById("die2Dis").innerHTML= die2;
    document.getElementById("sumDis").innerHTML= sum;
    //if statement sums of 7 or 11 triggers a lose
    if (sum == 7 || sum == 11) {
        document.getElementById("resultsDis").innerHTML=  "Walk the Plank!";
    }
    // else if statement both die same number triggers a win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("resultsDis").innerHTML= "Plunder the booty!";
    }
    // else statment when both above conditions are not triggered, result is a draw
   else{
        document.getElementById("resultsDis").innerHTML= "Try yee luck once more!";
   }
}