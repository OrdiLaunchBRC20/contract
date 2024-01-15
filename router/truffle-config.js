require("dotenv").config();

var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    develop: {
      host: "localhost",
      port: 7545, // Match default network 'ganache'
      network_id: 5777,
      gas: 6721975, // Truffle default development block gas limit
      gasPrice: 200000000000,
      solc: {
        version: "0.6.12",
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    base: {
      networkCheckTimeout: 100000,
      provider: function() {
        return new HDWalletProvider(
          process.env.OPERATOR_PRIVATE_KEY,
          process.env.RPC
        );
      },
      network_id: 8453,
      gas: 6721975,
      gasPrice: 100000000,
    },
    goerli: {
      networkCheckTimeout: 100000,
      provider: function() {
        return new HDWalletProvider(
          process.env.OPERATOR_PRIVATE_KEY,
          process.env.RPC
        );
      },
      network_id: 84531,
      gas: 6721975,
      gasPrice: 1100000000,
    },
  },
  rpc: {
    host: "localhost",
    post: 8080,
  },
  mocha: {
    useColors: true,
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
