// should count characters of a string and return length of the string
function stringLength(string) {
  return string.length;
}
describe('stringLength', () => {
  test('returns the correct length of a given string', () => {
    const myString = 'Hello, world!';
    const expectedLength = 13;
    const actualLength = stringLength(myString);
    expect(actualLength).toBe(expectedLength);
  });

  test('returns 0 for an empty string', () => {
    const emptyString = '';
    const expectedLength = 0;
    const actualLength = stringLength(emptyString);
    expect(actualLength).toBe(expectedLength);
  });
});