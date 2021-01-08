'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const WithdrawalInterface = contract({
 "contractName": "WithdrawalInterface",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "address",
     "name": "recipient",
     "type": "address"
    },
    {
     "internalType": "uint256",
     "name": "amount",
     "type": "uint256"
    }
   ],
   "name": "withdraw",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "withdrawable",
   "outputs": [
    {
     "internalType": "uint256",
     "name": "",
     "type": "uint256"
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
   "withdraw(address,uint256)": "f3fef3a3",
   "withdrawable()": "50188301"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawable\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"withdraw(address,uint256)\":{\"params\":{\"amount\":\"is the amount of LINK to send\",\"recipient\":\"is the address to send the LINK to\"}}}},\"userdoc\":{\"methods\":{\"withdraw(address,uint256)\":{\"notice\":\"transfer LINK held by the contract belonging to msg.sender to another address\"},\"withdrawable()\":{\"notice\":\"query the available amount of LINK to withdraw by msg.sender\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/WithdrawalInterface.sol\":\"WithdrawalInterface\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/interfaces/WithdrawalInterface.sol\":{\"keccak256\":\"0xd5aa4e79f8e49d7b2e5e16cb5c152a63efafbdaa24f34749fa3793df6b683068\",\"urls\":[\"bzz-raw://f0a63a2382f746e74bc918d0a3a4db3eaacc9e3ae54a2a350563b6c9e4859b35\",\"dweb:/ipfs/QmT7Yut3Abdif6JRbzw4QmpbfU1nPjHHiLvC1v5qcBT2Va\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('WithdrawalInterface.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.WithdrawalInterface = WithdrawalInterface
