function calc(a,b,expression){
    let ans=expression(a,b)
    return ans;
}

function sum (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}



//implementation of calculator


console.log(calc(5,4,multiply))

