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
