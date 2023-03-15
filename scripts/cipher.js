function caesarShift(str, shift) {
  if (shift < 0) {
    return caesarShift(str, shift + 26);
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += c;
  }
  return result;
}

module.exports = caesarShift;
