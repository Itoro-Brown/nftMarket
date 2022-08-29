require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// const _RPC_URL = process.env.RPC_URL;
const _PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      accounts: [_PRIVATE_KEY],
      url: "https://eth-goerli.g.alchemy.com/v2/LCWM_Ah1sPcId--hh1Gx1qL2ap9-PakF",
    },
  },
};
