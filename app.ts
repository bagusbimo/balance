class Solution {
  solve(s: string): boolean {
    let stack: Array<String> = [];
    for (let i = 0; i < s.length; i++) {
      let x: String = s[i];

      if (x == "(") {
        stack.push(x);
        continue;
      }

      if (stack.length == 0) return false;

      let check: String;

      switch (x) {
        case ")":
          check = stack.pop();
          break;
      }
    }
    return stack.length == 0;
  }
}

class Input {
  testInput() {
    const readline = require("readline");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log(`
    ___.   .__                
    \\_ |__ |__| _____   ____  
     | __ \\|  |/     \\ /  _ \\ 
     | \\_\\ \\  |  Y Y  (  <_> )
     |___  /__|__|_|  /\\____/ 
         \\/         \\/        
    `);

    rl.question("Input: ", function (answer: string) {
      let test = new Solution();
      console.log('s = "' + answer + '"')
      if (test.solve(answer)) console.log("Output: True");
      else console.log("Output: False");
      rl.close();
    });
  }
}

let inputs = new Input();
inputs.testInput();
