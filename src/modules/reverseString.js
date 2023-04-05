function reverseString(string) {
  const myString = string.split('').reverse().join('');
  return myString;
}

export { reverseString as default };

reverseString();