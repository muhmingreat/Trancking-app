require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
const {API_URL, PRIVATE_KEY} = process.env

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "sepolia",
  // networks: {
  //   hardhat: {},
    // alfajores: {
    //   url: "https://alfajores-forno.celo-testnet.org",
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC,
    //     path: "m/44'/52752'/0'/0",
    //   },
    //   chainId: 44787,
    // },
  //   sepolia:{
  //     url:API_URL ,
  //     accounts:[PRIVATE_KEY]
  //   }
  // },
};