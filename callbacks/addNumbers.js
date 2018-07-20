const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft > 0) {
    let num;
    reader.question('Please enter a number: ', (res) => {
      num = parseInt(res);
      sum += num;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });

  }
  if(numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// function testReader() {
//   reader.question('Input something: ', res => {
//     console.log(res);
//     reader.close();
//   });
// }
//
// testReader();
