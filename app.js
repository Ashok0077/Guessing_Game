let maximum = parseInt(prompt("Enter maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("Enter valid maximum number"));
}

let target = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Enter your first guess! or press q to quit !!");
// value enter in prompt box consider as a string

let attempt = 1;
while (parseInt(guess) !== target) {
  if (guess === "q") {
    break;
  }

  guess = parseInt(guess);

  if (guess < target) {
    guess = prompt("Too low, Enter higher number or q to quit !!");
    attempt++;
  } else if (guess > target) {
    guess = prompt("Too high, Enter higher number or q to quit !!");
    attempt++;
  } else {
    guess = prompt("Invalid guess, please enter a number or q to quit !!");
  }
}

if (guess === "q") {
  console.log("YOU QUIT!!");
} else {
  console.log("CONGRATS, YOU WIN !!");
  console.log(`It took you ${attempt} guesses`);
}
