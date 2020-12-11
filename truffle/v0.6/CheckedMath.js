'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const CheckedMath = contract({
 "contractName": "CheckedMath",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220645f8f586747a67280a20852a7a009f859177c5afcd53111c0a1d9f509cb52b864736f6c63430006060033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH5 0x5F8F586747 0xA6 PUSH19 0x80A20852A7A009F859177C5AFCD53111C0A1D9 CREATE2 MULMOD 0xCB MSTORE 0xB8 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "209:1637:5:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220645f8f586747a67280a20852a7a009f859177c5afcd53111c0a1d9f509cb52b864736f6c63430006060033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH5 0x5F8F586747 0xA6 PUSH19 0x80A20852A7A009F859177C5AFCD53111C0A1D9 CREATE2 MULMOD 0xCB MSTORE 0xB8 PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "209:1637:5:-:0;;;;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/CheckedMath.sol\":\"CheckedMath\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/CheckedMath.sol\":{\"keccak256\":\"0x439a63c43130864169cc5c31b5a812389cc1d9ebf292cdf64f47c4d059d3c48e\",\"urls\":[\"bzz-raw://a18a2d559d2bb124030cbb399d54b214a977d7c94e6f53cc7b2b0e4d1c89c8c1\",\"dweb:/ipfs/QmWvLUVcBfhDeXSKBgVnFRkZetP4XfRxvWVNq4VXf9Bghw\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('CheckedMath.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.CheckedMath = CheckedMath
