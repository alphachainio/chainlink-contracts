/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ConcreteChainlinked } from "./ConcreteChainlinked";

export class ConcreteChainlinkedFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    _oracle: string,
    overrides?: TransactionOverrides
  ): Promise<ConcreteChainlinked> {
    return super.deploy(_link, _oracle, overrides) as Promise<
      ConcreteChainlinked
    >;
  }
  getDeployTransaction(
    _link: string,
    _oracle: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, _oracle, overrides);
  }
  attach(address: string): ConcreteChainlinked {
    return super.attach(address) as ConcreteChainlinked;
  }
  connect(signer: Signer): ConcreteChainlinkedFactory {
    return super.connect(signer) as ConcreteChainlinkedFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConcreteChainlinked {
    return new Contract(address, _abi, signerOrProvider) as ConcreteChainlinked;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "publicLINK",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_payment",
        type: "uint256"
      },
      {
        name: "_callbackFunctionId",
        type: "bytes4"
      },
      {
        name: "_expiration",
        type: "uint256"
      }
    ],
    name: "publicCancelRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_oracle",
        type: "address"
      },
      {
        name: "_requestId",
        type: "bytes32"
      }
    ],
    name: "publicAddExternalRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "fulfillRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "bytes32"
      },
      {
        name: "_address",
        type: "address"
      },
      {
        name: "_fulfillmentSignature",
        type: "bytes"
      },
      {
        name: "_wei",
        type: "uint256"
      }
    ],
    name: "publicRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "publicChainlinkToken",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_oracle",
        type: "address"
      },
      {
        name: "_id",
        type: "bytes32"
      },
      {
        name: "_address",
        type: "address"
      },
      {
        name: "_fulfillmentSignature",
        type: "bytes"
      },
      {
        name: "_wei",
        type: "uint256"
      }
    ],
    name: "publicRequestRunTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "publicFulfillChainlinkRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "bytes32"
      },
      {
        name: "_address",
        type: "address"
      },
      {
        name: "_fulfillmentSignature",
        type: "bytes"
      }
    ],
    name: "publicNewRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "publicOracleAddress",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_link",
        type: "address"
      },
      {
        name: "_oracle",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "callbackAddress",
        type: "address"
      },
      {
        indexed: false,
        name: "callbackfunctionSelector",
        type: "bytes4"
      },
      {
        indexed: false,
        name: "data",
        type: "bytes"
      }
    ],
    name: "Request",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LinkAmount",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkCancelled",
    type: "event"
  }
];

