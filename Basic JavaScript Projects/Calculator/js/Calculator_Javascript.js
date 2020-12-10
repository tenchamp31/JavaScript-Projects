const Calculator = {
    Display_value: '0', //show 0 on the screeen
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

function Input_Digit(digit) { //Seeing what happens when a button is clicked
    const { Display_value, Wait_Second_Operand } = Calculator;
 if (Wait_Second_Operand === true) {
     Calculator.Display_value = digit;
     Calculator.Wait_Second_Operand = false;
 }   else {
     Calculator.Display_value = Display_value === '0' ? digit : Display_value + digit;
 }
}

function Input_Decimal(dot) {    //Making sure decimal points are working
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_value.includes(dot)) {
        Calculator.Display_value += dot;
    }
}

function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculator[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)
        result = (result * 1).toString()
        Calculator.Display_value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculator = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() { //Reset Calculator
    Calculator.Display_value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_value;
}

Update_Display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})