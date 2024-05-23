var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];
    //var noise = new Audio( "sounds/" + randomChosenColor + ".mp3" );
    //noise.play();

    level++;
    $("h1").text("Level " + level);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $("." + randomChosenColor).fadeOut(150);
    $("." + randomChosenColor).fadeIn(400);
}

function playSound(color) {
    var noise = new Audio( "sounds/" + color + ".mp3" );
    noise.play();
}

function animatePressed(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function() {
        //your code to be executed after 1 second
        $("." + currentColor).removeClass("pressed");
      }, 100);
}

function checkAnswer() {
    console.log(gamePattern);
    console.log(userClickedPattern);
    for (var i = 0; i < userClickedPattern.length; i++)
    if (gamePattern[i] != userClickedPattern[i]) {
        gameOver();
    } else if (gamePattern.toString() === userClickedPattern.toString()) {
        userClickedPattern = [];
        setTimeout(function() {
            //your code to be executed after 1 second
            nextSequence();
          }, 500);
    }
}

function gameOver() {
    var badNoise = new Audio( "sounds/wrong.mp3" );
    if (level > 0) {
        badNoise.play();
    $("h1").text("You lose. Your final level was " + level + ". Press any key to start over");
    $("p").text("");
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    }
    
}

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    if (level === 0) {
        nextSequence();
    } else {
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    animatePressed(userChosenColor);
    checkAnswer();
    }
});

$(document).on("keydown", function(){
    if (level === 0) {
        nextSequence();
    }
});










// function showSequence() {
//     for (var i = 0; i < gamePattern.length; i++) {
//         switch (gamePattern[i]) {
//             case "green":
//                 var noiseGreen = new Audio( "sounds/green.mp3" );
//                 noiseGreen.play();    
//               break;
//             case "red":
//                 var noioseRed = new Audio( "sounds/red.mp3" );
//                 noioseRed.play();    
//               break;
//             case "yellow":
//                 var noiseYellow = new Audio( "sounds/yellow.mp3" );
//                 noiseYellow.play();    
//               break;
//             case "blue":
//                 var noiseBlue = new Audio( "sounds/blue.mp3" );
//                 noiseBlue.play();    
//               break;
//             default:
//                 console.log(gamePattern[i]);
//                 break;
//         }
//         $("." + gamePattern[i]).fadeOut();
//         $("." + gamePattern[i]).fadeIn();
        
//     }
// }
