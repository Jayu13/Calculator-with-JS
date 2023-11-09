
const buttons = document.querySelectorAll("#buttons");


function handleClick(value) {
    const Display = document.getElementById('display');
    if (value === "=") {
        Display.value = eval(Display.value);
        console.log("buttonPress");
    } else if (value === "C") {
        Display.value = "";
        console.log("buttonPress");
    } else if(value === "DEL"){
        let str = Display.value;
        Display.value = str.slice(0, -1);
    }
    else {
        Display.value += value;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
       handleClick(e.target.textContent)
    });
});
