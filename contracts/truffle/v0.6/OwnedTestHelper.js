'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const OwnedTestHelper = contract({
 "contractName": "OwnedTestHelper",
 "abi": [
  {
   "anonymous": false,
   "inputs": [],
   "name": "Here",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "address",
     "name": "from",
     "type": "address"
    },
    {
     "indexed": true,
     "internalType": "address",
     "name": "to",
     "type": "address"
    }
   ],
   "name": "OwnershipTransferRequested",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "address",
     "name": "from",
     "type": "address"
    },
    {
     "indexed": true,
     "internalType": "address",
     "name": "to",
     "type": "address"
    }
   ],
   "name": "OwnershipTransferred",
   "type": "event"
  },
  {
   "inputs": [],
   "name": "acceptOwnership",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "modifierOnlyOwner",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [],
   "name": "owner",
   "outputs": [
    {
     "internalType": "address",
     "name": "",
     "type": "address"
    }
   ],
   "stateMutability": "view",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "address",
     "name": "_to",
     "type": "address"
    }
   ],
   "name": "transferOwnership",
   "outputs": [],
   "stateMutability": "nonpayable",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x6080604052600080546001600160a01b031916331790556103c8806100256000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806379ba5097146100515780638da5cb5b1461005b578063d1f4537e1461008c578063f2fde38b14610094575b600080fd5b6100596100c7565b005b6100636101c9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100596101e5565b610059600480360360208110156100aa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610296565b60015473ffffffffffffffffffffffffffffffffffffffff16331461014d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461026b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b6040517ffe92bbc330eb12cd316e909741296a7fbde0684922f2564d9a9021f08959374090600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a35056fea26469706673582212203815f79eb7a52e49d2a8123370558aaad8875000b4108717d3a3092aa7d6074464736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND CALLER OR SWAP1 SSTORE PUSH2 0x3C8 DUP1 PUSH2 0x25 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x79BA5097 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x5B JUMPI DUP1 PUSH4 0xD1F4537E EQ PUSH2 0x8C JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x94 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x59 PUSH2 0xC7 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x63 PUSH2 0x1C9 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x59 PUSH2 0x1E5 JUMP JUMPDEST PUSH2 0x59 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0xAA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x296 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ PUSH2 0x14D JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4D7573742062652070726F706F736564206F776E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD CALLER PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000000000000000000000 DUP1 DUP4 AND DUP3 OR DUP5 SSTORE PUSH1 0x1 DUP1 SLOAD SWAP1 SWAP2 AND SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND SWAP3 SWAP1 SWAP2 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 LOG3 POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ PUSH2 0x26B JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4F6E6C792063616C6C61626C65206279206F776E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH32 0xFE92BBC330EB12CD316E909741296A7FBDE0684922F2564D9A9021F089593740 SWAP1 PUSH1 0x0 SWAP1 LOG1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ PUSH2 0x31C JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4F6E6C792063616C6C61626C65206279206F776E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 DUP1 SLOAD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000000000000000000000 AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 AND SWAP2 DUP3 OR SWAP1 SWAP3 SSTORE PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 MLOAD SWAP3 SWAP4 AND SWAP2 PUSH32 0xED8889F560326EB138920D842192F0EB3DD22B4F139C87A2C57538E05BAE1278 SWAP2 SWAP1 LOG3 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CODESIZE ISZERO 0xF7 SWAP15 0xB7 0xA5 0x2E 0x49 0xD2 0xA8 SLT CALLER PUSH17 0x558AAAD8875000B4108717D3A3092AA7D6 SMOD DIFFICULTY PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "49:139:53:-:0;;;406:5:13;:18;;-1:-1:-1;;;;;;406:18:13;414:10;406:18;;;49:139:53;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806379ba5097146100515780638da5cb5b1461005b578063d1f4537e1461008c578063f2fde38b14610094575b600080fd5b6100596100c7565b005b6100636101c9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100596101e5565b610059600480360360208110156100aa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610296565b60015473ffffffffffffffffffffffffffffffffffffffff16331461014d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461026b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b6040517ffe92bbc330eb12cd316e909741296a7fbde0684922f2564d9a9021f08959374090600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a35056fea26469706673582212203815f79eb7a52e49d2a8123370558aaad8875000b4108717d3a3092aa7d6074464736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x79BA5097 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x5B JUMPI DUP1 PUSH4 0xD1F4537E EQ PUSH2 0x8C JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x94 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x59 PUSH2 0xC7 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x63 PUSH2 0x1C9 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x59 PUSH2 0x1E5 JUMP JUMPDEST PUSH2 0x59 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0xAA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x296 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ PUSH2 0x14D JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4D7573742062652070726F706F736564206F776E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD CALLER PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000000000000000000000 DUP1 DUP4 AND DUP3 OR DUP5 SSTORE PUSH1 0x1 DUP1 SLOAD SWAP1 SWAP2 AND SWAP1 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND SWAP3 SWAP1 SWAP2 DUP4 SWAP2 PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 SWAP2 LOG3 POP JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ PUSH2 0x26B JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4F6E6C792063616C6C61626C65206279206F776E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x40 MLOAD PUSH32 0xFE92BBC330EB12CD316E909741296A7FBDE0684922F2564D9A9021F089593740 SWAP1 PUSH1 0x0 SWAP1 LOG1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER EQ PUSH2 0x31C JUMPI PUSH1 0x40 DUP1 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4F6E6C792063616C6C61626C65206279206F776E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE SWAP1 MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x64 ADD SWAP1 REVERT JUMPDEST PUSH1 0x1 DUP1 SLOAD PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFF0000000000000000000000000000000000000000 AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 AND SWAP2 DUP3 OR SWAP1 SWAP3 SSTORE PUSH1 0x0 DUP1 SLOAD PUSH1 0x40 MLOAD SWAP3 SWAP4 AND SWAP2 PUSH32 0xED8889F560326EB138920D842192F0EB3DD22B4F139C87A2C57538E05BAE1278 SWAP2 SWAP1 LOG3 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 CODESIZE ISZERO 0xF7 SWAP15 0xB7 0xA5 0x2E 0x49 0xD2 0xA8 SLT CALLER PUSH17 0x558AAAD8875000B4108717D3A3092AA7D6 SMOD DIFFICULTY PUSH5 0x736F6C6343 STOP MOD MOD STOP CALLER ",
   "sourceMap": "49:139:53:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;49:139:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;774:254:13;;;:::i;:::-;;147:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;105:80:53;;;:::i;535:150:13:-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;535:150:13;;;;:::i;774:254::-;844:12;;;;830:10;:26;822:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;890:16;909:5;;928:10;920:18;;;;;;;;-1:-1:-1;944:25:13;;;;;;;981:42;;909:5;;;;;928:10;;909:5;;981:42;;;774:254;:::o;147:20::-;;;;;;:::o;105:80:53:-;1162:5:13;;;;1148:10;:19;1140:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;174:6:53::1;::::0;::::1;::::0;;;::::1;105:80::o:0;535:150:13:-;1162:5;;;;1148:10;:19;1140:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;612:12:::1;:18:::0;;;::::1;;::::0;;::::1;::::0;;::::1;::::0;;;-1:-1:-1;669:5:13;;642:38:::1;::::0;612:18;;669:5:::1;::::0;642:38:::1;::::0;-1:-1:-1;642:38:13::1;535:150:::0;:::o"
  },
  "methodIdentifiers": {
   "acceptOwnership()": "79ba5097",
   "modifierOnlyOwner()": "d1f4537e",
   "owner()": "8da5cb5b",
   "transferOwnership(address)": "f2fde38b"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[],\"name\":\"Here\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"modifierOnlyOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"acceptOwnership()\":{\"details\":\"Allows an ownership transfer to be completed by the recipient.\"},\"transferOwnership(address)\":{\"details\":\"Allows an owner to begin transferring ownership to a new address, pending.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/tests/OwnedTestHelper.sol\":\"OwnedTestHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/Owned.sol\":{\"keccak256\":\"0x7d65c5d747bb2ff62d36b0081e042b8d6f7da704a777498e43502ab375b5d8fa\",\"urls\":[\"bzz-raw://0a6d3981c94e70621a87e2578365e62371d4ac55079771498873f8ab1a515664\",\"dweb:/ipfs/QmYbVyVMVeDbXJvoXnStkmKAS2LRVJn8VmzcXic19qUVB3\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/tests/OwnedTestHelper.sol\":{\"keccak256\":\"0x24953256b6e5b48927e3d7fb7af8030da9b190015fe33457c925735775f2745b\",\"urls\":[\"bzz-raw://65b4e1e5e2f6096c1d3afdae380f6fa39223729d2c3146dc95adab5ce651c004\",\"dweb:/ipfs/QmXtpFtxAAKHCnH9CJNaZE1bgH4sVhLCDA5z5Q4GcKNKKX\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('OwnedTestHelper.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.OwnedTestHelper = OwnedTestHelper
