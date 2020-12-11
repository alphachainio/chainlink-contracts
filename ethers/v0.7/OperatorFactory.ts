/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Operator } from "./Operator";

export class OperatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(link: string, overrides?: TransactionOverrides): Promise<Operator> {
    return super.deploy(link, overrides) as Promise<Operator>;
  }
  getDeployTransaction(
    link: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(link, overrides);
  }
  attach(address: string): Operator {
    return super.attach(address) as Operator;
  }
  connect(signer: Signer): OperatorFactory {
    return super.connect(signer) as OperatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Operator {
    return new Contract(address, _abi, signerOrProvider) as Operator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "link",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      }
    ],
    name: "CancelOracleRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "specId",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "requester",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "callbackAddr",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cancelExpiration",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dataVersion",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "OracleRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      }
    ],
    name: "OracleResponse",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "EXPIRY_TIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256"
      },
      {
        internalType: "bytes4",
        name: "callbackFunc",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256"
      }
    ],
    name: "cancelOracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "forward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "callbackAddress",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "data",
        type: "bytes32"
      }
    ],
    name: "fulfillOracleRequest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address"
      }
    ],
    name: "getAuthorizationStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getChainlinkToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "specId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "callbackAddress",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dataVersion",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "oracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address"
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool"
      }
    ],
    name: "setFulfillmentPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60a0604052600160045534801561001557600080fd5b50604051611c44380380611c448339818101604052602081101561003857600080fd5b5051600080546001600160a01b031916331790556001600160601b031960609190911b1660805260805160601c611bb46100906000398061053352806105f95280610efe5280610fe952806119355250611bb46000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806379ba50971161008c578063a4c0ed3611610066578063a4c0ed36146103ca578063d3e9c31414610492578063f2fde38b146104c5578063f3fef3a3146104f8576100ea565b806379ba50971461037f5780637fcd56db146103875780638da5cb5b146103c2576100ea565b80634b602282116100c85780634b6022821461027f57806350188301146102995780636ee4d553146102a15780636fadcf72146102f2576100ea565b8063165d35e1146100ef57806340429946146101205780634ab0d190146101f8575b600080fd5b6100f7610531565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101f6600480360361010081101561013757600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235811692602081013592604082013592606083013516917fffffffff000000000000000000000000000000000000000000000000000000006080820135169160a08201359160c081013591810190610100810160e08201356401000000008111156101b757600080fd5b8201836020820111156101c957600080fd5b803590602001918460018302840111640100000000831117156101eb57600080fd5b509092509050610555565b005b61026b600480360360c081101561020e57600080fd5b5080359060208101359073ffffffffffffffffffffffffffffffffffffffff604082013516907fffffffff000000000000000000000000000000000000000000000000000000006060820135169060808101359060a00135610930565b604080519115158252519081900360200190f35b610287610d15565b60408051918252519081900360200190f35b610287610d1b565b6101f6600480360360808110156102b757600080fd5b508035906020810135907fffffffff000000000000000000000000000000000000000000000000000000006040820135169060600135610d31565b6101f66004803603604081101561030857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561034057600080fd5b82018360208201111561035257600080fd5b8035906020019184600183028401116401000000008311171561037457600080fd5b509092509050610f7f565b6101f6611172565b6101f66004803603604081101561039d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515611274565b6100f7611350565b6101f6600480360360608110156103e057600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561041d57600080fd5b82018360208201111561042f57600080fd5b8035906020019184600183028401116401000000008311171561045157600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061136c945050505050565b61026b600480360360208110156104a857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611688565b6101f6600480360360208110156104db57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166116b3565b6101f66004803603604081101561050e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611834565b7f000000000000000000000000000000000000000000000000000000000000000090565b61055d610531565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105f657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b857f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106b257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f742063616c6c6261636b20746f204c494e4b000000000000000000604482015290519081900360640190fd5b604080517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608d901b166020808301919091526034808301899052835180840390910181526054909201835281519181019190912060008181526002909252919020541561078257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4d75737420757365206120756e69717565204944000000000000000000000000604482015290519081900360640190fd5b60006107904261012c6119fb565b90508a898983604051602001808581526020018473ffffffffffffffffffffffffffffffffffffffff1660601b8152601401837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600401828152602001945050505050604051602081830303815290604052805190602001206002600084815260200190815260200160002081905550897fd8d7ecc4800d25fa53ce0372f13a416d98907a7ef3d8d3bdd79cf4fe75529c658d848e8d8d878d8d8d604051808a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018881526020018773ffffffffffffffffffffffffffffffffffffffff168152602001867bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001858152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039c50909a5050505050505050505050a2505050505050505050505050565b3360009081526003602052604081205460ff16610998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611b55602a913960400191505060405180910390fd5b6000878152600260205260409020548790610a1457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4d757374206861766520612076616c6964207265717565737449640000000000604482015290519081900360640190fd5b6040805160208082018a90527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a901b16828401527fffffffff00000000000000000000000000000000000000000000000000000000881660548301526058808301889052835180840390910181526078909201835281519181019190912060008b81526002909252919020548114610b1057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f506172616d7320646f206e6f74206d6174636820726571756573742049440000604482015290519081900360640190fd5b600454610b1d90896119fb565b600455600089815260026020526040808220829055518a917f9e9bc7616d42c2835d05ae617e508454e63b30b934be8aa932ebc125e0e58a6491a262061a805a1015610bca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4d7573742070726f7669646520636f6e73756d657220656e6f75676820676173604482015290519081900360640190fd5b60408051602481018b9052604480820187905282518083039091018152606490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000008a161781529151815160009373ffffffffffffffffffffffffffffffffffffffff8c169392918291908083835b60208310610c9d57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610c60565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610cff576040519150601f19603f3d011682016040523d82523d6000602084013e610d04565b606091505b50909b9a5050505050505050505050565b61012c81565b600454600090610d2c906001611a76565b905090565b6040805160208082018690523360601b828401527fffffffff00000000000000000000000000000000000000000000000000000000851660548301526058808301859052835180840390910181526078909201835281519181019190912060008781526002909252919020548114610e0a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f506172616d7320646f206e6f74206d6174636820726571756573742049440000604482015290519081900360640190fd5b42821115610e7957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f52657175657374206973206e6f74206578706972656400000000000000000000604482015290519081900360640190fd5b6000858152600260205260408082208290555186917fa7842b9ec549398102c0d91b1b9919b2f20558aefdadf57528a95c6cd3292e9391a2604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101869052905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb9160448083019260209291908290030181600087803b158015610f4657600080fd5b505af1158015610f5a573d6000803e3d6000fd5b505050506040513d6020811015610f7057600080fd5b5051610f7857fe5b5050505050565b3360009081526003602052604090205460ff16610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611b55602a913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561108c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611aee6032913960400191505060405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff168383604051808383808284376040519201945060009350909150508083038183865af19150503d80600081146110f7576040519150601f19603f3d011682016040523d82523d6000602084013e6110fc565b606091505b505090508061116c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f466f727761726465642063616c6c206661696c65642e00000000000000000000604482015290519081900360640190fd5b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146111f857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112fa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b611374610531565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461140d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b805181906044111561148057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e76616c69642072657175657374206c656e67746800000000000000000000604482015290519081900360640190fd5b602082015182907fffffffff0000000000000000000000000000000000000000000000000000000081167f40429946000000000000000000000000000000000000000000000000000000001461153757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4d757374207573652077686974656c69737465642066756e6374696f6e730000604482015290519081900360640190fd5b85602485015284604485015260003073ffffffffffffffffffffffffffffffffffffffff16856040518082805190602001908083835b602083106115aa57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161156d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461160a576040519150601f19603f3d011682016040523d82523d6000602084013e61160f565b606091505b505090508061167f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f556e61626c6520746f2063726561746520726571756573740000000000000000604482015290519081900360640190fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331461173957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81163314156117be57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60005473ffffffffffffffffffffffffffffffffffffffff1633146118ba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b806118c68160016119fb565b6004541015611920576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526035815260200180611b206035913960400191505060405180910390fd5b60045461192d9083611a76565b6004819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156119c457600080fd5b505af11580156119d8573d6000803e3d6000fd5b505050506040513d60208110156119ee57600080fd5b50516119f657fe5b505050565b600082820183811015611a6f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082821115611ae757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe43616e6e6f74207573652023666f727761726420746f2073656e64206d6573736167657320746f204c696e6b20746f6b656e416d6f756e74207265717565737465642069732067726561746572207468616e20776974686472617761626c652062616c616e63654e6f7420616e20617574686f72697a6564206e6f646520746f2066756c66696c6c207265717565737473a26469706673582212208d614d30c5e6c7dd4808ce358ba4206bb72874fd78b997ae0d1060d8eec5362164736f6c63430007000033";
