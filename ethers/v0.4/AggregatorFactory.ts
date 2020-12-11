/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { Arrayish, BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { Aggregator } from "./Aggregator";

export class AggregatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    _paymentAmount: BigNumberish,
    _minimumResponses: BigNumberish,
    _oracles: string[],
    _jobIds: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<Aggregator> {
    return super.deploy(
      _link,
      _paymentAmount,
      _minimumResponses,
      _oracles,
      _jobIds,
      overrides
    ) as Promise<Aggregator>;
  }
  getDeployTransaction(
    _link: string,
    _paymentAmount: BigNumberish,
    _minimumResponses: BigNumberish,
    _oracles: string[],
    _jobIds: Arrayish[],
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _link,
      _paymentAmount,
      _minimumResponses,
      _oracles,
      _jobIds,
      overrides
    );
  }
  attach(address: string): Aggregator {
    return super.attach(address) as Aggregator;
  }
  connect(signer: Signer): AggregatorFactory {
    return super.connect(signer) as AggregatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Aggregator {
    return new Contract(address, _abi, signerOrProvider) as Aggregator;
  }
}

const _abi = [
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
        name: "_expiration",
        type: "uint256"
      }
    ],
    name: "cancelRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "authorizedRequesters",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "jobIds",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "minimumResponses",
    outputs: [
      {
        name: "",
        type: "uint128"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "oracles",
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
        name: "_recipient",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transferLINK",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        name: "",
        type: "uint256"
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
        name: "_clRequestId",
        type: "bytes32"
      },
      {
        name: "_response",
        type: "int256"
      }
    ],
    name: "chainlinkCallback",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_paymentAmount",
        type: "uint128"
      },
      {
        name: "_minimumResponses",
        type: "uint128"
      },
      {
        name: "_oracles",
        type: "address[]"
      },
      {
        name: "_jobIds",
        type: "bytes32[]"
      }
    ],
    name: "updateRequestDetails",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "destroy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
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
    constant: true,
    inputs: [
      {
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getAnswer",
    outputs: [
      {
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paymentAmount",
    outputs: [
      {
        name: "",
        type: "uint128"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "requestRateUpdate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requester",
        type: "address"
      },
      {
        name: "_allowed",
        type: "bool"
      }
    ],
    name: "setAuthorization",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_link",
        type: "address"
      },
      {
        name: "_paymentAmount",
        type: "uint128"
      },
      {
        name: "_minimumResponses",
        type: "uint128"
      },
      {
        name: "_oracles",
        type: "address[]"
      },
      {
        name: "_jobIds",
        type: "bytes32[]"
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
        indexed: true,
        name: "response",
        type: "int256"
      },
      {
        indexed: true,
        name: "answerId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "sender",
        type: "address"
      }
    ],
    name: "ResponseReceived",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      }
    ],
    name: "OwnershipRenounced",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
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
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "startedBy",
        type: "address"
      },
      {
        indexed: false,
        name: "startedAt",
        type: "uint256"
      }
    ],
    name: "NewRound",
    type: "event"
  }
];

