/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { EmptyOracle } from "./EmptyOracle";

export class EmptyOracleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<EmptyOracle> {
    return super.deploy(overrides) as Promise<EmptyOracle>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): EmptyOracle {
    return super.attach(address) as EmptyOracle;
  }
  connect(signer: Signer): EmptyOracleFactory {
    return super.connect(signer) as EmptyOracleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EmptyOracle {
    return new Contract(address, _abi, signerOrProvider) as EmptyOracle;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "bytes4"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "bytes"
      }
    ],
    name: "oracleRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "bytes4"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "fulfillOracleRequest",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
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
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "bytes4"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "cancelOracleRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "bool"
      }
    ],
    name: "setFulfillmentPermission",
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
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "bytes"
      }
    ],
    name: "onTokenTransfer",
    outputs: [],
    payable: false,
    stateMutability: "pure",
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
    name: "getAuthorizationStatus",
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
    constant: false,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5061030f806100206000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634042994681146100925780634ab0d1901461010a578063501883011461017d5780636ee4d553146101a45780637fcd56db146101e7578063a4c0ed361461021a578063d3e9c31414610258578063f3fef3a314610286575b600080fd5b34801561009e57600080fd5b5061010873ffffffffffffffffffffffffffffffffffffffff6004803582169160248035926044359260643516917fffffffff00000000000000000000000000000000000000000000000000000000608435169160a4359160c4359160e4359182019101356102b7565b005b34801561011657600080fd5b5061016960043560243573ffffffffffffffffffffffffffffffffffffffff604435167fffffffff000000000000000000000000000000000000000000000000000000006064351660843560a4356102c2565b604080519115158252519081900360200190f35b34801561018957600080fd5b506101926102ce565b60408051918252519081900360200190f35b3480156101b057600080fd5b506101086004356024357fffffffff00000000000000000000000000000000000000000000000000000000604435166064356102d3565b3480156101f357600080fd5b5061010873ffffffffffffffffffffffffffffffffffffffff6004351660243515156102d9565b34801561022657600080fd5b506101086004803573ffffffffffffffffffffffffffffffffffffffff169060248035916044359182019101356102d3565b34801561026457600080fd5b5061016973ffffffffffffffffffffffffffffffffffffffff600435166102dd565b34801561029257600080fd5b5061010873ffffffffffffffffffffffffffffffffffffffff600435166024356102d9565b505050505050505050565b60009695505050505050565b600090565b50505050565b5050565b506000905600a165627a7a7230582077cce9008299092b8202ec18a469ddf7dcda79bbd6da7d4c022723eb7e9c76bd0029";
