//const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

module.exports = middle;
