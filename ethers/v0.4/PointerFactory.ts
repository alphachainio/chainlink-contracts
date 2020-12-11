/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { Pointer } from "./Pointer";

export class PointerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_addr: string, overrides?: TransactionOverrides): Promise<Pointer> {
    return super.deploy(_addr, overrides) as Promise<Pointer>;
  }
  getDeployTransaction(
    _addr: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_addr, overrides);
  }
  attach(address: string): Pointer {
    return super.attach(address) as Pointer;
  }
  connect(signer: Signer): PointerFactory {
    return super.connect(signer) as PointerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Pointer {
    return new Contract(address, _abi, signerOrProvider) as Pointer;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getAddress",
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
        name: "_addr",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051602080610117833981016040525160008054600160a060020a03909216600160a060020a031990921691909117905560c6806100516000396000f300608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166338cc483181146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a723058208a97afa5168ab3bc8ae58d4d3b1013d4674482178fbacad4bc448e8de367f61d0029";
