import { add } from '../add';

describe('String Calculator', () => {

  test('#1 should return 0 for an empty string', () => {
      expect(add("")).toBe(0);
  });

  test('#2 should return the number itself when there is only one number', () => {
      expect(add("1")).toBe(1);
  });

  test('#3 should return the sum of two comma-separated numbers', () => {
      expect(add("1,5")).toBe(6);
  });
  
});