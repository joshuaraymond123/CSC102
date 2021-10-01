//fuction for audio playback station sound mySound can be changed, new sound required*
function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
//function for Space Oddity function pull through to html with onclick
function playOddity() {
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}
//hail chief function
function playChief() {
    mySound = new sound("hail_to_the_chief.mp3");
    mySound.play();
}
//playTrees function Sound from Zapsplat.com
function playTrees() {
    mySound = new sound("near_trees.mp3");
    mySound.play();
}
//document.createElement-audio sound function command
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls","none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        //repeated play on each click, pause function is not working
    }
}