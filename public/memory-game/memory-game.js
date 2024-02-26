/*Here it is using jQuery*/

gameSequence = [];
userSequence = [];
started = false;
level = 0;

$("div").click(function () {
  var num = $(this).attr("id").slice(1, 2);
  userSequence.push(Number(num));
  echoTile(this);
  checkAnswer(userSequence.length - 1);
});

$(document).keypress(function () {
  if (!started) {
    $("#jumbotron").text("Level 0");
    newSequence();
    started = true;
  }
});

/*This extra click listener is for mobile users to start the game */
$("body").click(function () {
  if (!started) {
    $("#jumbotron").text("Level 0");
    newSequence();
    started = true;
  }
});

function echoTile(tileDiv) {
  $(tileDiv).addClass("user-highlighted");
  setTimeout(function () {
    $(tileDiv).removeClass("user-highlighted");
  }, 100);
}

function newSequence() {
  userSequence = [];
  level++;
  $("#jumbotron").text("Level " + level);
  var newNum = Math.floor(Math.random() * 9);
  displayTile(newNum);
  gameSequence.push(newNum);
}

function displayTile(tileNum) {
  $("#b" + tileNum).addClass("computer-highlighted");
  setTimeout(function () {
    $("#b" + tileNum).removeClass("computer-highlighted");
  }, 300);
}

function checkAnswer(currentLevel) {
  /*I really don't like this passthrough logic where if the user isn't done (length != length) it just falls though. very hard to decipher*/
  if (userSequence[currentLevel] == gameSequence[currentLevel]) {
    if (userSequence.length === gameSequence.length) {
      setTimeout(function () {
        newSequence();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  $("body").addClass("wrong");
  setTimeout(function () {
    $("body").removeClass("wrong");
  }, 500);
  $("#jumbotron").text("Game over, press any key to try again.");

  gameSequence = [];
  userSequence = [];
  started = false;
  level = 0;
}

/*Without jQuery, for funsies. */

// gameSequence = [];
// userSequence = [];
// started = false;
// level = 0;

// var tileList = document.querySelectorAll("div");

// for (i = 0; i < tileList.length; i++) {
//   tileList[i].addEventListener("click", function () {
//     userSequence.push(Number(this.id.slice(1, 2)));
//     echoTile(this);
//     checkAnswer(userSequence.length - 1);
//   });
// }

// document.addEventListener("keydown", function () {
//   if (!started) {
//     document.querySelector("#jumbotron").textContent = "Level 0";
//     newSequence();
//     started = true;
//   }
// });

// function echoTile(tileDiv) {
//   tileDiv.classList.add("user-highlighted");
//   setTimeout(function () {
//     tileDiv.classList.remove("user-highlighted");
//   }, 100);
// }

// function newSequence() {
//   userSequence = [];
//   level++;
//   document.querySelector("#jumbotron").textContent = "Level " + level;
//   var newNum = Math.floor(Math.random() * 9);
//   displayTile(newNum);
//   gameSequence.push(newNum);
// }

// function displayTile(tileNum) {
//   document.querySelector("#b" + tileNum).classList.add("computer-highlighted");
//   setTimeout(function () {
//     document
//       .querySelector("#b" + tileNum)
//       .classList.remove("computer-highlighted");
//   }, 300);
// }

// function checkAnswer(currentLevel) {
//   console.log(
//     userSequence[currentLevel] + " versus " + gameSequence[currentLevel]
//   );
//   /*I really don't like this passthrough logic where if the user isn't done (length != length) it just falls though. very hard to decipher*/
//   if (userSequence[currentLevel] == gameSequence[currentLevel]) {
//     if (userSequence.length === gameSequence.length) {
//       setTimeout(function () {
//         newSequence();
//       }, 1000);
//     }
//   } else {
//     gameOver();
//   }
// }

// function gameOver() {
//   document.querySelector("body").classList.add("wrong");
//   setTimeout(function () {
//     document.querySelector("body").classList.remove("wrong");
//   }, 500);
//   document.querySelector("#jumbotron").textContent =
//     "Game over, press any key to try again.";

//   gameSequence = [];
//   userSequence = [];
//   started = false;
//   level = 0;
// }
