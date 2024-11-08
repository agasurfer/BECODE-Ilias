
// IF ELSE IF

function calculator(a, ope, b) {
    if (ope === "+") { 
        console.log(a + b);
    } else if (ope === "-") {
        console.log(a - b);
    } else if (ope === "*") {
        console.log(a * b);
    } else if (ope === "/") {
        if (b === 0) {
            console.log("You can't divide by 0");
            } else {
                console.log(a / b);
            }
    } 
}

calculator(2, "+", 2);
calculator(2, "*", 2);
calculator(4, "/", 2);
calculator(4, "/", 0);

// SWITCH

function calculator(a, ope, b) {
    switch (ope) {
        case "+" :
            console.log(a + b);
            break;
        case "-" :
            console.log(a - b);
            break;
        case "*" :
            console.log(a * b);
            break;
        case "/" :
            if (b === 0) {
                console.log("You can't divide by 0");
                } else {
                console.log(a / b);
                }
            break;
        }
}

calculator(2, "+", 2);
calculator(2, "*", 2);
calculator(4, "/", 2);
calculator(4, "/", 0);