// const { capitalizeString } = require('./modules/capitalizeString.js');

function capitalizeString(str) {
  if (str.length === 0) {
    return str;
  }
  const firstChar = str.charAt(0).toUpperCase();
  const restOfStr = str.slice(1);
  return firstChar + restOfStr;
}

describe('capitalizeString, function', () => {
  test('capitalizes first letter of string', () => {
    const input = 'hello world';
    const expectedOutput = 'Hello world';
    const result = capitalizeString(input);
    expect(result).toEqual(expectedOutput);
  });

  test('doesn\'t modify string if first letter is already capitalized', () => {
    const input = 'Hello world';
    const expectedOutput = 'Hello world';
    const result = capitalizeString(input);
    expect(result).toEqual(expectedOutput);
  });

  test('returns empty string when input is empty', () => {
    const input = '';
    const expectedOutput = '';
    const result = capitalizeString(input);
    expect(result).toEqual(expectedOutput);
  });
});
