const eth = require("ethereumjs-util");

const OrdinalSwapPair = require("../build/contracts/OrdinalSwapPair.json");

// Hash of the bytecode is fixed. Calculated with eth.keccak256():
var bytecodeHash = eth.keccak256(OrdinalSwapPair.bytecode).toString("hex");

// var bytecodeHash = eth.keccak256(`${bytecode}`).toString("hex");

console.log(bytecodeHash);
