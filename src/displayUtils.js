require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('==========================================='.cyan);
  console.log('===       Sonic BOT BY TIMPLEXZ         ==='.cyan);
  console.log('===   Created by JAWA PRIDE AIRDROP     ==='.cyan);
  console.log('===  https://t.me/AirdropJP_JawaPride   ==='.cyan);
  console.log('==========================================='.cyan);
  console.log();
}

module.exports = {
  displayHeader,
};
