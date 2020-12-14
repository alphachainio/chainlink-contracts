/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MedianTestHelper } from "./MedianTestHelper";

export class MedianTestHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<MedianTestHelper> {
    return super.deploy(overrides) as Promise<MedianTestHelper>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): MedianTestHelper {
    return super.attach(address) as MedianTestHelper;
  }
  connect(signer: Signer): MedianTestHelperFactory {
    return super.connect(signer) as MedianTestHelperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MedianTestHelper {
    return new Contract(address, _abi, signerOrProvider) as MedianTestHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256[]",
        name: "list",
        type: "int256[]"
      }
    ],
    name: "publicGet",
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
        internalType: "int256[]",
        name: "list",
        type: "int256[]"
      },
      {
        internalType: "uint256",
        name: "k1",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "k2",
        type: "uint256"
      }
    ],
    name: "publicQuickselectTwo",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
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
  "0x608060405234801561001057600080fd5b50610ba9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630fb75cff1461003b578063115efb20146100fc575b600080fd5b6100e36004803603606081101561005157600080fd5b81019060208101813564010000000081111561006c57600080fd5b82018360208201111561007e57600080fd5b803590602001918460208302840111640100000000831117156100a057600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602001356101b1565b6040805192835260208301919091528051918290030190f35b61019f6004803603602081101561011257600080fd5b81019060208101813564010000000081111561012d57600080fd5b82018360208201111561013f57600080fd5b8035906020019184602083028401116401000000008311171561016157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506101d2945050505050565b60408051918252519081900360200190f35b6000806101c6856000600188510387876101e5565b91509150935093915050565b60006101dd826102c3565b90505b919050565b6000808284106101f457600080fd5b8386111580156102045750848411155b61020d57600080fd5b82861115801561021d5750848311155b61022657600080fd5b600786860310156102475761023e87878787876102d6565b915091506102b9565b600061025488888861078d565b9050808411610265578095506102b3565b84811015610278578060010196506102b3565b80851115801561028757508381105b61028d57fe5b61029988888388610871565b92506102aa88826001018887610871565b91506102b99050565b50610226565b9550959350505050565b60006101dd6102d183610903565b610991565b6000806000868660010103905060008888600001815181106102f457fe5b6020026020010151905060008260011061032e577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610346565b89896001018151811061033d57fe5b60200260200101515b9050600083600210610378577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610390565b8a8a6002018151811061038757fe5b60200260200101515b90506000846003106103c2577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6103da565b8b8b600301815181106103d157fe5b60200260200101515b905060008560041061040c577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610424565b8c8c6004018151811061041b57fe5b60200260200101515b9050600086600510610456577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61046e565b8d8d6005018151811061046557fe5b60200260200101515b90506000876006106104a0577f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6104b8565b8e8e600601815181106104af57fe5b60200260200101515b9050858713156104c6579495945b838513156104d2579293925b818313156104de579091905b848713156104ea579395935b838613156104f6579294925b8083131561050057915b8486131561050c579394935b8082131561051657905b82871315610522579195915b8186131561052e579094905b8085131561053857935b82861315610544579194915b8084131561054e57925b8285131561055a579193915b81841315610566579092905b82841315610572579192915b8d8c038061058257879a5061064f565b806001141561059357869a5061064f565b80600214156105a457859a5061064f565b80600314156105b557849a5061064f565b80600414156105c657839a5061064f565b80600514156105d757829a5061064f565b80600614156105e857819a5061064f565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6b31206f7574206f6620626f756e647300000000000000000000000000000000604482015290519081900360640190fd5b8e8c038d8d141561066d57508a99506102b998505050505050505050565b8061068457509698506102b9975050505050505050565b806001141561069f57509598506102b9975050505050505050565b80600214156106ba57509498506102b9975050505050505050565b80600314156106d557509398506102b9975050505050505050565b80600414156106f057509298506102b9975050505050505050565b806005141561070b57509198506102b9975050505050505050565b806006141561072657509098506102b9975050505050505050565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6b32206f7574206f6620626f756e647300000000000000000000000000000000604482015290519081900360640190fd5b60008084600285850104815181106107a157fe5b602002602001015190506001840393506001830192505b600184019350808585815181106107cb57fe5b6020026020010151126107b8575b600183039250808584815181106107ec57fe5b6020026020010151136107d9578284101561085c5784838151811061080d57fe5b602002602001015185858151811061082157fe5b602002602001015186868151811061083557fe5b6020026020010187868151811061084857fe5b602090810291909101019190915252610865565b8291505061086a565b6107b8565b9392505050565b60008184111561088057600080fd5b8282111561088d57600080fd5b828410156108e457600784840310156108b95760006108af86868686876102d6565b5091506108fb9050565b60006108c686868661078d565b90508083116108d7578093506108de565b8060010194505b5061088d565b8484815181106108f057fe5b602002602001015190505b949350505050565b606080825167ffffffffffffffff8111801561091e57600080fd5b50604051908082528060200260200182016040528015610948578160200160208202803683370190505b50905060005b835181101561098a5783818151811061096357fe5b602002602001015182828151811061097757fe5b602090810291909101015260010161094e565b5092915050565b60008151600010610a0357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6c697374206d757374206e6f7420626520656d70747900000000000000000000604482015290519081900360640190fd5b81516002810460018216610a4257600080610a288660006001870360018703876101e5565b9092509050610a378282610a5b565b9450505050506101e0565b610a528460006001850384610871565b925050506101e0565b60008083128015610a6c5750600082135b80610a825750600083138015610a825750600082125b15610aa2576002610a938484610ad3565b81610a9a57fe5b059050610acd565b6000600280850781850701059050610ac9610ac36002860560028605610ad3565b82610ad3565b9150505b92915050565b6000828201818312801590610ae85750838112155b80610afd5750600083128015610afd57508381125b61086a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610b536021913960400191505060405180910390fdfe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77a2646970667358221220a4dbb7271efbfc649dd15c24010e46d4523ad18f20a64d00f779bd90dedc589364736f6c63430006060033";