describe('queenAttack', function() {
  it("is false if the coordinates are not horizontally, vertically, or diagonally in line with each other", function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it("is true if the queen is in the same row as the other piece", function() {
    expect(queenAttack([1, 1], [1, 2])).to.equal(true);
  });

  it("is true if the queen is in the same column as the other piece", function() {
    expect(queenAttack([6, 2], [1, 2])).to.equal(true);
  });

  it("is true if the other piece is diagonally down-right from the queen", function() {
    expect(queenAttack([3, 5], [5, 7])).to.equal(true);
  });

  it("is true if the other piece is diagonally up-left from the queen", function() {
    expect(queenAttack([3, 5], [2, 4])).to.equal(true);
  });
});
