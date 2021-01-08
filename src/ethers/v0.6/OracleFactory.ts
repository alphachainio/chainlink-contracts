/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Oracle } from "./Oracle";

export class OracleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_link: string, overrides?: TransactionOverrides): Promise<Oracle> {
    return super.deploy(_link, overrides) as Promise<Oracle>;
  }
  getDeployTransaction(
    _link: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, overrides);
  }
  attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  connect(signer: Signer): OracleFactory {
    return super.connect(signer) as OracleFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_link",
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
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256"
      },
      {
        internalType: "bytes4",
        name: "_callbackFunc",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "_expiration",
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
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_callbackAddress",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "_callbackFunctionId",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_data",
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
        name: "_node",
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
    inputs: [],
    name: "isOwner",
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
        name: "_sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_specId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_callbackAddress",
        type: "address"
      },
      {
        internalType: "bytes4",
        name: "_callbackFunctionId",
        type: "bytes4"
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_dataVersion",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
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
        name: "_node",
        type: "address"
      },
      {
        internalType: "bool",
        name: "_allowed",
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
        name: "newOwner",
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
        name: "_recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
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
  "0x6080604052600160045534801561001557600080fd5b5060405161197a38038061197a8339818101604052602081101561003857600080fd5b5051600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b0319166001600160a01b03929092169190911790556118c8806100b26000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80637fcd56db1161008c578063a4c0ed3611610066578063a4c0ed3614610332578063d3e9c314146103fa578063f2fde38b1461042d578063f3fef3a314610460576100df565b80637fcd56db146102e75780638da5cb5b146103225780638f32d59b1461032a576100df565b80634b602282116100bd5780634b60228214610274578063501883011461028e5780636ee4d55314610296576100df565b8063165d35e1146100e457806340429946146101155780634ab0d190146101ed575b600080fd5b6100ec610499565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101eb600480360361010081101561012c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235811692602081013592604082013592606083013516917fffffffff000000000000000000000000000000000000000000000000000000006080820135169160a08201359160c081013591810190610100810160e08201356401000000008111156101ac57600080fd5b8201836020820111156101be57600080fd5b803590602001918460018302840111640100000000831117156101e057600080fd5b5090925090506104b5565b005b610260600480360360c081101561020357600080fd5b5080359060208101359073ffffffffffffffffffffffffffffffffffffffff604082013516907fffffffff000000000000000000000000000000000000000000000000000000006060820135169060808101359060a001356108e6565b604080519115158252519081900360200190f35b61027c610ce5565b60408051918252519081900360200190f35b61027c610ceb565b6101eb600480360360808110156102ac57600080fd5b508035906020810135907fffffffff000000000000000000000000000000000000000000000000000000006040820135169060600135610d79565b6101eb600480360360408110156102fd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610fac565b6100ec611075565b610260611091565b6101eb6004803603606081101561034857600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561038557600080fd5b82018360208201111561039757600080fd5b803590602001918460018302840111640100000000831117156103b957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110af945050505050565b6102606004803603602081101561041057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166113cb565b6101eb6004803603602081101561044357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166113f6565b6101eb6004803603604081101561047657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611475565b60015473ffffffffffffffffffffffffffffffffffffffff1690565b6104bd610499565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461055657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b600154869073ffffffffffffffffffffffffffffffffffffffff808316911614156105e257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f43616e6e6f742063616c6c6261636b20746f204c494e4b000000000000000000604482015290519081900360640190fd5b604080517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608d901b16602080830191909152603480830189905283518084039091018152605490920183528151918101919091206000818152600290925291902054156106b257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4d75737420757365206120756e69717565204944000000000000000000000000604482015290519081900360640190fd5b60006106c64261012c63ffffffff61162216565b90508a898983604051602001808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600401828152602001945050505050604051602081830303815290604052805190602001206002600084815260200190815260200160002081905550897fd8d7ecc4800d25fa53ce0372f13a416d98907a7ef3d8d3bdd79cf4fe75529c658d848e8d8d878d8d8d604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018881526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001867bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001858152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039c50909a5050505050505050505050a2505050505050505050505050565b3360009081526003602052604081205460ff16806109365750610907611075565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61098b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611869602a913960400191505060405180910390fd5b6000878152600260205260409020548790610a0757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4d757374206861766520612076616c6964207265717565737449640000000000604482015290519081900360640190fd5b6040805160208082018a90527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a901b16828401527fffffffff00000000000000000000000000000000000000000000000000000000881660548301526058808301889052835180840390910181526078909201835281519181019190912060008b81526002909252919020548114610b0357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f506172616d7320646f206e6f74206d6174636820726571756573742049440000604482015290519081900360640190fd5b600454610b16908963ffffffff61162216565b60045560008981526002602052604081205562061a805a1015610b9a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4d7573742070726f7669646520636f6e73756d657220656e6f75676820676173604482015290519081900360640190fd5b60408051602481018b9052604480820187905282518083039091018152606490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000008a161781529151815160009373ffffffffffffffffffffffffffffffffffffffff8c169392918291908083835b60208310610c6d57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610c30565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ccf576040519150601f19603f3d011682016040523d82523d6000602084013e610cd4565b606091505b50909b9a5050505050505050505050565b61012c81565b6000610cf5611091565b610d6057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600454610d7490600163ffffffff61169d16565b905090565b6040805160208082018690523360601b828401527fffffffff00000000000000000000000000000000000000000000000000000000851660548301526058808301859052835180840390910181526078909201835281519181019190912060008781526002909252919020548114610e5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f506172616d7320646f206e6f74206d6174636820726571756573742049440000604482015290519081900360640190fd5b42821115610ec157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f52657175657374206973206e6f74206578706972656400000000000000000000604482015290519081900360640190fd5b6000858152600260205260408082208290555186917fa7842b9ec549398102c0d91b1b9919b2f20558aefdadf57528a95c6cd3292e9391a2600154604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101879052905173ffffffffffffffffffffffffffffffffffffffff9092169163a9059cbb916044808201926020929091908290030181600087803b158015610f7357600080fd5b505af1158015610f87573d6000803e3d6000fd5b505050506040513d6020811015610f9d57600080fd5b5051610fa557fe5b5050505050565b610fb4611091565b61101f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff16331490565b6110b7610499565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461115057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4d75737420757365204c494e4b20746f6b656e00000000000000000000000000604482015290519081900360640190fd5b80518190604411156111c357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e76616c69642072657175657374206c656e67746800000000000000000000604482015290519081900360640190fd5b602082015182907fffffffff0000000000000000000000000000000000000000000000000000000081167f40429946000000000000000000000000000000000000000000000000000000001461127a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4d757374207573652077686974656c69737465642066756e6374696f6e730000604482015290519081900360640190fd5b85602485015284604485015260003073ffffffffffffffffffffffffffffffffffffffff16856040518082805190602001908083835b602083106112ed57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016112b0565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461134d576040519150601f19603f3d011682016040523d82523d6000602084013e611352565b606091505b50509050806113c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f556e61626c6520746f2063726561746520726571756573740000000000000000604482015290519081900360640190fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205460ff1690565b6113fe611091565b61146957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61147281611714565b50565b61147d611091565b6114e857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b806114fa81600163ffffffff61162216565b6004541015611554576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806118346035913960400191505060405180910390fd5b600454611567908363ffffffff61169d16565b6004908155600154604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811694820194909452602481018690529051929091169163a9059cbb916044808201926020929091908290030181600087803b1580156115eb57600080fd5b505af11580156115ff573d6000803e3d6000fd5b505050506040513d602081101561161557600080fd5b505161161d57fe5b505050565b60008282018381101561169657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60008282111561170e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b73ffffffffffffffffffffffffffffffffffffffff8116611780576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061180e6026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416d6f756e74207265717565737465642069732067726561746572207468616e20776974686472617761626c652062616c616e63654e6f7420616e20617574686f72697a6564206e6f646520746f2066756c66696c6c207265717565737473a26469706673582212205e535eec44d1e338aa5b93b4bbcc48cf4b39daf6b14111030fd2c856d672da1f64736f6c63430006060033";
