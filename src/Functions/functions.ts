// Basic simple function
const addition1 = (param1:number, param2:number) => {
    console.log(param1 + param2);
};

// Function with returning value
const addition2 = (param1:number, param2:number):number => param1 + param2;

// Function with optional parameters
const addition3 = (param1:number, param2?:number):number => param1 + param2;

// Function with rest parameters
const addition4 = (...param:number[]):number => {
    let final:number = 0;
    for(let num of param)
        final += num 

    return final;
};

// Function with defualt parameters
const addition5 = (param1:number = 0, param2:number = 0):number => param1 + param2;


// Call functions
addition1(1, 1);
console.log(addition2(2, 2));
console.log(addition2(8, 2));
console.log(addition4(8, 2, 4, 6, 7, 8, 12, 342, 543, 32, 23));
console.log(addition5());