/**
 * Function to calculate sum of all postitive numbers passed as string separated by deliminator
 * @param {String} numbers 
 * @returns {Number} 
 */

export const add = function(numbers: string): number {
  if (numbers === "") return 0; // Test case # 1

  let numStr = numbers;
  let deliminator = ',';

  const numArr = numStr.split(deliminator);

  return numArr.reduce((sum, num) => sum + +num, 0); // Test case # 2, 3
};