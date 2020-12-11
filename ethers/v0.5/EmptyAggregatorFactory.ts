/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { EmptyAggregator } from "./EmptyAggregator";

export class EmptyAggregatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<EmptyAggregator> {
    return super.deploy(overrides) as Promise<EmptyAggregator>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): EmptyAggregator {
    return super.attach(address) as EmptyAggregator;
  }
  connect(signer: Signer): EmptyAggregatorFactory {
    return super.connect(signer) as EmptyAggregatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmptyAggregator {
    return new Contract(address, _abi, signerOrProvider) as EmptyAggregator;
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
        name: "_saId",
        type: "bytes32"
      },
      {
        name: "_oracle",
        type: "address"
      },
      {
        name: "_fulfillment",
        type: "bytes32"
      }
    ],
    name: "fulfill",
    outputs: [
      {
        name: "success",
        type: "bool"
      },
      {
        name: "complete",
        type: "bool"
      },
      {
        name: "response",
        type: "bytes"
      },
      {
        name: "paymentAmounts",
        type: "int256[]"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_saId",
        type: "bytes32"
      },
      {
        name: "_serviceAgreementData",
        type: "bytes"
      }
    ],
    name: "initiateJob",
    outputs: [
      {
        name: "success",
        type: "bool"
      },
      {
        name: "_",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "said",
        type: "bytes32"
      }
    ],
    name: "InitiatedJob",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "oracle",
        type: "address"
      },
      {
        indexed: false,
        name: "success",
        type: "bool"
      },
      {
        indexed: false,
        name: "complete",
        type: "bool"
      },
      {
        indexed: false,
        name: "fulfillment",
        type: "bytes"
      }
    ],
    name: "Fulfilled",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610425806100206000396000f3fe60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639760168f8114610050578063d43a12f614610171575b600080fd5b34801561005c57600080fd5b506100a26004803603608081101561007357600080fd5b5080359060208101359073ffffffffffffffffffffffffffffffffffffffff60408201351690606001356102ae565b6040518085151515158152602001841515151581526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156100f75781810151838201526020016100df565b50505050905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b508381038252845181528451602091820191808701910280838360005b83811015610159578181015183820152602001610141565b50505050905001965050505050505060405180910390f35b34801561017d57600080fd5b5061022b6004803603604081101561019457600080fd5b813591908101906040810160208201356401000000008111156101b657600080fd5b8201836020820111156101c857600080fd5b803590602001918460018302840111640100000000831117156101ea57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103b5945050505050565b604051808315151515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561027257818101518382015260200161025a565b50505050905090810190601f16801561029f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6040805160208082018490528251808303820181528284019384905287845273ffffffffffffffffffffffffffffffffffffffff861660608481019190915260016080850181905260a080860182905260c08601908152835160e0870152835191968796949593947f56e3e982f891af88c0faacff5062ae928b6bdeab4073240eb1ae9451b77a54b8948d948c948a9485948b9491936101009091019185019080838360005b8381101561036c578181015183820152602001610354565b50505050905090810190601f1680156103995780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a1945094509450949050565b6040805183815290516000916060917f5d3501b519fbd1e8d168f391246ff9ea5621f7d81712c6fc42d23e380b80a8119181900360200190a160019150925092905056fea165627a7a72305820d1a8f20f85adc83322fd5674fa25ddc118ceb4d244369fa7f9c3adc9b361d3350029";
