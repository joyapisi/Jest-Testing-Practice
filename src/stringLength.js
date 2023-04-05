function stringLength(string) {
  if (string.length < 1) {
    throw new Error('String must be at least 1 character long');
  }
  if (string.length > 10) {
    throw new Error('String cannot be longer than 10 characters');
  }
  return string.length;
}

const myString = '';
const myStringLength = stringLength(myString);

return myStringLength;