const _bytecode =
  "0x608060405260016004556001600d553480156200001b57600080fd5b50604051620024b6380380620024b683398101604090815281516020830151918301516060840151608085015160068054600160a060020a03191633179055929491929082019101620000778564010000000062000099810204565b6200008e84848484640100000000620000bb810204565b5050505050620003ee565b60028054600160a060020a031916600160a060020a0392909216919091179055565b600654600160a060020a03163314620000d357600080fd5b826001608060020a03168282601c8251111515156200015357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f63616e6e6f742068617665206d6f7265207468616e203435206f7261636c6573604482015290519081900360640190fd5b8151831115620001ea57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f6d7573742068617665206174206c65617374206173206d616e79206f7261636c60448201527f657320617320726573706f6e7365730000000000000000000000000000000000606482015290519081900360840190fd5b80518251146200028157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f6d75737420686176652065786163746c79206173206d616e79206f7261636c6560448201527f73206173206a6f62204944730000000000000000000000000000000000000000606482015290519081900360840190fd5b600a80546001608060020a0388811670010000000000000000000000000000000002818b166001608060020a031990931692909217161790558351620002cf90600b906020870190620002ef565b508451620002e590600c90602088019062000341565b5050505050505050565b8280548282559060005260206000209081019282156200032f579160200282015b828111156200032f578251825560209092019160019091019062000310565b506200033d929150620003a7565b5090565b82805482825590600052602060002090810192821562000399579160200282015b82811115620003995782518254600160a060020a031916600160a060020a0390911617825560209092019160019091019062000362565b506200033d929150620003c7565b620003c491905b808211156200033d5760008155600101620003ae565b90565b620003c491905b808211156200033d578054600160a060020a0319168155600101620003ce565b6120b880620003fe6000396000f3006080604052600436106101115763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166333bfcdd881146101165780633ea478aa146101365780634162cc881461017857806350d25bcd146101a257806354bcd7ff146101b75780635b69a7d8146101f15780635cd9b90b14610232578063668a0f02146102635780636a9705b414610278578063715018a61461029357806378a66674146102a85780638205bf6a1461035557806383197ef01461036a5780638da5cb5b1461037f578063b5ab58dc14610394578063b633620c146103ac578063c35905c6146103c4578063daa6d556146103d9578063eecea000146103ee578063f2fde38b14610421575b600080fd5b34801561012257600080fd5b5061013460043560243560443561044f565b005b34801561014257600080fd5b5061016473ffffffffffffffffffffffffffffffffffffffff60043516610628565b604080519115158252519081900360200190f35b34801561018457600080fd5b5061019060043561063d565b60408051918252519081900360200190f35b3480156101ae57600080fd5b5061019061065c565b3480156101c357600080fd5b506101cc610672565b604080516fffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156101fd57600080fd5b5061020960043561069e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561023e57600080fd5b5061013473ffffffffffffffffffffffffffffffffffffffff600435166024356106d3565b34801561026f57600080fd5b50610190610845565b34801561028457600080fd5b5061013460043560243561084b565b34801561029f57600080fd5b506101346108ce565b3480156102b457600080fd5b5060408051602060046044358181013583810280860185019096528085526101349583356fffffffffffffffffffffffffffffffff9081169660248035909216963696956064959294930192829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506109619650505050505050565b34801561036157600080fd5b50610190610bc4565b34801561037657600080fd5b50610134610bd9565b34801561038b57600080fd5b50610209610cd0565b3480156103a057600080fd5b50610190600435610cec565b3480156103b857600080fd5b50610190600435610cfe565b3480156103d057600080fd5b506101cc610d10565b3480156103e557600080fd5b50610134610d28565b3480156103fa57600080fd5b5061013473ffffffffffffffffffffffffffffffffffffffff600435166024351515610f9b565b34801561042d57600080fd5b5061013473ffffffffffffffffffffffffffffffffffffffff60043516611015565b336000908152600e602052604081205460ff1680610484575060065473ffffffffffffffffffffffffffffffffffffffff1633145b151561051757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4e6f7420616e20617574686f72697a6564206164647265737320666f7220637260448201527f656174696e672072657175657374730000000000000000000000000000000000606482015290519081900360840190fd5b506000838152600f602052604090205460095481106105bd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f43616e6e6f74206d6f6469667920616e20696e2d70726f677265737320616e7360448201527f7765720000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6000848152600f60209081526040808320839055838352601082528220600190810180549182018155835290822001556105f681611045565b61062284847f6a9705b400000000000000000000000000000000000000000000000000000000856110ac565b50505050565b600e6020526000908152604090205460ff1681565b600b80548290811061064b57fe5b600091825260209091200154905081565b6009546000908152601160205260409020545b90565b600a5470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1681565b600c8054829081106106ac57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60065460009073ffffffffffffffffffffffffffffffffffffffff1633146106fa57600080fd5b6107026111e7565b90508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156107a757600080fd5b505af11580156107bb573d6000803e3d6000fd5b505050506040513d60208110156107d157600080fd5b5051151561084057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4c494e4b207472616e73666572206661696c6564000000000000000000000000604482015290519081900360640190fd5b505050565b60095490565b600061085683611203565b506000828152600f602090815260408083208054908490558084526010835281842060019081018054918201815585529284209092018490555190913391839185917fb51168059c83c860caf5b830c5d2e64c2172c6fb2fe9f25447d9838e18d93b609190a46108c58161131c565b61084081611045565b60065473ffffffffffffffffffffffffffffffffffffffff1633146108f257600080fd5b60065460405173ffffffffffffffffffffffffffffffffffffffff909116907ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482090600090a2600680547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60065473ffffffffffffffffffffffffffffffffffffffff16331461098557600080fd5b826fffffffffffffffffffffffffffffffff168282601c825111151515610a0d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f63616e6e6f742068617665206d6f7265207468616e203435206f7261636c6573604482015290519081900360640190fd5b8151831115610aa357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f6d7573742068617665206174206c65617374206173206d616e79206f7261636c60448201527f657320617320726573706f6e7365730000000000000000000000000000000000606482015290519081900360840190fd5b8051825114610b3957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f6d75737420686176652065786163746c79206173206d616e79206f7261636c6560448201527f73206173206a6f62204944730000000000000000000000000000000000000000606482015290519081900360840190fd5b600a80546fffffffffffffffffffffffffffffffff88811670010000000000000000000000000000000002818b167fffffffffffffffffffffffffffffffff0000000000000000000000000000000090931692909217161790558351610ba690600b906020870190611ef8565b508451610bba90600c906020880190611f45565b5050505050505050565b60095460009081526012602052604090205490565b60065460009073ffffffffffffffffffffffffffffffffffffffff163314610c0057600080fd5b610c086111e7565b600654604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051929350610cb59273ffffffffffffffffffffffffffffffffffffffff928316928516916370a082319160248083019260209291908290030181600087803b158015610c8457600080fd5b505af1158015610c98573d6000803e3d6000fd5b505050506040513d6020811015610cae57600080fd5b50516106d3565b60065473ffffffffffffffffffffffffffffffffffffffff16ff5b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60009081526011602052604090205490565b60009081526012602052604090205490565b600a546fffffffffffffffffffffffffffffffff1681565b610d30611fcb565b336000908152600e60205260408120548190819060ff1680610d69575060065473ffffffffffffffffffffffffffffffffffffffff1633145b1515610dfc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4e6f7420616e20617574686f72697a6564206164647265737320666f7220637260448201527f656174696e672072657175657374730000000000000000000000000000000000606482015290519081900360840190fd5b5050600a546fffffffffffffffffffffffffffffffff1660005b600c54811015610ec057610e67600b82815481101515610e3257fe5b906000526020600020015430636a9705b47c010000000000000000000000000000000000000000000000000000000002611578565b9350610ea4600c82815481101515610e7b57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1685846115a3565b600d546000828152600f60205260409020559250600101610e16565b600a54600d8054600090815260106020908152604080832080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff70010000000000000000000000000000000097889004811691909117909155600c5485548552938290208054948216909602931692909217909355905481514281529151339391927f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac6027192908290030190a3600d54610f9290600163ffffffff61190516565b600d5550505050565b60065473ffffffffffffffffffffffffffffffffffffffff163314610fbf57600080fd5b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60065473ffffffffffffffffffffffffffffffffffffffff16331461103957600080fd5b61104281611918565b50565b60008181526010602052604090208054600190910154829170010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1614156110a8576000828152601060205260408120818155906106226001830182612000565b5050565b60008481526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000008116909155905173ffffffffffffffffffffffffffffffffffffffff9091169186917fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c59190a2604080517f6ee4d55300000000000000000000000000000000000000000000000000000000815260048101879052602481018690527fffffffff000000000000000000000000000000000000000000000000000000008516604482015260648101849052905173ffffffffffffffffffffffffffffffffffffffff831691636ee4d55391608480830192600092919082900301818387803b1580156111c857600080fd5b505af11580156111dc573d6000803e3d6000fd5b505050505050505050565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b600081815260056020526040902054819073ffffffffffffffffffffffffffffffffffffffff1633146112bd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a25050565b60008181526010602052604081208054600190910154829182918291829187916fffffffffffffffffffffffffffffffff161161156f578680600954111515610bba57600088815260106020526040902060010154965061138487600263ffffffff6119c816565b95506002870615156114965760008881526010602090815260409182902060010180548351818402810184019094528084526113f593928301828280156113ea57602002820191906000526020600020905b8154815260200190600101908083116113d6575b5050505050876119dd565b600089815260106020908152604091829020600101805483518184028101840190945280845293975061147193909183018282801561145357602002820191906000526020600020905b81548152602001906001019080831161143f575b505050505061146c60018961190590919063ffffffff16565b6119dd565b92506002611485858563ffffffff611bd116565b81151561148e57fe5b05945061150a565b60008881526010602090815260409182902060010180548351818402810184019094528084526115079392830182828015611453576020028201919060005260206000209081548152602001906001019080831161143f57505050505061146c60018961190590919063ffffffff16565b94505b6007859055600988905542600881905560008981526012602090815260408083208490556011825291829020889055815192835290518a9288927f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f92918290030190a3505b50505050505050565b611580611fcb565b611588611fcb565b61159a8186868663ffffffff611c9516565b95945050505050565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b6020831061165757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161161a565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052604080519290940182900390912060045460608a01526000818152600590925283822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c1617905592519295508594507fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99350919050a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea0858461174887611cf7565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156117e85781810151838201526020016117d0565b50505050905090810190601f1680156118155780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561183657600080fd5b505af115801561184a573d6000803e3d6000fd5b505050506040513d602081101561186057600080fd5b505115156118f557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b8181018281101561191257fe5b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116151561193a57600080fd5b60065460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600081838115156119d557fe5b049392505050565b600060606000806060806000806000808b98508a97508851965086604051908082528060200260200182016040528015611a21578160200160208202803883390190505b50955086604051908082528060200260200182016040528015611a4e578160200160208202803883390190505b5094505b88611a6488600263ffffffff6119c816565b81518110611a6e57fe5b9060200190602002015191506000935060009250600090505b86811015611b4757818982815181101515611a9e57fe5b906020019060200201511215611ae9578881815181101515611abc57fe5b906020019060200201518685815181101515611ad457fe5b60209081029091010152600190930192611b3f565b818982815181101515611af857fe5b906020019060200201511315611b3f578881815181101515611b1657fe5b906020019060200201518584815181101515611b2e57fe5b602090810290910101526001909201915b600101611a87565b838811611b6557839650611b5b8987611ea9565b9099509550611bbd565b611b75878463ffffffff611eac16565b881115611bb557611b9c611b8f888563ffffffff611eac16565b899063ffffffff611eac16565b9750829650611bab8986611ea9565b9099509450611bbd565b819950611bc2565b611a52565b50505050505050505092915050565b6000828201818312801590611be65750838112155b80611bfb5750600083128015611bfb57508381125b1515611c8e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f60448201527f7700000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b9392505050565b611c9d611fcb565b611cad8560800151610100611ebe565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e5b83811015611dec578181015183820152602001611dd4565b50505050905090810190601f168015611e195780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b91565b600082821115611eb857fe5b50900390565b611ec661201e565b6020820615611edb5760208206602003820191505b506020828101829052604080518085526000815290920101905290565b828054828255906000526020600020908101928215611f35579160200282015b82811115611f355782518255602090920191600190910190611f18565b50611f41929150612036565b5090565b828054828255906000526020600020908101928215611fbf579160200282015b82811115611fbf57825182547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178255602090920191600190910190611f65565b50611f41929150612050565b6040805160c081018252600080825260208201819052918101829052606081019190915260808101611ffb61201e565b905290565b50805460008255906000526020600020908101906110429190612036565b60408051808201909152606081526000602082015290565b61066f91905b80821115611f41576000815560010161203c565b61066f91905b80821115611f415780547fffffffffffffffffffffffff00000000000000000000000000000000000000001681556001016120565600a165627a7a723058202a290a42333c64207c143672a502d32b32806fe295ba64c6c50ed9ddcae8b0060029";