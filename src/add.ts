/**
 * Function to calculate sum of all postitive numbers passed as string separated by deliminator
 * @param {String} numbers 
 * @returns {Number} 
 */

export const add = function (numbers: string): number {
  // Return if the string is empty
  if (numbers === "") return 0;

  let numStr = numbers;
  let delimiter: RegExp = /,|\n/; // delimiter either comma or new line by default

  // If there is different delimiter
  if (numbers.startsWith("//")) {
    const indexOfNewLine = numbers.indexOf("\n");
    delimiter = new RegExp(`[${numbers[2]}]`); 
    numStr = numbers.slice(indexOfNewLine + 1); 
  }

  // Split the string using the delimiters
  const numArr = numStr.split(delimiter);

  return numArr.reduce((sum, num) => sum + +num, 0);
};