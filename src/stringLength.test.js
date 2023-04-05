import stringLength from './modules/stringLength.js';

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
