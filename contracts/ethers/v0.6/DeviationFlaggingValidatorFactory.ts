/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { DeviationFlaggingValidator } from "./DeviationFlaggingValidator";

export class DeviationFlaggingValidatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _flags: string,
    _flaggingThreshold: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<DeviationFlaggingValidator> {
    return super.deploy(_flags, _flaggingThreshold, overrides) as Promise<
      DeviationFlaggingValidator
    >;
  }
  getDeployTransaction(
    _flags: string,
    _flaggingThreshold: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_flags, _flaggingThreshold, overrides);
  }
  attach(address: string): DeviationFlaggingValidator {
    return super.attach(address) as DeviationFlaggingValidator;
  }
  connect(signer: Signer): DeviationFlaggingValidatorFactory {
    return super.connect(signer) as DeviationFlaggingValidatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeviationFlaggingValidator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DeviationFlaggingValidator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_flags",
        type: "address"
      },
      {
        internalType: "uint24",
        name: "_flaggingThreshold",
        type: "uint24"
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
        internalType: "uint24",
        name: "previous",
        type: "uint24"
      },
      {
        indexed: true,
        internalType: "uint24",
        name: "current",
        type: "uint24"
      }
    ],
    name: "FlaggingThresholdUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previous",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "current",
        type: "address"
      }
    ],
    name: "FlagsAddressUpdated",
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
    name: "THRESHOLD_MULTIPLIER",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
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
    inputs: [],
    name: "flaggingThreshold",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "flags",
    outputs: [
      {
        internalType: "contract FlagsInterface",
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
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "_previousAnswer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "_answer",
        type: "int256"
      }
    ],
    name: "isValid",
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
        internalType: "uint24",
        name: "_flaggingThreshold",
        type: "uint24"
      }
    ],
    name: "setFlaggingThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_flags",
        type: "address"
      }
    ],
    name: "setFlagsAddress",
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
        internalType: "uint256",
        name: "_previousRoundId",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "_previousAnswer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "_roundId",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "_answer",
        type: "int256"
      }
    ],
    name: "validate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c65380380610c658339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b03191633179055610060826001600160e01b0361007916565b610072816001600160e01b0361014116565b5050610215565b6000546001600160a01b031633146100d8576040805162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b6002546001600160a01b03908116908216811461013d57600280546001600160a01b0319166001600160a01b0384811691821790925560405190918316907f900aa01828592ab069e4d44e7a36c70ebd476e35f567c7db6a691e503b8029d890600090a35b5050565b6000546001600160a01b031633146101a0576040805162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600154600160a01b900463ffffffff81169062ffffff83811691161461013d576001805463ffffffff60a01b191662ffffff848116600160a01b81029290921790925560405190918316907f985b87e809fd5992ec257eac36f25777ce308055dd9249a0182123d7b5d6633a90600090a35050565b610a41806102246000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063eed8a1de11610076578063f2c0ea921161005b578063f2c0ea92146101bf578063f2fde38b146101c7578063ffd93670146101fa576100be565b8063eed8a1de1461016a578063f19876951461018c576100be565b806379ba5097116100a757806379ba5097146101155780638da5cb5b1461011f578063beed9b5114610127576100be565b80630910ce4a146100c357806364cc4aa5146100e4575b600080fd5b6100cb610229565b6040805163ffffffff9092168252519081900360200190f35b6100ec61024d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61011d610269565b005b6100ec61036b565b6101566004803603608081101561013d57600080fd5b5080359060208101359060408101359060600135610387565b604080519115158252519081900360200190f35b61011d6004803603602081101561018057600080fd5b503562ffffff16610438565b61011d600480360360208110156101a257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661056e565b6100cb61068e565b61011d600480360360208110156101dd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610695565b6101566004803603608081101561021057600080fd5b5080359060208101359060408101359060600135610791565b60015474010000000000000000000000000000000000000000900463ffffffff1681565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1633146102ef57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600061039585858585610791565b61042c57600254604080517fd74af263000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff9092169163d74af2639160248082019260009290919082900301818387803b15801561040b57600080fd5b505af115801561041f573d6000803e3d6000fd5b5050505060009050610430565b5060015b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104be57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b60015474010000000000000000000000000000000000000000900463ffffffff81169062ffffff83811691161461056a57600180547fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff1662ffffff8481167401000000000000000000000000000000000000000081029290921790925560405190918316907f985b87e809fd5992ec257eac36f25777ce308055dd9249a0182123d7b5d6633a90600090a35b5050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b60025473ffffffffffffffffffffffffffffffffffffffff908116908216811461056a57600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84811691821790925560405190918316907f900aa01828592ab069e4d44e7a36c70ebd476e35f567c7db6a691e503b8029d890600090a35050565b620186a081565b60005473ffffffffffffffffffffffffffffffffffffffff16331461071b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000836107a057506001610430565b6000806107b3868563ffffffff61084d16565b90925090506000806107c884620186a0610898565b90925090506000806107e0848b63ffffffff61092a16565b915091506000806107f0846109b3565b915091508680156107fe5750845b80156108075750825b80156108105750805b801561083c575060015474010000000000000000000000000000000000000000900463ffffffff168211155b9d9c50505050505050505050505050565b60008082840381841280156108625750848113155b8061087857506000841215801561087857508481135b1561088a575060009150819050610891565b9150600190505b9250929050565b600080836108ac5750600090506001610891565b837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1480156108fa57507f800000000000000000000000000000000000000000000000000000000000000083145b1561090a57506000905080610891565b8383028385828161091757fe5b051461088a575060009150819050610891565b6000808261093d57506000905080610891565b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14801561098b57507f800000000000000000000000000000000000000000000000000000000000000084145b1561099b57506000905080610891565b60008385816109a657fe5b0595600195509350505050565b600080600083126109c957508190506001610a06565b7f80000000000000000000000000000000000000000000000000000000000000008314156109fc57506000905080610a06565b5050600081900360015b91509156fea2646970667358221220c0328d467983a726cab4cb0e3f0bf05afe4ae02ad653e96ab30c58f55a7af35164736f6c63430006060033";
