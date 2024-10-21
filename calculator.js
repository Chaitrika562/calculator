let display = document.getElementById("text-part");
let screendisplay = '';
let specar = ['-', '+', '/', '%', '*'];
let buttons = document.querySelectorAll('.inp-button');
Array.from(buttons).forEach((items) => {
    items.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        // Prevent starting with an operator
        if ((screendisplay.length == 0) && (specar.includes(buttonText))) {
            screendisplay = "";
            display.value = screendisplay;
        }
        // Handle the delete (DEL) button
        else if (buttonText == 'DEL') {
            screendisplay = screendisplay.substring(0, screendisplay.length - 1);
            display.value = screendisplay;
        }
        // Handle the all-clear (AC) button
        else if (buttonText == 'AC') {
            screendisplay = "";
            display.value = screendisplay;
        }
        // Handle the equals (=) button
        else if (buttonText == '=') {
            try {
                // Replace percentages (e.g., 50%) with equivalent division (e.g., 50/100)
                screendisplay = screendisplay.replace(/(\d+)%/g, "($1/100)");
                display.value = eval(screendisplay);
            } catch (error) {
                display.value = "Error";
            }
        }
        // Handle regular input (numbers, operators)
        else {
            screendisplay += buttonText;
            display.value = screendisplay;
        }
    });
});
