const caesarShift = require("./cipher");

describe("caesarShift", () => {
  test(" reversing number base on key", () => {
    expect(caesarShift("i love gaming", 7)).toBe("p svcl nhtpun");
  });
});
