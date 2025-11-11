const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      display.value = "";
    } 
    else if (button.id === "equals") {
      try {
        // Evaluate the expression safely
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
      } catch (error) {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
