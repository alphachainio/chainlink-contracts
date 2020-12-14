/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ChainlinkTestHelper } from "./ChainlinkTestHelper";

export class ChainlinkTestHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ChainlinkTestHelper> {
    return super.deploy(overrides) as Promise<ChainlinkTestHelper>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ChainlinkTestHelper {
    return super.attach(address) as ChainlinkTestHelper;
  }
  connect(signer: Signer): ChainlinkTestHelperFactory {
    return super.connect(signer) as ChainlinkTestHelperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkTestHelper {
    return new Contract(address, _abi, signerOrProvider) as ChainlinkTestHelper;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "closeEvent",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "string"
      },
      {
        name: "_value",
        type: "uint256"
      }
    ],
    name: "addUint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "string"
      },
      {
        name: "_value",
        type: "bytes"
      }
    ],
    name: "addBytes",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "string"
      },
      {
        name: "_values",
        type: "bytes32[]"
      }
    ],
    name: "addStringArray",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "string"
      },
      {
        name: "_value",
        type: "int256"
      }
    ],
    name: "addInt",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "data",
        type: "bytes"
      }
    ],
    name: "setBuffer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_key",
        type: "string"
      },
      {
        name: "_value",
        type: "string"
      }
    ],
    name: "add",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "payload",
        type: "bytes"
      }
    ],
    name: "RequestData",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ba0806100206000396000f3fe6080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166303dc532681146100875780630e734a581461009e5780632255beb01461015357806347655b1b1461028d5780635e31692e146103c4578063cc39406f14610479578063ebdf86ca1461052c575b600080fd5b34801561009357600080fd5b5061009c610666565b005b3480156100aa57600080fd5b5061009c600480360360408110156100c157600080fd5b8101906020810181356401000000008111156100dc57600080fd5b8201836020820111156100ee57600080fd5b8035906020019184600183028401116401000000008311171561011057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610733915050565b34801561015f57600080fd5b5061009c6004803603604081101561017657600080fd5b81019060208101813564010000000081111561019157600080fd5b8201836020820111156101a357600080fd5b803590602001918460018302840111640100000000831117156101c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561021857600080fd5b82018360208201111561022a57600080fd5b8035906020019184600183028401116401000000008311171561024c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109ab945050505050565b34801561029957600080fd5b5061009c600480360360408110156102b057600080fd5b8101906020810181356401000000008111156102cb57600080fd5b8201836020820111156102dd57600080fd5b803590602001918460018302840111640100000000831117156102ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561035257600080fd5b82018360208201111561036457600080fd5b8035906020019184602083028401116401000000008311171561038657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610b2f945050505050565b3480156103d057600080fd5b5061009c600480360360408110156103e757600080fd5b81019060208101813564010000000081111561040257600080fd5b82018360208201111561041457600080fd5b8035906020019184600183028401116401000000008311171561043657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610e2f915050565b34801561048557600080fd5b5061009c6004803603602081101561049c57600080fd5b8101906020810181356401000000008111156104b757600080fd5b8201836020820111156104c957600080fd5b803590602001918460018302840111640100000000831117156104eb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fb3945050505050565b34801561053857600080fd5b5061009c6004803603604081101561054f57600080fd5b81019060208101813564010000000081111561056a57600080fd5b82018360208201111561057c57600080fd5b8035906020019184600183028401116401000000008311171561059e57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156105f157600080fd5b82018360208201111561060357600080fd5b8035906020019184600183028401116401000000008311171561062557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611229945050505050565b6040805160208082526003805460027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018416150201909116049183018290527f84485ae823e5c366e9581c146349e23f73b2f459d9eee1b9f15f36aac3b3145a939092918291820190849080156107235780601f106106f857610100808354040283529160200191610723565b820191906000526020600020905b81548152906001019060200180831161070657829003601f168201915b50509250505060405180910390a1565b61073b611a8c565b6040805160a0810182526000805482526001805473ffffffffffffffffffffffffffffffffffffffff8116602080860191909152740100000000000000000000000000000000000000009091047c0100000000000000000000000000000000000000000000000000000000027fffffffff0000000000000000000000000000000000000000000000000000000016848601526002805460608087019190915286516003805461010096811615969096027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190951692909204601f8101849004909302820181018752958101828152949593946080870194919392849284919084018282801561088c5780601f106108615761010080835404028352916020019161088c565b820191906000526020600020905b81548152906001019060200180831161086f57829003601f168201915b50505091835250506001919091015460209091015290525090506108b781848463ffffffff6113ad16565b805160009081556020808301516001805460408601517c0100000000000000000000000000000000000000000000000000000000900474010000000000000000000000000000000000000000027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff9094167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179290921691909117905560608301516002556080830151805180518594936003926109969284929190910190611ac1565b50602082015181600101555050905050505050565b6109b3611a8c565b6040805160a0810182526000805482526001805473ffffffffffffffffffffffffffffffffffffffff8116602080860191909152740100000000000000000000000000000000000000009091047c0100000000000000000000000000000000000000000000000000000000027fffffffff0000000000000000000000000000000000000000000000000000000016848601526002805460608087019190915286516003805461010096811615969096027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190951692909204601f81018490049093028201810187529581018281529495939460808701949193928492849190840182828015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b50505091835250506001919091015460209091015290525090506108b781848463ffffffff6113dc16565b60608151604051908082528060200260200182016040528015610b6657816020015b6060815260200190600190039081610b515790505b50905060005b8251811015610bb557610b958382815181101515610b8657fe5b90602001906020020151611406565b8282815181101515610ba357fe5b60209081029091010152600101610b6c565b50610bbe611a8c565b6040805160a0810182526000805482526001805473ffffffffffffffffffffffffffffffffffffffff8116602080860191909152740100000000000000000000000000000000000000009091047c0100000000000000000000000000000000000000000000000000000000027fffffffff0000000000000000000000000000000000000000000000000000000016848601526002805460608087019190915286516003805461010096811615969096027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190951692909204601f81018490049093028201810187529581018281529495939460808701949193928492849190840182828015610d0f5780601f10610ce457610100808354040283529160200191610d0f565b820191906000526020600020905b815481529060010190602001808311610cf257829003601f168201915b5050509183525050600191909101546020909101529052509050610d3a81858463ffffffff61159b16565b805160009081556020808301516001805460408601517c0100000000000000000000000000000000000000000000000000000000900474010000000000000000000000000000000000000000027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff9094167fffffffffffffffffffffffff000000000000000000000000000000000000000090921691909117929092169190911790556060830151600255608083015180518051859493600392610e199284929190910190611ac1565b5060208201518160010155505090505050505050565b610e37611a8c565b6040805160a0810182526000805482526001805473ffffffffffffffffffffffffffffffffffffffff8116602080860191909152740100000000000000000000000000000000000000009091047c0100000000000000000000000000000000000000000000000000000000027fffffffff0000000000000000000000000000000000000000000000000000000016848601526002805460608087019190915286516003805461010096811615969096027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190951692909204601f81018490049093028201810187529581018281529495939460808701949193928492849190840182828015610f885780601f10610f5d57610100808354040283529160200191610f88565b820191906000526020600020905b815481529060010190602001808311610f6b57829003601f168201915b50505091835250506001919091015460209091015290525090506108b781848463ffffffff61160b16565b610fbb611a8c565b6040805160a0810182526000805482526001805473ffffffffffffffffffffffffffffffffffffffff8116602080860191909152740100000000000000000000000000000000000000009091047c0100000000000000000000000000000000000000000000000000000000027fffffffff0000000000000000000000000000000000000000000000000000000016848601526002805460608087019190915286516003805461010096811615969096027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190951692909204601f8101849004909302820181018752958101828152949593946080870194919392849284919084018282801561110c5780601f106110e15761010080835404028352916020019161110c565b820191906000526020600020905b8154815290600101906020018083116110ef57829003601f168201915b5050509183525050600191909101546020909101529052509050611136818363ffffffff61163516565b805160009081556020808301516001805460408601517c0100000000000000000000000000000000000000000000000000000000900474010000000000000000000000000000000000000000027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff9094167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179290921691909117905560608301516002556080830151805180518594936003926112159284929190910190611ac1565b506020820151816001015550509050505050565b611231611a8c565b6040805160a0810182526000805482526001805473ffffffffffffffffffffffffffffffffffffffff8116602080860191909152740100000000000000000000000000000000000000009091047c0100000000000000000000000000000000000000000000000000000000027fffffffff0000000000000000000000000000000000000000000000000000000016848601526002805460608087019190915286516003805461010096811615969096027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190951692909204601f810184900490930282018101875295810182815294959394608087019491939284928491908401828280156113825780601f1061135757610100808354040283529160200191611382565b820191906000526020600020905b81548152906001019060200180831161136557829003601f168201915b50505091835250506001919091015460209091015290525090506108b781848463ffffffff61165316565b60808301516113c2908363ffffffff61167d16565b60808301516113d7908263ffffffff61169a16565b505050565b60808301516113f1908363ffffffff61167d16565b60808301516113d7908263ffffffff6116aa16565b6040805160208082528183019092526060918291906020820181803883390190505090506000805b60208110156114b7576008810260020a85027fff000000000000000000000000000000000000000000000000000000000000008116156114ae5780848481518110151561147757fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001909201915b5060010161142e565b506060816040519080825280601f01601f1916602001820160405280156114e5576020820181803883390190505b50905060005b8281101561159257838181518110151561150157fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002828281518110151561155a57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016114eb565b50949350505050565b60808301516115b0908363ffffffff61167d16565b6115bd83608001516116b7565b60005b81518110156115fd576115f582828151811015156115da57fe5b6020908102909101015160808601519063ffffffff61167d16565b6001016115c0565b506113d783608001516116c5565b6080830151611620908363ffffffff61167d16565b60808301516113d7908263ffffffff6116d016565b61164482608001518251611717565b506113d7826080015182611757565b6080830151611668908363ffffffff61167d16565b60808301516113d7908263ffffffff61167d16565b61168a8260038351611778565b6113d7828263ffffffff61175716565b6116a682600083611778565b5050565b61168a8260028351611778565b6116c281600461187b565b50565b6116c281600761187b565b600081126116e9576116e482600083611778565b6116a6565b6116a6826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03611778565b61171f611b3f565b60208206156117345760208206602003820191505b506020808301829052604080518085526000815283019091019052815b92915050565b61175f611b3f565b61177183846000015151848551611894565b9392505050565b6017811161179a576117948360ff84811660200216831761197c565b506113d7565b60ff81116117ce576117bb836018602060ff8616021763ffffffff61197c16565b506117948382600163ffffffff61199416565b61ffff8111611803576117f0836019602060ff8616021763ffffffff61197c16565b506117948382600263ffffffff61199416565b63ffffffff811161183a5761182783601a602060ff8616021763ffffffff61197c16565b506117948382600463ffffffff61199416565b67ffffffffffffffff81116113d75761186283601b602060ff8616021763ffffffff61197c16565b506118758382600863ffffffff61199416565b50505050565b6113d782601f602060ff8516021763ffffffff61197c16565b61189c611b3f565b82518211156118aa57600080fd5b846020015182850111156118d4576118d4856118cc87602001518786016119b5565b6002026119cc565b6000808651805187602083010193508088870111156118f35787860182525b505050602084015b6020841061193857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090930192602091820191016118fb565b5181517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60208690036101000a019081169019919091161790525083949350505050565b611984611b3f565b61177183846000015151846119e3565b61199c611b3f565b6119ad848560000151518585611a2e565b949350505050565b6000818311156119c6575081611751565b50919050565b81516119d88383611717565b506118758382611757565b6119eb611b3f565b60208401518310611a0757611a078485602001516002026119cc565b8351805160208583010184815381861415611a23576001820183525b509495945050505050565b611a36611b3f565b84602001518483011115611a5357611a53858584016002026119cc565b60006001836101000a0390508551838682010185831982511617815281518588011115611a805784870182525b50959695505050505050565b6040805160c081018252600080825260208201819052918101829052606081019190915260808101611abc611b3f565b905290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b0257805160ff1916838001178555611b2f565b82800160010185558215611b2f579182015b82811115611b2f578251825591602001919060010190611b14565b50611b3b929150611b57565b5090565b60408051808201909152606081526000602082015290565b611b7191905b80821115611b3b5760008155600101611b5d565b9056fea165627a7a72305820499cba65971a3bbc53d043defe9afc429220d297eef55eb15feecf25da33ed6a0029";
