// import stringLength from './modules/stringLength.js';
function stringLength(string) {
  if (string.length < 1) {
    throw new Error('String must be at least 1 character long');
  }
  if (string.length > 10) {
    throw new Error('String cannot be longer than 10 characters');
  }

  const myString = string.length;
  return myString;
}

describe('stringLength function', () => {
  test('returns the length of a string', () => {
    expect(stringLength('hello')).toEqual(5);
  });

  test('throws an error if string is too short', () => {
    expect(() => stringLength('')).toThrowError('String must be at least 1 character long');
  });

  test('throws an error if string is too long', () => {
    expect(() => stringLength('thisstringistoolong')).toThrowError('String cannot be longer than 10 characters');
  });
});
