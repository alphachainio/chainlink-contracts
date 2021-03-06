'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const PointerInterface = contract({
 "contractName": "PointerInterface",
 "abi": [
  {
   "inputs": [],
   "name": "getAddress",
   "outputs": [
    {
     "internalType": "address",
     "name": "",
     "type": "address"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x",
   "opcodes": "",
   "sourceMap": ""
  },
  "methodIdentifiers": {
   "getAddress()": "38cc4831"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/PointerInterface.sol\":\"PointerInterface\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/PointerInterface.sol\":{\"keccak256\":\"0x6458d82762d4f13c020a13efdbd9bf14500e147df707184a693aea91449c2f4f\",\"urls\":[\"bzz-raw://735950f3a544fc6ef2db92405597169bfb5fdb9df83623c0d99fd3d85de8690d\",\"dweb:/ipfs/QmZHxb5Qr7Kw9DHAg4VwEADue9ffNyyhbiyEZ15A5mANUN\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('PointerInterface.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.PointerInterface = PointerInterface
