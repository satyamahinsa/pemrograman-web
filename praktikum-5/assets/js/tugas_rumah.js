document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const output = document.querySelector(".output");
    output.value = 0;
    const buttons = document.querySelectorAll("button");
    const operators = ["%", "*", "/", "-", "+", "."];
    let result = "";

    function calculate() {
        try {
            result = eval(result.replace("%", "/100"));
            output.value = result;
        } catch (error) {
            console.log(error.message);
            output.value = "Error";
            result = "";
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const btnValue = e.target.dataset.value;
            if (btnValue === "=") {
                display.value = "";
                display.value = result + btnValue;
                calculate();
            } else if (btnValue === "AC") {
                display.value = "";
                output.value = 0;
                result = "";
            } else if (btnValue === "DEL") {
                if (output.value.length > 1) {
                    output.value = output.value.slice(0, -1);
                } else {
                    output.value = 0;
                }
                result = result.slice(0, -1);
            } else if (operators.includes(btnValue)) {
                output.value = 0;
                display.value = result + btnValue;
                result += btnValue;
            } else {
                if(output.value == 0) {
                    output.value = btnValue;
                } else {
                    output.value += btnValue;
                }
                result += btnValue;
            }
        });
    });

    document.addEventListener("keydown", function(event) {
        const key = event.key;
        if (key === "Enter") {
            display.value = "";
            display.value = result + "=";
            calculate();
        } else if (key === "Delete") {
            display.value = "";
            output.value = 0;
            result = "";
        } else if (key === "Backspace") {
            if (output.value.length > 1) {
                output.value = output.value.slice(0, -1);
            } else {
                output.value = 0;
            }
            result = result.slice(0, -1);
        } else if(operators.includes(key)) {
            output.value = 0;
            display.value = result + key;
            result += key;
        } else if (key >= "0" && key <= "9") {
            if(output.value == 0) {
                output.value = key;
            } else {
                output.value += key;
            }
            result += key;
        }
    });
});


