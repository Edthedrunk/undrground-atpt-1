const { HardHat } = require('lucide-react');

import('hardhat/config').HardhatUserConfig 


require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Define network configurations here if needed
  },
};
