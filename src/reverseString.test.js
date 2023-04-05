import reverseString from './modules/reverseString.js';

describe('reverseString function', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses an empty string', () => {
    expect(reverseString('')).toEqual('');
  });
});