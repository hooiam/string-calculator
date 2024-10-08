/**
 * Function to calculate sum of all postitive numbers passed as string separated by deliminator
 * @param {String} numbers 
 * @returns {Number} 
 */

export const add = function(numbers: string): number {
  // Return if the string is empty
  if (numbers === "") return 0;

  let numStr = numbers;
  let deliminator = /,|\n/;

  // Split the string using the delimiters
  const numArr = numStr.split(deliminator);

  return numArr.reduce((sum, num) => sum + +num, 0);
};