const eth = require("ethereumjs-util");

const WaleSwapPair = require("../build/contracts/WaleSwapPair.json");

// Hash of the bytecode is fixed. Calculated with eth.keccak256():
var bytecodeHash = eth.keccak256(WaleSwapPair.bytecode).toString("hex");

// var bytecodeHash = eth.keccak256(`${bytecode}`).toString("hex");

console.log(bytecodeHash);
