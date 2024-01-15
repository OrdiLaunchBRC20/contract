require("dotenv").config();
const WaleSwapFactory = artifacts.require("WaleSwapFactory");

module.exports = async function(deployer) {
  try {
    await deployer.deploy(WaleSwapFactory, process.env.OPERATOR_ADDRESS, {
      gas: 3000000,
      from: process.env.OPERATOR_ADDRESS,
      chainId: +process.env.CHAIN_ID,
    });
  } catch (err) {
    console.log(err);
  }
};