const _bytecode =
  "0x6080604052600160045534801561001557600080fd5b5060405160408061129083398101604052805160209091015161004082640100000000610059810204565b6100528164010000000061006e810204565b50506100c4565b61006b81640100000000610080810204565b50565b61006b816401000000006100a2810204565b60028054600160a060020a031916600160a060020a0392909216919091179055565b60038054600160a060020a031916600160a060020a0392909216919091179055565b6111bd806100d36000396000f3006080604052600436106100a35763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633f14df8281146100a8578063448d6c10146100c25780635491ec6a146101055780635d64e3101461013657806366a4f3501461015157806398bb2b2d146101c9578063a1179a2714610207578063ad7e401c14610286578063d9a26716146102a1578063f7ea03ff14610317575b600080fd5b3480156100b457600080fd5b506100c060043561032c565b005b3480156100ce57600080fd5b506100c06004356024357fffffffff0000000000000000000000000000000000000000000000000000000060443516606435610379565b34801561011157600080fd5b506100c073ffffffffffffffffffffffffffffffffffffffff6004351660243561038b565b34801561014257600080fd5b506100c0600435602435610399565b34801561015d57600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526100c0948235946024803573ffffffffffffffffffffffffffffffffffffffff169536959460649492019190819084018382808284375094975050933594506104b39350505050565b3480156101d557600080fd5b506101de610554565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561021357600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526100c09473ffffffffffffffffffffffffffffffffffffffff81358116956024803596604435909316953695608494920191819084018382808284375094975050933594506105639350505050565b34801561029257600080fd5b506100c06004356024356105d3565b3480156102ad57600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526100c0948235946024803573ffffffffffffffffffffffffffffffffffffffff16953695946064949201919081908401838280828437509497506105dc9650505050505050565b34801561032357600080fd5b506101de61073d565b7f81c82a6ea1ed1cf28a5376c6d13caab9047c853ec5107907ec9431c50ec1a85c610365670de0b6b3a76400008363ffffffff61074716565b60408051918252519081900360200190a150565b61038584848484610776565b50505050565b61039582826108b1565b5050565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461045357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a2505050565b6104bb611144565b6105408585856040518082805190602001908083835b6020831061050e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016104d1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206108bb565b905061054c81836108d6565b505050505050565b600061055e6108e9565b905090565b61056b611144565b6105bd8585856040518082805190602001908083836020831061050e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016104d1565b90506105ca8682846108f3565b50505050505050565b61039582610900565b6105e4611144565b6106368484846040518082805190602001908083836020831061050e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016104d1565b805160208083015160408085015160808087015151835187815273ffffffffffffffffffffffffffffffffffffffff8616818801527fffffffff000000000000000000000000000000000000000000000000000000008416948101949094526060840182815281519285019290925280519798507f6ae3654efc50e419eaebe21a0569020545587e83c4409cfb1d3a4217cbed8a21979495929490939260a08401919085019080838360005b838110156106fa5781810151838201526020016106e2565b50505050905090810190601f1680156107275780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a150505050565b600061055e610a19565b600082151561075857506000610770565b5081810281838281151561076857fe5b041461077057fe5b92915050565b60008481526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000008116909155905173ffffffffffffffffffffffffffffffffffffffff9091169186917fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c59190a2604080517f6ee4d55300000000000000000000000000000000000000000000000000000000815260048101879052602481018690527fffffffff000000000000000000000000000000000000000000000000000000008516604482015260648101849052905173ffffffffffffffffffffffffffffffffffffffff831691636ee4d55391608480830192600092919082900301818387803b15801561089257600080fd5b505af11580156108a6573d6000803e3d6000fd5b505050505050505050565b6103958282610a23565b6108c3611144565b6108ce848484610b0a565b949350505050565b60006108e28383610b35565b9392505050565b600061055e610b5c565b60006108ce848484610b78565b600081815260056020526040902054819073ffffffffffffffffffffffffffffffffffffffff1633146109ba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a25050565b600061055e610eda565b600081815260056020526040902054819073ffffffffffffffffffffffffffffffffffffffff1615610ab657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f5265717565737420697320616c72656164792070656e64696e67000000000000604482015290519081900360640190fd5b50600090815260056020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610b12611144565b610b1a611144565b610b2c8186868663ffffffff610ef616565b95945050505050565b6003546000906108e29073ffffffffffffffffffffffffffffffffffffffff168484610b78565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b60208310610c2c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610bef565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052604080519290940182900390912060045460608a01526000818152600590925283822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c1617905592519295508594507fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99350919050a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea08584610d1d87610f58565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610dbd578181015183820152602001610da5565b50505050905090810190601f168015610dea5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610e0b57600080fd5b505af1158015610e1f573d6000803e3d6000fd5b505050506040513d6020811015610e3557600080fd5b50511515610eca57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b60035473ffffffffffffffffffffffffffffffffffffffff1690565b610efe611144565b610f0e856080015161010061110a565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e5b8381101561104d578181015183820152602001611035565b50505050905090810190601f16801561107a5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b611112611179565b60208206156111275760208206602003820191505b506020828101829052604080518085526000815290920101905290565b6040805160c081018252600080825260208201819052918101829052606081019190915260808101611174611179565b905290565b604080518082019091526060815260006020820152905600a165627a7a72305820ab8668ae2f514c85185a3143b86a3819279f14cfc0f74a77390447aa1ef3c2260029";
