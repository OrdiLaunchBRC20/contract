require("dotenv").config();
const WaleSwapRouter = artifacts.require("WaleSwapRouter");
// const { WETH } = require("../constant");

module.exports = async function(deployer) {
  try {
    await deployer.deploy(
      WaleSwapRouter,
      "0x47b5EEFbB33c23e930e02232210cbBE4BE210734" /* Replace your factory address at here */,
      "0x4200000000000000000000000000000000000006",
      {
        gas: 4000000,
        from: process.env.OPERATOR_ADDRESS,
        chainId: +process.env.CHAIN_ID,
      }
    );
  } catch (err) {
    console.log(err);
  }
};
