require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remind minor guess kitchen suspect sorry'; 
let testAccounts = [
"0xae27999774c718ca6f7dc3e449fcad69a8e820a7fe45021aa227203acd2dd5c5",
"0xaa8734d2c31e735fde8a9b31d833d71d2a459cca78b9b9ef69d2134dea1666fb",
"0x2ac2a4da4f6205194f4a81bf829bd7bfdf46fd981a42d9fb8fed6a9d6ba7b997",
"0x4878a2c7054a28816310d5376c4dc3c2ab8cf782a915e4d23db08e188ad22f65",
"0x488e49b569d9fca2ea2c92213142c8daaab0247c710df7f589fd369c226afd3a",
"0x9ad1fe7eab7e8fad96cba8df70ed0a90e4136b4a4bbd3e0ed7ebe8d5c3df0fc8",
"0x86f49cbf9ca84936adfdecf8951704a37193f668cbb66417d0bc5614665bc17c",
"0x58abe69e40731430d76cbe6864da207feccb4e927266b0b412fc350eca037ca0",
"0xb3262f8f9aa962507a1eaa5daee5ea6ac43370936e1bb9a24adacd9e361dce8f",
"0x90f878ace715898a3ad710f5e8c9f6e0ab5bfde24fff04e3030ec4216794ed11"
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
            version: '^0.8.0'
        }
    }
};

