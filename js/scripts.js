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

var wordGenerator = function(){
  var wordList = ["orange", "coffee", "onomatopoeia", "dangerous", "grandiose", "scintillating", "capricious", "whimsical", "pizzas", "demonic"]
  var randomWord = wordList[Math.floor(wordList.length * Math.random())];
  return randomWord;
};

var splitWord = function(randomWord){   //loop ends in orange each time
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
  for (var i=0; i<letters.length; i++) {
    if (letters[i] === userLetter) {
      blanks.splice([i], 1, userLetter);
    };
  };
  return blanks;
};

var youWin = function(blanks) {
  if (/[_]/.test(blanks) === false){
    return "You win!";
  } else {
    return "Sorry, try again";
  };
};
//
$(document).ready(function() {
  var random = wordGenerator();
  var split = splitWord(random);
  var replace = replaceLetter(split);
  $('.blanks').text(replace.join(" "));
  $("form#guess").submit(function(event) {
    event.preventDefault();
    var userLetter = $("input#letter-choice").val();
    var userGuess = guess(userLetter);

    $('.blanks').text(userGuess.join(" "));
  });
});
