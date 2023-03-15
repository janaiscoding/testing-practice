const reversedString = require("./reversedString")

describe('reversedString', () => {
    test(' return the reversed string', () => {
      expect(reversedString("hello")).toBe('olleh');
    });
    test(' return first latter of string capitalized', () => {
      expect(reversedString("boy oh")).toBe('ho yob');
    });
  })