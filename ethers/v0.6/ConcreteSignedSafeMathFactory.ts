/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ConcreteSignedSafeMath } from "./ConcreteSignedSafeMath";

export class ConcreteSignedSafeMathFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ConcreteSignedSafeMath> {
    return super.deploy(overrides) as Promise<ConcreteSignedSafeMath>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ConcreteSignedSafeMath {
    return super.attach(address) as ConcreteSignedSafeMath;
  }
  connect(signer: Signer): ConcreteSignedSafeMathFactory {
    return super.connect(signer) as ConcreteSignedSafeMathFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConcreteSignedSafeMath {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConcreteSignedSafeMath;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_a",
        type: "int256"
      },
      {
        internalType: "int256",
        name: "_b",
        type: "int256"
      }
    ],
    name: "testAdd",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_a",
        type: "int256"
      },
      {
        internalType: "int256",
        name: "_b",
        type: "int256"
      }
    ],
    name: "testAvg",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610200806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806347037c901461003b5780634c64959614610070575b600080fd5b61005e6004803603604081101561005157600080fd5b5080359060200135610093565b60408051918252519081900360200190f35b61005e6004803603604081101561008657600080fd5b50803590602001356100a8565b600061009f83836100b4565b90505b92915050565b600061009f8383610133565b60008282018183128015906100c95750838112155b806100de57506000831280156100de57508381125b61009f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806101aa6021913960400191505060405180910390fd5b600080831280156101445750600082135b8061015a575060008313801561015a5750600082125b1561017a57600261016b84846100b4565b8161017257fe5b0590506100a2565b60006002808507818507010590506101a161019b60028605600286056100b4565b826100b4565b94935050505056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77a26469706673582212206104dc962414951114beccf0e68d4916660059a168e9a38b52879c49e0021f8064736f6c63430006060033";
