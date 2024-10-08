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

  test('#5 should handle new lines or comma between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
    expect(add("1,2\n3")).toBe(6);
    expect(add("\n1,2\n3")).toBe(6);
  });

  test('#6 should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//;\n1;2;3;4")).toBe(10);
    expect(add("//;\n1;2\n3;4")).toBe(10);
    expect(add("//;\n1;2\n3\n4")).toBe(10);
    expect(add("//_\n1_2\n3\n4")).toBe(10);
  });

  test('#7 should throw an error when a negative number is passed', () => {
    expect(() => add("1,-2")).toThrow("Negative numbers not allowed: -2");
  });

  test('#8 should throw an error listing all negative numbers', () => {
    expect(() => add("1,-2,-3,4")).toThrow("Negative numbers not allowed: -2, -3");
  });

});