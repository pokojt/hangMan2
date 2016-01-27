var blanks = [];

var randomWord = function(){
  var words = ["orange", "coffee", "onomatopoeia", "dangerous", "grandiose", "scintillating", "capricious", "whimsical", "pizzas", "demonic"]
  var randomWords = words[Math.floor(words.length * Math.random())];
  return randomWords;
}

var splitWord = function(randomWords){

  var letters = [];
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

var correctGuess = function(letter){
  for (var i=0; i<splitWord.length; i++) {
    if (splitWord[i] === letter);
      blanks.splice(replaceLetter[i], 1, letter);
  }
  return blanks;
}
