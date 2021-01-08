'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const CheckedMathTestHelper = contract({
 "contractName": "CheckedMathTestHelper",
 "abi": [
  {
   "inputs": [
    {
     "internalType": "int256",
     "name": "a",
     "type": "int256"
    },
    {
     "internalType": "int256",
     "name": "b",
     "type": "int256"
    }
   ],
   "name": "add",
   "outputs": [
    {
     "internalType": "int256",
     "name": "result",
     "type": "int256"
    },
    {
     "internalType": "bool",
     "name": "ok",
     "type": "bool"
    }
   ],
   "stateMutability": "pure",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "int256",
     "name": "a",
     "type": "int256"
    },
    {
     "internalType": "int256",
     "name": "b",
     "type": "int256"
    }
   ],
   "name": "div",
   "outputs": [
    {
     "internalType": "int256",
     "name": "result",
     "type": "int256"
    },
    {
     "internalType": "bool",
     "name": "ok",
     "type": "bool"
    }
   ],
   "stateMutability": "pure",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "int256",
     "name": "a",
     "type": "int256"
    },
    {
     "internalType": "int256",
     "name": "b",
     "type": "int256"
    }
   ],
   "name": "mul",
   "outputs": [
    {
     "internalType": "int256",
     "name": "result",
     "type": "int256"
    },
    {
     "internalType": "bool",
     "name": "ok",
     "type": "bool"
    }
   ],
   "stateMutability": "pure",
   "type": "function"
  },
  {
   "inputs": [
    {
     "internalType": "int256",
     "name": "a",
     "type": "int256"
    },
    {
     "internalType": "int256",
     "name": "b",
     "type": "int256"
    }
   ],
   "name": "sub",
   "outputs": [
    {
     "internalType": "int256",
     "name": "result",
     "type": "int256"
    },
    {
     "internalType": "bool",
     "name": "ok",
     "type": "bool"
    }
   ],
   "stateMutability": "pure",
   "type": "function"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50610323806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634350913814610051578063a5f3c23b1461008d578063adefc37b146100b0578063bbe93d91146100d3575b600080fd5b6100746004803603604081101561006757600080fd5b50803590602001356100f6565b6040805192835290151560208301528051918290030190f35b610074600480360360408110156100a357600080fd5b5080359060200135610115565b610074600480360360408110156100c657600080fd5b5080359060200135610128565b610074600480360360408110156100e957600080fd5b508035906020013561013b565b600080610109848463ffffffff61014e16565b915091505b9250929050565b600080610109848463ffffffff6101d716565b600080610109848463ffffffff61021f16565b600080610109848463ffffffff61025b16565b600080826101615750600090508061010e565b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1480156101af57507f800000000000000000000000000000000000000000000000000000000000000084145b156101bf5750600090508061010e565b60008385816101ca57fe5b0595600195509350505050565b6000808383018184128015906101ec57508481125b8061020257506000841280156102025750848112155b1561021457506000915081905061010e565b946001945092505050565b60008082840381841280156102345750848113155b8061020257506000841215801561020257508481131561021457506000915081905061010e565b6000808361026f575060009050600161010e565b837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1480156102bd57507f800000000000000000000000000000000000000000000000000000000000000083145b156102cd5750600090508061010e565b838302838582816102da57fe5b051461021457506000915081905061010e56fea264697066735822122017b8a3f1bf80d3a1134521f915619b9a9059364f8cf2a727672c18c9b5adc70064736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x323 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x43509138 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0xA5F3C23B EQ PUSH2 0x8D JUMPI DUP1 PUSH4 0xADEFC37B EQ PUSH2 0xB0 JUMPI DUP1 PUSH4 0xBBE93D91 EQ PUSH2 0xD3 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x67 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0xF6 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP3 DUP4 MSTORE SWAP1 ISZERO ISZERO PUSH1 0x20 DUP4 ADD MSTORE DUP1 MLOAD SWAP2 DUP3 SWAP1 SUB ADD SWAP1 RETURN JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xA3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x115 JUMP JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xC6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x128 JUMP JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x13B JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x14E AND JUMP JUMPDEST SWAP2 POP SWAP2 POP JUMPDEST SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x1D7 AND JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x21F AND JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x25B AND JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 PUSH2 0x161 JUMPI POP PUSH1 0x0 SWAP1 POP DUP1 PUSH2 0x10E JUMP JUMPDEST DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF EQ DUP1 ISZERO PUSH2 0x1AF JUMPI POP PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 DUP5 EQ JUMPDEST ISZERO PUSH2 0x1BF JUMPI POP PUSH1 0x0 SWAP1 POP DUP1 PUSH2 0x10E JUMP JUMPDEST PUSH1 0x0 DUP4 DUP6 DUP2 PUSH2 0x1CA JUMPI INVALID JUMPDEST SDIV SWAP6 PUSH1 0x1 SWAP6 POP SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 DUP4 ADD DUP2 DUP5 SLT DUP1 ISZERO SWAP1 PUSH2 0x1EC JUMPI POP DUP5 DUP2 SLT JUMPDEST DUP1 PUSH2 0x202 JUMPI POP PUSH1 0x0 DUP5 SLT DUP1 ISZERO PUSH2 0x202 JUMPI POP DUP5 DUP2 SLT ISZERO JUMPDEST ISZERO PUSH2 0x214 JUMPI POP PUSH1 0x0 SWAP2 POP DUP2 SWAP1 POP PUSH2 0x10E JUMP JUMPDEST SWAP5 PUSH1 0x1 SWAP5 POP SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP5 SUB DUP2 DUP5 SLT DUP1 ISZERO PUSH2 0x234 JUMPI POP DUP5 DUP2 SGT ISZERO JUMPDEST DUP1 PUSH2 0x202 JUMPI POP PUSH1 0x0 DUP5 SLT ISZERO DUP1 ISZERO PUSH2 0x202 JUMPI POP DUP5 DUP2 SGT ISZERO PUSH2 0x214 JUMPI POP PUSH1 0x0 SWAP2 POP DUP2 SWAP1 POP PUSH2 0x10E JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 PUSH2 0x26F JUMPI POP PUSH1 0x0 SWAP1 POP PUSH1 0x1 PUSH2 0x10E JUMP JUMPDEST DUP4 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF EQ DUP1 ISZERO PUSH2 0x2BD JUMPI POP PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 DUP4 EQ JUMPDEST ISZERO PUSH2 0x2CD JUMPI POP PUSH1 0x0 SWAP1 POP DUP1 PUSH2 0x10E JUMP JUMPDEST DUP4 DUP4 MUL DUP4 DUP6 DUP3 DUP2 PUSH2 0x2DA JUMPI INVALID JUMPDEST SDIV EQ PUSH2 0x214 JUMPI POP PUSH1 0x0 SWAP2 POP DUP2 SWAP1 POP PUSH2 0x10E JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 OR 0xB8 LOG3 CALL 0xBF DUP1 0xD3 LOG1 SGT GASLIMIT 0x21 0xF9 ISZERO PUSH2 0x9B9A SWAP1 MSIZE CALLDATASIZE 0x4F DUP13 CALLCODE 0xA7 0x27 PUSH8 0x2C18C9B5ADC70064 PUSH20 0x6F6C634300060600330000000000000000000000 ",
   "sourceMap": "55:563:43:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;55:563:43;;;;;;;"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80634350913814610051578063a5f3c23b1461008d578063adefc37b146100b0578063bbe93d91146100d3575b600080fd5b6100746004803603604081101561006757600080fd5b50803590602001356100f6565b6040805192835290151560208301528051918290030190f35b610074600480360360408110156100a357600080fd5b5080359060200135610115565b610074600480360360408110156100c657600080fd5b5080359060200135610128565b610074600480360360408110156100e957600080fd5b508035906020013561013b565b600080610109848463ffffffff61014e16565b915091505b9250929050565b600080610109848463ffffffff6101d716565b600080610109848463ffffffff61021f16565b600080610109848463ffffffff61025b16565b600080826101615750600090508061010e565b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1480156101af57507f800000000000000000000000000000000000000000000000000000000000000084145b156101bf5750600090508061010e565b60008385816101ca57fe5b0595600195509350505050565b6000808383018184128015906101ec57508481125b8061020257506000841280156102025750848112155b1561021457506000915081905061010e565b946001945092505050565b60008082840381841280156102345750848113155b8061020257506000841215801561020257508481131561021457506000915081905061010e565b6000808361026f575060009050600161010e565b837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1480156102bd57507f800000000000000000000000000000000000000000000000000000000000000083145b156102cd5750600090508061010e565b838302838582816102da57fe5b051461021457506000915081905061010e56fea264697066735822122017b8a3f1bf80d3a1134521f915619b9a9059364f8cf2a727672c18c9b5adc70064736f6c63430006060033",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x43509138 EQ PUSH2 0x51 JUMPI DUP1 PUSH4 0xA5F3C23B EQ PUSH2 0x8D JUMPI DUP1 PUSH4 0xADEFC37B EQ PUSH2 0xB0 JUMPI DUP1 PUSH4 0xBBE93D91 EQ PUSH2 0xD3 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x67 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0xF6 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP3 DUP4 MSTORE SWAP1 ISZERO ISZERO PUSH1 0x20 DUP4 ADD MSTORE DUP1 MLOAD SWAP2 DUP3 SWAP1 SUB ADD SWAP1 RETURN JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xA3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x115 JUMP JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xC6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x128 JUMP JUMPDEST PUSH2 0x74 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0xE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x13B JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x14E AND JUMP JUMPDEST SWAP2 POP SWAP2 POP JUMPDEST SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x1D7 AND JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x21F AND JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x109 DUP5 DUP5 PUSH4 0xFFFFFFFF PUSH2 0x25B AND JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 PUSH2 0x161 JUMPI POP PUSH1 0x0 SWAP1 POP DUP1 PUSH2 0x10E JUMP JUMPDEST DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF EQ DUP1 ISZERO PUSH2 0x1AF JUMPI POP PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 DUP5 EQ JUMPDEST ISZERO PUSH2 0x1BF JUMPI POP PUSH1 0x0 SWAP1 POP DUP1 PUSH2 0x10E JUMP JUMPDEST PUSH1 0x0 DUP4 DUP6 DUP2 PUSH2 0x1CA JUMPI INVALID JUMPDEST SDIV SWAP6 PUSH1 0x1 SWAP6 POP SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 DUP4 ADD DUP2 DUP5 SLT DUP1 ISZERO SWAP1 PUSH2 0x1EC JUMPI POP DUP5 DUP2 SLT JUMPDEST DUP1 PUSH2 0x202 JUMPI POP PUSH1 0x0 DUP5 SLT DUP1 ISZERO PUSH2 0x202 JUMPI POP DUP5 DUP2 SLT ISZERO JUMPDEST ISZERO PUSH2 0x214 JUMPI POP PUSH1 0x0 SWAP2 POP DUP2 SWAP1 POP PUSH2 0x10E JUMP JUMPDEST SWAP5 PUSH1 0x1 SWAP5 POP SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP5 SUB DUP2 DUP5 SLT DUP1 ISZERO PUSH2 0x234 JUMPI POP DUP5 DUP2 SGT ISZERO JUMPDEST DUP1 PUSH2 0x202 JUMPI POP PUSH1 0x0 DUP5 SLT ISZERO DUP1 ISZERO PUSH2 0x202 JUMPI POP DUP5 DUP2 SGT ISZERO PUSH2 0x214 JUMPI POP PUSH1 0x0 SWAP2 POP DUP2 SWAP1 POP PUSH2 0x10E JUMP JUMPDEST PUSH1 0x0 DUP1 DUP4 PUSH2 0x26F JUMPI POP PUSH1 0x0 SWAP1 POP PUSH1 0x1 PUSH2 0x10E JUMP JUMPDEST DUP4 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF EQ DUP1 ISZERO PUSH2 0x2BD JUMPI POP PUSH32 0x8000000000000000000000000000000000000000000000000000000000000000 DUP4 EQ JUMPDEST ISZERO PUSH2 0x2CD JUMPI POP PUSH1 0x0 SWAP1 POP DUP1 PUSH2 0x10E JUMP JUMPDEST DUP4 DUP4 MUL DUP4 DUP6 DUP3 DUP2 PUSH2 0x2DA JUMPI INVALID JUMPDEST SDIV EQ PUSH2 0x214 JUMPI POP PUSH1 0x0 SWAP2 POP DUP2 SWAP1 POP PUSH2 0x10E JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 OR 0xB8 LOG3 CALL 0xBF DUP1 0xD3 LOG1 SGT GASLIMIT 0x21 0xF9 ISZERO PUSH2 0x9B9A SWAP1 MSIZE CALLDATASIZE 0x4F DUP13 CALLCODE 0xA7 0x27 PUSH8 0x2C18C9B5ADC70064 PUSH20 0x6F6C634300060600330000000000000000000000 ",
   "sourceMap": "55:563:43:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;55:563:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;495:120:43;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;495:120:43;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;123;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;123:120:43;;;;;;;:::i;247:::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;247:120:43;;;;;;;:::i;371:::-;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;-1:-1;371:120:43;;;;;;;:::i;495:::-;563:13;;602:8;:1;608;602:8;:5;:8;:::i;:::-;595:15;;;;495:120;;;;;;:::o;123:::-;191:13;;230:8;:1;236;230:8;:5;:8;:::i;247:120::-;315:13;;354:8;:1;360;354:8;:5;:8;:::i;371:120::-;439:13;;478:8;:1;484;478:8;:5;:8;:::i;1596:247:5:-;1676:13;;1712:6;1708:29;;-1:-1:-1;1728:1:5;;-1:-1:-1;1728:1:5;1720:17;;1708:29;1747:1;1752:2;1747:7;:26;;;;;272:7;1758:1;:15;1747:26;1743:49;;;-1:-1:-1;1783:1:5;;-1:-1:-1;1783:1:5;1775:17;;1743:49;1799:8;1814:1;1810;:5;;;;;;;1833:4;;-1:-1:-1;1596:247:5;-1:-1:-1;;;;1596:247:5:o;374:223::-;454:13;;497:5;;;513:6;;;;;;:15;;;527:1;523;:5;513:15;512:38;;;;538:1;534;:5;:15;;;;;548:1;543;:6;;534:15;508:61;;;-1:-1:-1;560:1:5;;-1:-1:-1;560:1:5;;-1:-1:-1;552:17:5;;508:61;584:1;587:4;;-1:-1:-1;374:223:5;-1:-1:-1;;;374:223:5:o;691:::-;771:13;;814:5;;;830;;;:15;;;;;844:1;839;:6;;830:15;829:38;;;;856:1;851;:6;;:15;;;;;865:1;861;:5;825:61;;;-1:-1:-1;877:1:5;;-1:-1:-1;877:1:5;;-1:-1:-1;869:17:5;;1010:494;1090:13;;1332:6;1328:28;;-1:-1:-1;1348:1:5;;-1:-1:-1;1351:4:5;1340:16;;1328:28;1366:1;1371:2;1366:7;:26;;;;;272:7;1377:1;:15;1366:26;1362:49;;;-1:-1:-1;1402:1:5;;-1:-1:-1;1402:1:5;1394:17;;1362:49;1429:5;;;1433:1;1429;:5;:1;1446:5;;;;;:10;1440:36;;-1:-1:-1;1467:1:5;;-1:-1:-1;1467:1:5;;-1:-1:-1;1459:17:5;"
  },
  "methodIdentifiers": {
   "add(int256,int256)": "a5f3c23b",
   "div(int256,int256)": "43509138",
   "mul(int256,int256)": "bbe93d91",
   "sub(int256,int256)": "adefc37b"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"a\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"b\",\"type\":\"int256\"}],\"name\":\"add\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"result\",\"type\":\"int256\"},{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"a\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"b\",\"type\":\"int256\"}],\"name\":\"div\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"result\",\"type\":\"int256\"},{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"a\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"b\",\"type\":\"int256\"}],\"name\":\"mul\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"result\",\"type\":\"int256\"},{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"a\",\"type\":\"int256\"},{\"internalType\":\"int256\",\"name\":\"b\",\"type\":\"int256\"}],\"name\":\"sub\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"result\",\"type\":\"int256\"},{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/tests/CheckedMathTestHelper.sol\":\"CheckedMathTestHelper\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/CheckedMath.sol\":{\"keccak256\":\"0x439a63c43130864169cc5c31b5a812389cc1d9ebf292cdf64f47c4d059d3c48e\",\"urls\":[\"bzz-raw://a18a2d559d2bb124030cbb399d54b214a977d7c94e6f53cc7b2b0e4d1c89c8c1\",\"dweb:/ipfs/QmWvLUVcBfhDeXSKBgVnFRkZetP4XfRxvWVNq4VXf9Bghw\"]},\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/tests/CheckedMathTestHelper.sol\":{\"keccak256\":\"0xa4391fba9d96999fc0945ea136116fd81c6098bab81925184fe5c329ea4922ce\",\"urls\":[\"bzz-raw://4e2236f0780134de36deea8068e90c1509dab38a1a24d02e9423f78bc7434256\",\"dweb:/ipfs/QmYtBoFYPBRSddR74gXmYFWkHWmujuknkrXKg1tL9gUtDD\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('CheckedMathTestHelper.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.CheckedMathTestHelper = CheckedMathTestHelper
