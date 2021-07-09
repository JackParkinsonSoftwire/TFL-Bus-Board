const readline = require("readline");

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export default function getInput(message:string){
    return new Promise<string>((resolve) => {
        rl.question(message, (userInput: string) => {
            resolve(userInput);
        });
    });
}