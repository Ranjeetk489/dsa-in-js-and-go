//Program to check whether brackets are balanced or not.

const isPaired = (input) => {
    const stack = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '{' || input[i] == '(' || input[i] == '[') {
            stack.push(input.charAt(i))
        }
        else {
            /* if(stack.length == 0) return false */
            let val = stack.at(-1);
            if ((val == "{" && input[i] === "}") || (val == "[" && input[i] === "]") || (val == "(" && input[i] === ")")) {
                stack.pop();
            }

            else {
                const sarr = ["}", ")", "]"]
 
                if (sarr.indexOf(input[i]) !== -1)
                    return false
            }
        }
    }
    if (stack.length == 0) return true
    return false;

}


console.log(isPaired('\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'));