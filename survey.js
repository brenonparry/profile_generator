const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {}
rl.question(`What is your name? `, (answer) => {
  answers.name = answer;
  console.log(`Great! Nice to meet you ${answer}!`);
  rl.question(`What's an acitvity you like doing? `, (answer) => {
    answers.activity = answer;
    console.log(`Cool! That's rad you like ${answer}`);
    rl.question(`What kind of music are you into? `, (answer) => {
      answers.music = answer;
      console.log(`${answer}? That's rad!`);
      rl.question(`What's your favourite food? `, (answer) => {
        answers.food = answer;
        console.log(`${answer}! Yum! Us too!`);
        rl.question(`Who's your favourtie superhero? `, (answer) => {
          answers.superhero = answer;
          console.log(`${answer} eh? Good choice :)`);
          rl.question(`What is your favourite sport? `, (answer) => {
            answers.sport = answer;
            console.log(`${answer} is the best!`);
            rl.question(`What is your superpower? `, (answer) => {
              answers.superpower = answer;
              console.log(`Thank you for your valuable feedback: ${answer}`);
              
              console.log(`${answers.name} is a pretty sweet dude! He's a musician and loves ${answers.activity}. He's into all kinds of music, but classic ${answers.music} takes the cake for him. Chances are you'll catching him crushing a ${answers.food}. He's a die hard ${answers.sport} fan and considers ${answers.superhero} his favourite super hero - ya can't beat The Bus! His superpower is ${answers.superpower}, obviously!`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

