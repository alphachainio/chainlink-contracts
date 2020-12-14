/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { Arrayish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { UpdatableConsumer } from "./UpdatableConsumer";

export class UpdatableConsumerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _specId: Arrayish,
    _ens: string,
    _node: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<UpdatableConsumer> {
    return super.deploy(_specId, _ens, _node, overrides) as Promise<
      UpdatableConsumer
    >;
  }
  getDeployTransaction(
    _specId: Arrayish,
    _ens: string,
    _node: Arrayish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_specId, _ens, _node, overrides);
  }
  attach(address: string): UpdatableConsumer {
    return super.attach(address) as UpdatableConsumer;
  }
  connect(signer: Signer): UpdatableConsumerFactory {
    return super.connect(signer) as UpdatableConsumerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpdatableConsumer {
    return new Contract(address, _abi, signerOrProvider) as UpdatableConsumer;
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
        name: "_price",
        type: "bytes32"
      }
    ],
    name: "fulfill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getChainlinkToken",
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
        name: "_currency",
        type: "string"
      }
    ],
    name: "requestEthereumPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getOracle",
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
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "currentPrice",
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
    constant: false,
    inputs: [],
    name: "updateOracle",
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
    name: "cancelRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_specId",
        type: "bytes32"
      },
      {
        name: "_ens",
        type: "address"
      },
      {
        name: "_node",
        type: "bytes32"
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
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: true,
        name: "price",
        type: "bytes32"
      }
    ],
    name: "RequestFulfilled",
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
  "0x608060405260016004553480156200001657600080fd5b5060405160608062001a19833981016040908152815160208301519190920151600683905562000050828264010000000062000059810204565b505050620004b1565b60008054600160a060020a038416600160a060020a03199091161781556001829055604080517f6c696e6b000000000000000000000000000000000000000000000000000000008152815190819003600401812060208083018690528284019190915282518083038401815260609092019283905281518493918291908401908083835b60208310620000fe5780518252601f199092019160209182019101620000dd565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600080547f0178b8bf000000000000000000000000000000000000000000000000000000008552600485018390529551919950600160a060020a039095169650630178b8bf955060248084019592945090928390030190829087803b1580156200018e57600080fd5b505af1158015620001a3573d6000803e3d6000fd5b505050506040513d6020811015620001ba57600080fd5b5051604080517f3b3b57de0000000000000000000000000000000000000000000000000000000081526004810185905290519192506200026491600160a060020a03841691633b3b57de9160248083019260209291908290030181600087803b1580156200022757600080fd5b505af11580156200023c573d6000803e3d6000fd5b505050506040513d60208110156200025357600080fd5b50516401000000006200027d810204565b620002776401000000006200029f810204565b50505050565b60028054600160a060020a031916600160a060020a0392909216919091179055565b600154604080517f6f7261636c6500000000000000000000000000000000000000000000000000008152815190819003600601812060208083019490945281830152815180820383018152606090910191829052805160009384939182918401908083835b60208310620003255780518252601f19909201916020918201910162000304565b51815160209384036101000a600019018019909216911617905260408051929094018290038220600080547f0178b8bf000000000000000000000000000000000000000000000000000000008552600485018390529551919950600160a060020a039095169650630178b8bf955060248084019592945090928390030190829087803b158015620003b557600080fd5b505af1158015620003ca573d6000803e3d6000fd5b505050506040513d6020811015620003e157600080fd5b5051604080517f3b3b57de0000000000000000000000000000000000000000000000000000000081526004810185905290519192506200048b91600160a060020a03841691633b3b57de9160248083019260209291908290030181600087803b1580156200044e57600080fd5b505af115801562000463573d6000803e3d6000fd5b505050506040513d60208110156200047a57600080fd5b50516401000000006200048f810204565b5050565b60038054600160a060020a031916600160a060020a0392909216919091179055565b61155880620004c16000396000f30060806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663042f2b658114610092578063165d35e1146100af5780636c0cae68146100ed578063833b1fce146101465780638dc654a21461015b5780639d1b464a14610170578063d6f124f014610197578063ec65d0f8146101ac575b600080fd5b34801561009e57600080fd5b506100ad6004356024356101ef565b005b3480156100bb57600080fd5b506100c4610338565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100f957600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100ad9436949293602493928401919081908401838280828437509497506103479650505050505050565b34801561015257600080fd5b506100c46104fa565b34801561016757600080fd5b506100ad610504565b34801561017c57600080fd5b506101856106c4565b60408051918252519081900360200190f35b3480156101a357600080fd5b506100ad6106ca565b3480156101b857600080fd5b506100ad6004356024357fffffffff00000000000000000000000000000000000000000000000000000000604435166064356106d4565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146102a957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a2604051829084907f0c2366233f634048c0f0458060d1228fab36d00f7c0ecf6bdf2d9c458503631190600090a35060075550565b60006103426106e0565b905090565b61034f6114df565b60606103816006543063042f2b657c0100000000000000000000000000000000000000000000000000000000026106fc565b915061044f6040805190810160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250608060405190810160405280604781526020017f68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f81526020017f6d2f646174612f70726963653f6673796d3d455448267473796d733d5553442c81526020017f4555522c4a505900000000000000000000000000000000000000000000000000815250846107279092919063ffffffff16565b60408051600180825281830190925290816020015b60608152602001906001900390816104645790505090508281600081518110151561048b57fe5b906020019060200201819052506104e26040805190810160405280600481526020017f706174680000000000000000000000000000000000000000000000000000000081525082846107569092919063ffffffff16565b6104f482670de0b6b3a76400006107c9565b50505050565b60006103426107f9565b600061050e6106e0565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925073ffffffffffffffffffffffffffffffffffffffff83169163a9059cbb91339184916370a082319160248083019260209291908290030181600087803b15801561058957600080fd5b505af115801561059d573d6000803e3d6000fd5b505050506040513d60208110156105b357600080fd5b5051604080517c010000000000000000000000000000000000000000000000000000000063ffffffff861602815273ffffffffffffffffffffffffffffffffffffffff909316600484015260248301919091525160448083019260209291908290030181600087803b15801561062857600080fd5b505af115801561063c573d6000803e3d6000fd5b505050506040513d602081101561065257600080fd5b505115156106c157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e61626c6520746f207472616e736665720000000000000000000000000000604482015290519081900360640190fd5b50565b60075481565b6106d2610815565b565b6104f484848484610a48565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b6107046114df565b61070c6114df565b61071e8186868663ffffffff610b8316565b95945050505050565b608083015161073c908363ffffffff610be516565b6080830151610751908263ffffffff610be516565b505050565b608083015160009061076e908463ffffffff610be516565b61077b8460800151610c02565b5060005b81518110156107bc576107b4828281518110151561079957fe5b6020908102909101015160808601519063ffffffff610be516565b60010161077f565b6104f48460800151610c0d565b6003546000906107f09073ffffffffffffffffffffffffffffffffffffffff168484610c18565b90505b92915050565b60035473ffffffffffffffffffffffffffffffffffffffff1690565b600154604080517f6f7261636c6500000000000000000000000000000000000000000000000000008152815190819003600601812060208083019490945281830152815180820383018152606090910191829052805160009384939182918401908083835b602083106108b757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161087a565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905260408051929094018290038220600080547f0178b8bf00000000000000000000000000000000000000000000000000000000855260048501839052955191995073ffffffffffffffffffffffffffffffffffffffff9095169650630178b8bf955060248084019592945090928390030190829087803b15801561097157600080fd5b505af1158015610985573d6000803e3d6000fd5b505050506040513d602081101561099b57600080fd5b5051604080517f3b3b57de000000000000000000000000000000000000000000000000000000008152600481018590529051919250610a449173ffffffffffffffffffffffffffffffffffffffff841691633b3b57de9160248083019260209291908290030181600087803b158015610a1357600080fd5b505af1158015610a27573d6000803e3d6000fd5b505050506040513d6020811015610a3d57600080fd5b5051610f7a565b5050565b60008481526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000008116909155905173ffffffffffffffffffffffffffffffffffffffff9091169186917fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c59190a2604080517f6ee4d55300000000000000000000000000000000000000000000000000000000815260048101879052602481018690527fffffffff000000000000000000000000000000000000000000000000000000008516604482015260648101849052905173ffffffffffffffffffffffffffffffffffffffff831691636ee4d55391608480830192600092919082900301818387803b158015610b6457600080fd5b505af1158015610b78573d6000803e3d6000fd5b505050505050505050565b610b8b6114df565b610b9b8560800151610100610fc1565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b610bf28260038351610ffb565b610751828263ffffffff6110f816565b6106c1816004611112565b6106c1816007611112565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b60208310610ccc57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610c8f565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052604080519290940182900390912060045460608a01526000818152600590925283822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c1617905592519295508594507fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99350919050a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea08584610dbd8761112b565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e5d578181015183820152602001610e45565b50505050905090810190601f168015610e8a5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610eab57600080fd5b505af1158015610ebf573d6000803e3d6000fd5b505050506040513d6020811015610ed557600080fd5b50511515610f6a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610fc9611514565b6020820615610fde5760208206602003820191505b506020828101829052604080518085526000815290920101905290565b6017811161101d576110178360ff8481166020021683176112dd565b50610751565b60ff81116110515761103e836018602060ff8616021763ffffffff6112dd16565b506110178382600163ffffffff6112f516565b61ffff811161108657611073836019602060ff8616021763ffffffff6112dd16565b506110178382600263ffffffff6112f516565b63ffffffff81116110bd576110aa83601a602060ff8616021763ffffffff6112dd16565b506110178382600463ffffffff6112f516565b67ffffffffffffffff8111610751576110e583601b602060ff8616021763ffffffff6112dd16565b506104f48382600863ffffffff6112f516565b611100611514565b6107f083846000015151848551611316565b61075182601f602060ff8516021763ffffffff6112dd16565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e5b83811015611220578181015183820152602001611208565b50505050905090810190601f16801561124d5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b6112e5611514565b6107f08384600001515184611408565b6112fd611514565b61130e848560000151518585611453565b949350505050565b61131e611514565b60008060008551851115151561133357600080fd5b8760200151858801111561135d5761135d886113558a602001518a89016114b1565b6002026114c8565b8751805188602083010194508089880111156113795788870182525b60208801935050505b602085106113c257815183527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09094019360209283019290910190611382565b505181516020949094036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909116931692909217909152509192915050565b611410611514565b6020840151831061142c5761142c8485602001516002026114c8565b8351805160208583010184815381861415611448576001820183525b509495945050505050565b61145b611514565b60008560200151858401111561147a5761147a868685016002026114c8565b6001836101000a03905085518386820101858319825116178152815185880111156114a55784870182525b50959695505050505050565b6000818311156114c25750816107f3565b50919050565b81516114d48383610fc1565b506104f483826110f8565b6040805160c08101825260008082526020820181905291810182905260608101919091526080810161150f611514565b905290565b604080518082019091526060815260006020820152905600a165627a7a72305820ad9f19b29cca73de44a49f950e1e3e04793af0e0a4c8e77dab8da6e7843541c60029";
