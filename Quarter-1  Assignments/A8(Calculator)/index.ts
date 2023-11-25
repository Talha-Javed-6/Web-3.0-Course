import inquirer from "inquirer";
import chalk from "chalk";
//Function More Transaction
async function moreCalculation() {
    let moreOperation : {choice :string} = await inquirer.prompt({
        name : "choice",
        type : 'list',
        choices : [chalk.bold("\t\t\t\t\t\tYes"),chalk.bold("\t\t\t\t\t\tNo")],
        message : chalk.greenBright("\t\t\t\t\t\tDo You want to Perform any other Operation?"),
        validate : (ans)=>{
            if (!ans) {
                return chalk.red("\t\t\t\t\t\tPlease Select one Option!");
            }
            return true;
        }
    })
    if (moreOperation.choice==chalk.bold("\t\t\t\t\t\tYes")) {
        await operation();
    }else{
        process.exit();
    }
}
//Function For Addition
async function Addition() {
    let input:{number1:string,number2:string}=await inquirer.prompt([{
        name : 'number1',
        type : 'input',
        message :"\t\t\t\t\t\tEnter 1st Number:"
    },
{
    name : 'number2',
    type : 'input',
    message :"\t\t\t\t\t\tEnter 2nd Number:"
}])
let sum =parseInt(input.number1)+parseInt(input.number2);
console.log(`\t\t\t\t\t\tThe Sum of ${input.number1} and ${input.number2} is ${sum}.`);

}
//Function For Subtraction
async function Subtraction() {
    let input:{number1:string,number2:string}=await inquirer.prompt([{
        name : 'number1',
        type : 'input',
        message :"\t\t\t\t\t\tEnter 1st Number:"
    },
{
    name : 'number2',
    type : 'input',
    message :"\t\t\t\t\t\tEnter 2nd Number:"
}])
let subtract =parseInt(input.number1)-parseInt(input.number2);
console.log(`\t\t\t\t\t\tThe Subtraction of ${input.number1} and ${input.number2} is ${subtract}.`);

}
//Function For Multiplication
async function Multiplication() {
    let input:{number1:string,number2:string}=await inquirer.prompt([{
        name : 'number1',
        type : 'input',
        message :"\t\t\t\t\t\tEnter 1st Number:"
    },
{
    name : 'number2',
    type : 'input',
    message :"\t\t\t\t\t\tEnter 2nd Number:"
}])
let multiply =parseInt(input.number1)*parseInt(input.number2);
console.log(`\t\t\t\t\t\tThe Multiplication of ${input.number1} and ${input.number2} is ${multiply}.`);

}
async function Modulus() {
    let input:{number1:string,number2:string}=await inquirer.prompt([{
        name : 'number1',
        type : 'input',
        message :"\t\t\t\t\t\tEnter 1st Number(Greater Than 2nd):"
    },
{
    name : 'number2',
    type : 'input',
    message :"\t\t\t\t\t\tEnter 2nd Number(Less Than 1st):"
}])
let modulus =parseInt(input.number1)%parseInt(input.number2);
console.log(`\t\t\t\t\t\tThe Modulus of ${input.number1} and ${input.number2} is ${modulus}.`);

}
//Function For Division
async function Division() {
    let input:{number1:string,number2:string}=await inquirer.prompt([{
        name : 'number1',
        type : 'input',
        message :"\t\t\t\t\t\tEnter 1st Number:"
    },
{
    name : 'number2',
    type : 'input',
    message :"\t\t\t\t\t\tEnter 2nd Number:"
}])
let division =parseInt(input.number1)/parseInt(input.number2);
console.log(`\t\t\t\t\t\tThe Division of ${input.number1} and ${input.number2} is ${division}.`);

}
//Function For Division
async function Exponent() {
    let input:{base:string,power:string}=await inquirer.prompt([{
        name : 'base',
        type : 'input',
        message :"\t\t\t\t\t\tEnter Base Number:"
    },
{
    name : 'power',
    type : 'input',
    message :"\t\t\t\t\t\tEnter Power of Base:"
}])
let exponent =parseInt(input.power)**parseInt(input.base);
console.log(`\t\t\t\t\t\tThe Result of ${input.power} Power ${input.base} is ${exponent}.`);

}
// //Function For Exponent
// async function Exponent() {
//     let input:{base:string,power:string}=await inquirer.prompt([{
//         name : 'base',
//         type : 'input',
//         message :"\t\t\t\t\t\tEnter Base Number:"
//     },
// {
//     name : 'power',
//     type : 'input',
//     message :"\t\t\t\t\t\tEnter Power of Base:"
// }])
// let baseInInt=parseInt(input.base);
// let powerInInt=parseInt(input.power);
// let result:number=1;
// for (let index = 1; index <=powerInInt ; index++) {
//     result=result*baseInInt;
    
// }
// console.log(`\t\t\t\t\t\tThe Result of ${baseInInt} power ${powerInInt} is ${result}`);

// }


//Function For Main Menu
async function operation() {
    var result :{operator:string}=await inquirer.prompt({
        name : 'operator',
        type : 'list',
        message : "\t\t\t\t\t\tWhat Operation You Want To Perform:",
        choices : ["\t\t\t\t\t\tAddition (+)","\t\t\t\t\t\tSubtraction (-)","\t\t\t\t\t\tMultiplication (*)","\t\t\t\t\t\tModulus (%)","\t\t\t\t\t\tDivision (/)","\t\t\t\t\t\tExponent (^)"]
    })
    switch (result.operator) {
        case "\t\t\t\t\t\tAddition (+)":
            await Addition();
            await moreCalculation();
            break;
        case "\t\t\t\t\t\tSubtraction (-)":
            await Subtraction();
            await moreCalculation();
            break;
        case "\t\t\t\t\t\tMultiplication (*)":
            await Multiplication();
            await moreCalculation();
            break;
        case "\t\t\t\t\t\tModulus (%)":
            await Modulus();
            await moreCalculation();
            break;
        case "\t\t\t\t\t\tDivision (/)":
            await Division();
            await moreCalculation();
            break;
        case "\t\t\t\t\t\tExponent (^)":
            await Exponent();
            await moreCalculation();
            break;
    
        default:
            break;
    }
}
operation();