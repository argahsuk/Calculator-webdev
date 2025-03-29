let display = document.querySelector("input");
let buttons = document.querySelectorAll(".grid-item");

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let value = button.textContent;
        if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (value === "C") {
            display.value = display.value.slice(0, -1); 
        } else if (value === "AC") {
            display.value = "";
        } else {
            display.value += value; 
        }
    });
});