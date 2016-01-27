// function WordToBlank(randomWord,letters,blanks){
//   this.randomWord = randomWord;
//   this.letters = letters;
//   this.blanks = blanks;
// }
//
// WordToBlank.prototype.blanks = function(randomWord){
//   var letters = []
//     var words = ["orange", "coffee", "onomatopoeia", "dangerous", "grandiose", "scintillating", "capricious", "whimsical", "pizzas", "demonic"];
//     this.randomWord = words[Math.floor(words.length * Math.random())];
//       for (var i=0; i<this.randomWord.length; i++){
//         letters.push(randomWord[i]);
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

var randomWord = function(){
  var words = ["orange", "coffee", "onomatopoeia", "dangerous", "grandiose", "scintillating", "capricious", "whimsical", "pizzas", "demonic"]
  var randomWords = words[Math.floor(words.length * Math.random())];
  return randomWords;
}

var splitWord = function(randomWords){
  for (var i=0; i<randomWords.length; i++){
    letters.push(randomWords[i]);
  }
    return letters;
}

var replaceLetter = function(splitWord) {
  for (var i=0; i<splitWord.length; i++) {
    blanks.push("_ ");
  }
  return blanks;
}

var guess = function(userLetter){
  for (var i=0; i<letters.length; i++) {
    if (letters[i] === userLetter) {
      blanks.splice([i], 1, userLetter);
    }
  }
  return blanks.join(" ");
}

var youWin = function(blanks) {
  if (/[_]/.test(blanks) === false){
    return "You win!";
  } else {
    return "Sorry, try again";
  }
}

$(document).ready(function() {
  var random = randomWord();
  var split = splitWord(random);
  var replace = replaceLetter(random);
  $('.blanks').append(replace);
  $("form#guess").submit(function(event) {
    debugger;
    event.preventDefault();
    var userLetter = $("input#letter-choice").val();
    var userGuess = guess(userLetter);

    $('.blanks').text(userGuess);
  });
});
