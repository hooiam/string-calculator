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

## Technology Stack
  Following technologies are used
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Webpack](https://webpack.js.org/)
- [AWS S3](https://aws.amazon.com/s3/)
- [AWS Cli](https://aws.amazon.com/cli/)

## Setup Instruction

  ### Prerequisite

  In order to setup and work with this project you have to have following softwares and respective versions installed into your machine

  1. [NodeJS](https://nodejs.org/) >= v20


  ### Steps

  Please follow the below steps to setup the project into your local machine
    
  1. Open terminal or command promt and run the below commands. Please make sure you have [NodeJS](https://nodejs.org/) installed already. Please check [Prerequisite](#prerequisite) for more details
      
      ```
      > git clone https://github.com/hooiam/string-calculator.git
      > cd string-calculator && npm i
      > npm run build
      > npm start      
      ```

  2. Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in any browser of your choice, for user interface.
  3. Enter numbers as many you want separated by comma (,) into input box and hit add to see result. The result will be ∑n where n is the numbers entered separated by comma. To play around with it please visit [Problem Statement](#problem-statement) section for more test cases and constraints
  
## Unit Testing

  ### TDD
  
  The ultimate goal of the application is to build a small part of the application using TDD (Test Driven Development) approach. For more details you may chekcout watch [this](https://www.youtube.com/watch?v=qkblc5WRn-U) video.

  ### Steps

  Please run the following commands from the project root directorty from your terminal or command promt. If you are interested then you can check the test cases and play around with.

  ```
  > npm test
  ```

## Deployment (Optional)

  This is an optional step and you can deploy this app whereever you want. If you want to deploy this application in AWS S3 bucket then you may follow the steps

  ### Prerequisite

  In order to deploy this application to aws s3 bucket you mush have an aws account with necessary permissions. Please check [this](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html) tutorial in case you are new to it.

  ### Steps
  
  1. [Install](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [configure](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html#getting-started-quickstart-new-command) aws cli to your local machine. Depending on your OS find the suitable resource to setup and configure in case you are new to it.

  2. Next step is to configure S3 bucket to host a website. You may follow [this](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html) tutorial in case you are new to it.

  3. If you have created bucket other than `string-calculator` then you may change the `package.json` file and replace your bucket name here `s3://<YOUR_BUCKET_NAME>` in two places under `scripts`. If you kept the same bucket name as me then you don't have to do any changes.

  4. Once all above steps are completed then run the below command to deploy the application to aws s3.

  ``` 
  > npm run deploy
  ```
  5. You can retrive the static s3 website url from your aws s3 console and check it whether all things are working as expected or not. The url typically looks like this `http://<YOUR_BUCKET_NAME>.s3-website.<REGION_NAME>.amazonaws.com/`

## What's Next?

- Find more opportunity to imporve this app. 
- Run this app within a docker container.
- Add some meaningful features for tutorial purpose
- Add some style to user interface to look nice
- Setup a CI/CD pipeline to autometically deploy to aws s3 bucket after certain checks

## Report a bug

  To report a bug please create a issue. I will look into it once I am free and try to resolve it. Please mention following details while posting an issue. 
  
  - Your enviroumnet details like node and npm versions, other dependency versions
  - A way to reproduce the issue. 

## Support Me 💚

  If you found this useful please give me a 🌟 in github. Thank you 👍

Happy Coding 🙂

