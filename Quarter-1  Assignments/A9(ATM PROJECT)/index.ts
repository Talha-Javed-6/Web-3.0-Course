import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
//---------------------------------------------------------------------------------------------
//Function of Welcome Message
function welcomeMessage() {
    console.log(chalk.whiteBright.bgMagenta.bold.italic("\t\t\t\t\t\tWELCOME TO ATM MACHINE"));
}
//---------------------------------------------------------------------------------------------
//Login Message Function
function loginMessage() {
    console.log(chalk.whiteBright.bgMagenta.bold.italic("\t\t\t\t\t\tDear Customer, WELCOME BACK!"));
}
//---------------------------------------------------------------------------------------------
//MainMenu Function
async function mainMenu() {
    let userSelection : {mainMenu : string} = await inquirer.prompt({
        type : 'list',
        name : "mainMenu",
        message : chalk.italic.bold.cyan("\t\t\t\t\t\t Please Select any of One-->"),
        choices : [chalk.bold("\t\t\t\t\t\tBalance Inquiry"),chalk.bold("\t\t\t\t\t\tCash Withdrawal"),chalk.bold("\t\t\t\t\t\tMini Account Statement"),chalk.bold("\t\t\t\t\t\tLogout")],
        validate : (select) =>{
            if (!select) {
                return chalk.red("\t\t\t\t\t\tPlease Select an Option");
            }
            return true;
        }
    })
    if (userSelection.mainMenu == chalk.bold("\t\t\t\t\t\tBalance Inquiry")) {
        console.log(chalk.yellowBright(`\t\t\t\t\t\tYour Account Balance is $${accountBalance}`));
        moreTransaction();
    }else if(userSelection.mainMenu == chalk.bold("\t\t\t\t\t\tCash Withdrawal")){
        await cashWithdrawal();
        await moreTransaction();
    }else if (userSelection.mainMenu == chalk.bold("\t\t\t\t\t\tMini Account Statement")){
        console.log(chalk.green("\t\t\t\t\t\tYour Previous Transactions are:"));
        
        for (let i = 0; i < accountStatement.length; i++) {
            console.log(chalk.bgRed("\n\t\t\t\t\t\tYou Withdraw $",accountStatement[i]));   
        }
        await moreTransaction();

    }else if (userSelection.mainMenu == chalk.bold("\t\t\t\t\t\tLogout")) {
        await logout();
        
    }
}
//----------------------------------------------------------------------------------------
//Cash Withdrawal Function
async function cashWithdrawal() {
    let amount:{cashWithdrawal:number} = await inquirer.prompt({
        type : 'input',
        name : 'cashWithdrawal',
        message : chalk.whiteBright.bold("\t\t\t\t\t\tEnter the Amount You Want:"),
        validate : (ans) =>{
            if (!ans || ans==0) {
                return chalk.red("\t\t\t\t\t\tEnter a Valid Amount:"); 
            }else if(ans>accountBalance){
                return chalk.red("\t\t\t\t\t\tYou Have Insufficient Balance For This transaction"); 
            }
            return true;
        } 
    })
    
    console.log(chalk.bold.greenBright("\t\t\t\t\t\t$"),chalk.bold.greenBright(amount.cashWithdrawal),chalk.bold.greenBright("Grab Your Cash"));
    console.log(chalk.blue.bold("\t\t\t\t\t\tYour Transaction Has Been Successfully Completed"));
    accountStatement.push(amount.cashWithdrawal);
    accountBalance=accountBalance-amount.cashWithdrawal;
    console.log(chalk.yellow(`\t\t\t\t\t\tYour Remaining Balance is $${accountBalance}`));
    
}
//---------------------------------------------------------------------------------------------
//Logout Function
async function logout() {
    let logout : {option : string} = await inquirer.prompt({
        name : "option",
        type : 'list',
        choices : [chalk.bold("\t\t\t\t\t\tYes"),chalk.bold("\t\t\t\t\t\tNo")],
        message : chalk.red.italic("\t\t\t\t\t\tDo You Want To Logout?"),
        validate :(ans)=>{
            if (!ans) {
                return chalk.red("\t\t\t\t\t\tSelect An Option");
            }
            return true;
        }
    })
    if (logout.option == chalk.bold("\t\t\t\t\t\tYes")) {
        console.log(chalk.magenta("\t\t\t\t\t\tYou are Logout Successfully"));
        process.exit();
        
        
    } else {
        await mainMenu();
    }
}
//---------------------------------------------------------------------------------------------
//Function More Transaction
async function moreTransaction() {
    let moreTransaction : {choice :string} = await inquirer.prompt({
        name : "choice",
        type : 'list',
        choices : [chalk.bold("\t\t\t\t\t\tYes"),chalk.bold("\t\t\t\t\t\tNo")],
        message : chalk.greenBright("\t\t\t\t\t\tDo You want to Perform any other Transaction?"),
        validate : (ans)=>{
            if (!ans) {
                return chalk.red("\t\t\t\t\t\tPlease Select one Option!");
            }
            return true;
        }
    })
    if (moreTransaction.choice==chalk.bold("\t\t\t\t\t\tYes")) {
        await mainMenu();
    }else{
        process.exit();
    }
}
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Print Welcome Message
welcomeMessage();
//---------------------------------------------------------------------------------------------
//This Block of Code will Get Login Details from User
let loginInfo : {accountNumber:number,accountPassword:number} =await inquirer.prompt([{
    name : 'accountNumber',
    type : 'input',
    message : chalk.white.bold("\t\t\t\t\t\tEnter Your 14 Digit Account No:"),
    validate : (accountNo) =>{
        if (!accountNo || accountNo.length!=14) {
            return chalk.red("\t\t\t\t\t\tPlease Enter Complete 14 Digit Account No:");
        }
        return true;
    }
},
{
    name : 'accountPassword',
    type : 'password',
    message : chalk.white.bold("\t\t\t\t\t\tEnter Your 4 Digit Account Pin:"),
    validate : (accountPin) =>{
        if (!accountPin || accountPin.length!=4) {
            return chalk.red("\t\t\t\t\t\tPlease Enter a valid 4 Digit Pin:");
        }
        return true;
    }

}])
//------------------------------------------------------------------------------------
//Print Login Message
 loginMessage();
//------------------------------------------------------------------------------------
//Initial Balance
var accountBalance : number = 100000;
//------------------------------------------------------------------------------------
//Array to Store Transactions 
var accountStatement :number[]=[];
//------------------------------------------------------------------------------------
//Display Main Menu
console.log(chalk.italic.bold.cyan("\t\t\t\t\t\tMAIN MENU"));

mainMenu();
//------------------------------------------------------------------------------------