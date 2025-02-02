require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "d5773857b7774540a81f201b7ce2055f";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "1193c06eaf49cd119411c1508ada0b28ea5bdfe142aa08f745ade89110f1d5c9";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/d5773857b7774540a81f201b7ce2055f`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};