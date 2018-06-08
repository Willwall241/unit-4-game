//Give random number to match
//Set random numbers to emeralds
//When user clicks emerald number is added to current number
//If user matches random number they win, if current number goes over random then they lose
//Add wins to win score
//Add loses to lose score
//Declare variables

var ranNum = 0;
var currNum = 0;
var gameOn = true;
var win = 0;
var lose = 0;


var blue = {
  color: 'blue',
  value: 0,
  image: function () {
    $('#blueImage').attr('src', 'assets/images/Blue_emerald.png');
  }
};

var green = {
  color: 'green',
  value: 0,
  image: function () {
    $('#greenImage').attr('src', 'assets/images/Green_emerald.png');
  }
};

var red = {
  color: 'red',
  value: 0,
  image: function () {
    $('#redImage').attr('src', 'assets/images/Red_emerald.png');
  }
};

var yellow = {
  color: 'yellow',
  value: 0,
  image: function () {
    $('#yellowImage').attr('src', 'assets/images/Yellow_emerald.png');
  }
};



// Function to initialize game
function startGame() {

  gameOn = true;
  currNum = 0;
  $("#currentNumber").text(currNum);
  $("#condition").text("");

  ranNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  $("#randomNumber").text(ranNum);
  blue.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  green.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  red.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  yellow.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  blue.image();
  green.image();
  red.image();
  yellow.image();

};

//Add value of Blue Emerald to current number when user clicks Blue Emerald
$("#blueEmerald").on("click", function () {

  if (currNum < ranNum && gameOn) {
    currNum = blue.value + currNum;
    $("#currentNumber").text(currNum);
    checkWin();
  }

});

//Add value of Green Emerald to current number when user clicks Green Emerald
$("#greenEmerald").on("click", function () {

  if (currNum < ranNum && gameOn) {
    currNum = green.value + currNum;
    $("#currentNumber").text(currNum);
    checkWin();
  }

});

//Add value of Red Emerald to current number when user clicks Red Emerald
$("#redEmerald").on("click", function () {

  if (currNum < ranNum && gameOn) {
    currNum = red.value + currNum;
    $("#currentNumber").text(currNum);
    checkWin();
  }

});

//Add value of Yellow Emerald to current number when user clicks Yellow Emerald
$("#yellowEmerald").on("click", function () {

  if (currNum < ranNum && gameOn) {
    currNum = yellow.value + currNum;
    $("#currentNumber").text(currNum);
    checkWin();
  }

});

//Check to see if user wins or loses
function checkWin() {

  if (currNum === ranNum) {
    $("#condition").text("You Win!");
    win++;
    gameOn = false;
    $("#wins").text(win);

  }
  else if (currNum > ranNum) {
    $("#condition").text("You Lose!");
    lose++;
    gamOn = false;
    $("#loses").text(lose);
  }


};

//Reset game when user clicks reset button
$("#reset").on("click", function () {
  startGame();

});



startGame();

