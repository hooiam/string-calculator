/**
 * Function to calculate sum of all postitive numbers passed as string separated by deliminator
 * @param {String} numbers 
 * @returns {Number} 
 */

export const add = function (numbers: string): number {
  // Return if the string is empty
  if (numbers === "") return 0;

  let numStr: string = numbers;
  let delimiter: RegExp = /,|\n/; // delimiter either comma or new line by default

  // If there is different delimiter
  if (numbers.startsWith("//")) {
    const indexOfNewLine = numbers.indexOf("\n");
    const escapedDelimiter = numbers[2].replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    delimiter =  new RegExp(`[/,|\n|${escapedDelimiter}/]`)
    numStr = numbers.slice(indexOfNewLine + 1); 
  }

  // Split the string using the delimiters
  const numArr: string[] = numStr.split(delimiter);

  const mappedNumArr: number[] = numArr.map(Number);
  const negativeNumbers: number[] = mappedNumArr.filter(n => n < 0);

  if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
  }

  let result = mappedNumArr.reduce((sum, num) => sum + num, 0);

  if(isNaN(result)) throw new Error(`Wrong numbers 😠`); // Edge case validation

  return result;
};
