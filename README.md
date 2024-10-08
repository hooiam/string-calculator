# String Calculator
Simple calculator to add numbers which are passed as comma (default) separated string. The mission is to develop this function using TDD approach. The test cases covers a wide range of inputs and respective outputs.

## Problem Statement

### Tips:
 - Start with the simplest test case of an empty string and move to one and two
numbers.
 - Remember to solve problems in a simple manner so that you force yourself to write
tests you did not think about.
 - Remember to refactor after each passing test.

### Steps:
1. Create a simple String calculator with a method signature like this:

    ```
      function add(numbers: string): number {
        // implementation goes here
      }
    ```
    - Input: A string of comma-separated numbers
    - Output: An integer, sum of the numbers
    
    #### Examples:

      1. Input: `“”`, Output: `0`
      2. Input: `“1”`, Output: `1`
      3. Input: `“1,5”`, Output: `6`

2. Allow the add method to handle any amount of numbers.

3. Allow the add method to handle new lines between numbers (instead of commas).
  
    For example, `"1\n2,3"` should return `6`

4. Support different delimiters:
    - To change the delimiter, the beginning of the string will contain a separate
      line that looks like this: `"//[delimiter]\n[numbers...]"`.  

      For example, `"//;\n1;2"` where the delimiter is `";"` should return `3`.

5. Exception handling: 
    - Calling add with a negative number will throw an exception: `"negative numbers not allowed <negative_number>"`.
    - If there are multiple negative numbers, show all of them in the exception message, separated by commas.

6. Frontend Specific Task: 
    - Create a user interface for the String Calculator:
    - Provide an input box for users to enter the numbers.
    - Include a button to trigger the calculation.
    - Display the result on the page dynamically.
    - Extra points for deploying the application to a public URL.
