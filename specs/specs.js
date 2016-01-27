describe('randomWord', function() {
  it("generates a random word from an array", function() {
    expect(randomWord("orange")).to.be.a('string');
  });
});
describe('splitWord', function() {
  it("splits up random word into an array of letters", function() {
    expect(splitWord("orange")).to.eql(["o", "r", "a", "n", "g", "e"]);
  });
});
