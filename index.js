const prompt = require("prompt-sync")({ sigint: true });

//const age = prompt("How old are you? ");
//console.log(`You are ${age} years old.`);

//Coins=[25,10,5,1]
amount=prompt("Amount: ");
Result=0;
remainder = 0;
Count=0;
i=0;

//if(amount >= 25){

   iteration1 = Math.floor(amount / 25);
   answer1 = amount % 25;
   //console.log(Division1);
   //console.log(answer1);

//else if(amount >= 10  && amount <= 25){

    iteration2 = Math.floor(answer1 / 10);
   answer2 = answer1 % 10;

//else if(amount >= 5 && amount <= 10){

    iteration3 = Math.floor(answer2 / 5);
   answer3 = answer2 % 10;

//else if(amount >= 1 && amount <=5){

    iteration4 = Math.floor(answer3 / 1);
   answer4 = answer3 % 5;
console.log(`25-Coins:${ iteration1} ` + ` 10-Coins:${ iteration2} ` + ` 5-Coins:${ iteration3} ` + ` 1-Coins:${ iteration4}`);
