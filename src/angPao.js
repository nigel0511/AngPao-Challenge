const readline = require('readline');
const allocateRandomAngPao = require('../src/allocation.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main(){
  rl.question('How much do Ang Bao do you want to send? ', function (amount) {
    rl.question('How many people do you want to send to? ', function (numberOfReceiver) {
        if(amount >= 1 && numberOfReceiver > 0){
          let result = allocateRandomAngPao(amount, numberOfReceiver)
          console.log('Random amounts of',numberOfReceiver, 'AngPao:')
          console.log(result)
          rl.close();
        } else {
          console.log('Please enter positive integers.')
          main()
        }

    });
});
}

main()
  
rl.on('close', function () {
process.exit(0);
});