// describe('WordToBlank', function() {
//   it("selects random word, splits up letters into an array, and creates blank spaces for each letter", function(){
//   var testWordToBlank = new WordToBlank('string', ["o", "r", "a", "n", "g", "e"], ["_", "_", "_", "_", "_", "_"]);
//   expect(testWordToBlank.wordList).to.be.a('string');
//   expect(testWordToBlank.letters).to.eql(["o", "r", "a", "n", "g", "e"]);
//   expect(testWordToBlank.blanks).to.eql(["_", "_", "_", "_", "_", "_"]);
//   });
//
//   it("creates prototype for the functions above", function() {
//     var testWordToBlank = new WordToBlank('string', ["o", "r", "a", "n", "g", "e"], ["_", "_", "_", "_", "_", "_"]);
//     expect(testWordToBlank.newWord()).to.eql(["_", "_", "_", "_", "_", "_"]);
//   });
// });








describe('wordGenerator', function() {
  it("generates a random word from an array", function() {
    expect(wordGenerator("orange")).to.be.a('string');
  });
});

describe('splitWord', function() {
  it("splits up random word into an array of letters", function() {
    expect(splitWord("orange")).to.eql(["o", "r", "a", "n", "g", "e"]);
  });
});

describe('replaceLetter', function() {
  it("replaces each character in string with an underscore", function() {
    expect(replaceLetter(["o", "r", "a", "n", "g", "e"])).to.eql(["_", "_", "_", "_", "_", "_"]);
  });
});

describe('guess', function() {
  it("reveals letter in blanks if guessed correctly", function() {
    expect(guess("g")).to.eql(["_", "_", "_", "_", "g", "_"]);
  });
});

describe('youWin', function() {
  it("alerts user that they have won if all blanks are filled within correct amount of guesses", function() {
    expect(youWin(["o", "r", "a", "n", "_", "e"])).to.equal("Sorry, try again");
  });
});
