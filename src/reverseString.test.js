// import reverseString from './modules/reverseString.js';
function reverseString(string) {
  const myString = string.split('').reverse().join('');
  return myString;
}

describe('reverseString function', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses an empty string', () => {
    expect(reverseString('')).toEqual('');
  });
});