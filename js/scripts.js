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
  // var blanks = [];
  for (var i=0; i<splitWord.length; i++) {
    blanks.push("_");
  }
  return blanks;
}

var correctGuess = function(userLetter){
  for (var i=0; i<letters.length; i++) {
    if (letters[i] === userLetter) {
      blanks.splice([i], 1, userLetter);
    }
  }
  return blanks;
}
