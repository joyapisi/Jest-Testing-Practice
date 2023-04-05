function capitalizeString(str) {
  if (str.length === 0) {
    return str;
  }
  const firstChar = str.charAt(0).toUpperCase();
  const restOfStr = str.slice(1);
  return firstChar + restOfStr;
}

export { capitalizeString as default };

capitalizeString();