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

  test('#4 should return the sum of multiple comma-separated numbers', () => {
    expect(add("10,20,30,40")).toBe(100);
  });

  test('#5 should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });
});