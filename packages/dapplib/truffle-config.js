require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember around inflict drink fox type'; 
let testAccounts = [
"0x209222a34ed45fe4349bb90a63c6399f253babc0cfa6f7b2029a5b75f9204e78",
"0x243153b0e0ed12a89149e112d978eed60f000b7434567f3dfbebfc1103bed5fc",
"0xfc5dec9bd7cd541ad7a689cb26a640377c3c9f5bc536c9f1755d6a01f4f76cff",
"0x6ad236d6b3f77210dbaf7cc1ee131bd6473e813a3ab270ce6f71bb081f3063cb",
"0x200861e9798355e4e9725e5e0287b4b990d8ae44e8ce1c501a2636f6d35020c0",
"0x0b7c68338ce631a56e83325651609baa993b2b42c5a1ecc5e11fb2cb1612847b",
"0xc94b638ba6b5a9e6d00bb33b155ec935b51c46df490a2508cf2a8baa5ade01d0",
"0xb5509a8a9612758862946b1b114019b5f0433093faf4834e532d54f4943122e5",
"0x086f87fd472c8f052a5604ea20e4d7e02b14189f10907d771203711de03cec96",
"0x07ae7ce1c1d89f2093e03c9f34956e6405fc19d9b7559d9217c036da8974632c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
