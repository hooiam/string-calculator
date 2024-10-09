/**
 * User interface handler for user input for string numbers and display result
 */
import { add } from "./add";

const form = document.getElementById("handler") as HTMLFormElement;
const numbers = document.getElementById("numbers") as HTMLInputElement;
const showResult = document.getElementById("showResult") as HTMLOutputElement;

form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    showResult.textContent = add(numbers.value).toString();
    numbers.value = "";
  } catch (error: any) {
    numbers.value = "";
    showResult.textContent = error.message.toString();
  }  
});