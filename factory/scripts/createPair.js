module.exports = async () => {
  try {
    const { TOKENS, WETH } = require('../constant');
    const WaleSwapFactory = artifacts.require('WaleSwapFactory');

    if (process.argv[5] !== 'ropsten') {
      throw new Error('Invalid Network ID!');
    }

    if (process.argv[6] !== 'dai') {
      throw new Error('Invalid token name!');
    }

    if (process.argv[7] !== 'eth') {
      throw new Error('Invalid eth name!');
    }

    let tokenAddress = TOKENS[process.argv[6]].address;
    const uniswapV2FactoryInstance = await WaleSwapFactory.deployed();

    let receipt = await uniswapV2FactoryInstance.createPair(tokenAddress, WETH);

    console.log(receipt);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
