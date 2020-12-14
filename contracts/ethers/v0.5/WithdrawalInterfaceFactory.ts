/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { WithdrawalInterface } from "./WithdrawalInterface";

export class WithdrawalInterfaceFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawalInterface {
    return new Contract(address, _abi, signerOrProvider) as WithdrawalInterface;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "withdrawable",
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
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];