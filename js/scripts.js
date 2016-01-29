// function WordToBlank(wordGenerator,letters,blanks){
//   this.wordGenerator = wordGenerator;
//   this.letters = letters;
//   this.blanks = blanks;
// }
//
// WordToBlank.prototype.blanks = function(wordGenerator){
//   var letters = []
//     var wordList = ["orange", "coffee", "onomatopoeia", "dangerous", "grandiose", "scintillating", "capricious", "whimsical", "pizzas", "demonic"];
//     this.wordGenerator = wordList[Math.floor(wordList.length * Math.random())];
//       for (var i=0; i<this.wordGenerator.length; i++){
//         letters.push(wordGenerator[i]);
//       }
//         return letters;
//     }
//   }
//
//
//
// // HangMan.prototype.guess = function(userLetter) {
// //   // var blanks = [];
// //   // var letters = [];
// //
// //   for (var i=0; i<this.letters.length; i++) {
// //     if (this.letters[i] === userLetter) {
// //       this.blanks.splice([i], 1, userLetter);
// //     };
// //   };
// //   return this.blanks;
// // };
// //
// //
// //
// //



var blanks = [];
var letters = [];
var clickCount = 0;

var wordGenerator = function(randomWord){
  var wordList = ["orange", "coffee", "onomatopoeia", "dangerous", "grandiose", "scintillating", "capricious", "whimsical", "pizzas", "demonic"]
  var randomWord = wordList[Math.floor(wordList.length * Math.random())];
  return randomWord;
};

var splitWord = function(randomWord){
  for (var i=0; i<randomWord.length; i++){
    letters.push(randomWord[i]);
  };
    return letters;
};

var replaceLetter = function(splitWord) {
  for (var i=0; i<splitWord.length; i++) {
    blanks.push("_");
  };
  return blanks;
};

var guess = function(userLetter){
  var correctGuess = false;

  for (var i=0; i<letters.length; i++) {
    if (letters[i] === userLetter) {
        blanks.splice([i], 1, userLetter);
        correctGuess = true;
    }
  }
  if (correctGuess === false && clickCount < 10) {
    clickCount += 1;
    $("#images").empty().append('<img src ="img/hang' + clickCount + '.gif">')
  }
  else if (correctGuess === false && clickCount >= 10) {
    alert("Sorry, try again!");
    window.location.reload();
  }
  return blanks;
};

var youWin = function(blanks) {
  if (/[_]/.test(blanks) === false){
    return "You win!";
  }
};



$(document).ready(function() {
  var random = wordGenerator();
  var split = splitWord(random);
  var replace = replaceLetter(split);
  var clickCount = 0;
  $("#images").append('<img src ="img/hang0.gif">');

  $('.blanks').text(replace.join(" "));
  $("form#guess").submit(function(event) {

    event.preventDefault();
    var userLetter = $("input#letter-choice").val();
    var userGuess = guess(userLetter);
    var images = $('#images');

    if (userGuess.includes(userLetter)){
     $('.blanks').text(userGuess.join(" "));
    }
    $("input#letter-choice").val("");

    if (/[_]/.test(blanks) === false) {
      $(".winner").show();
    }

  });
});
