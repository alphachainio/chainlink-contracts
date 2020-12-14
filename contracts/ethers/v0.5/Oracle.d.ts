/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface OracleInterface extends Interface {
  functions: {
    getChainlinkToken: TypedFunctionDescription<{ encode([]: []): string }>;

    oracleRequest: TypedFunctionDescription<{
      encode([
        _sender,
        _payment,
        _specId,
        _callbackAddress,
        _callbackFunctionId,
        _nonce,
        _dataVersion,
        _data
      ]: [
        string,
        BigNumberish,
        Arrayish,
        string,
        Arrayish,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    fulfillOracleRequest: TypedFunctionDescription<{
      encode([
        _requestId,
        _payment,
        _callbackAddress,
        _callbackFunctionId,
        _expiration,
        _data
      ]: [
        Arrayish,
        BigNumberish,
        string,
        Arrayish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    EXPIRY_TIME: TypedFunctionDescription<{ encode([]: []): string }>;

    withdrawable: TypedFunctionDescription<{ encode([]: []): string }>;

    cancelOracleRequest: TypedFunctionDescription<{
      encode([_requestId, _payment, _callbackFunc, _expiration]: [
        Arrayish,
        BigNumberish,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    setFulfillmentPermission: TypedFunctionDescription<{
      encode([_node, _allowed]: [string, boolean]): string;
    }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    isOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    onTokenTransfer: TypedFunctionDescription<{
      encode([_sender, _amount, _data]: [
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    getAuthorizationStatus: TypedFunctionDescription<{
      encode([_node]: [string]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([newOwner]: [string]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_recipient, _amount]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    OracleRequest: TypedEventDescription<{
      encodeTopics([
        specId,
        requester,
        requestId,
        payment,
        callbackAddr,
        callbackFunctionId,
        cancelExpiration,
        dataVersion,
        data
      ]: [
        Arrayish | null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    CancelOracleRequest: TypedEventDescription<{
      encodeTopics([requestId]: [Arrayish | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class Oracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Oracle;
  attach(addressOrName: string): Oracle;
  deployed(): Promise<Oracle>;

  on(event: EventFilter | string, listener: Listener): Oracle;
  once(event: EventFilter | string, listener: Listener): Oracle;
  addListener(eventName: EventFilter | string, listener: Listener): Oracle;
  removeAllListeners(eventName: EventFilter | string): Oracle;
  removeListener(eventName: any, listener: Listener): Oracle;

  interface: OracleInterface;

  functions: {
    getChainlinkToken(): Promise<string>;

    oracleRequest(
      _sender: string,
      _payment: BigNumberish,
      _specId: Arrayish,
      _callbackAddress: string,
      _callbackFunctionId: Arrayish,
      _nonce: BigNumberish,
      _dataVersion: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    fulfillOracleRequest(
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackAddress: string,
      _callbackFunctionId: Arrayish,
      _expiration: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    EXPIRY_TIME(): Promise<BigNumber>;

    withdrawable(): Promise<BigNumber>;

    cancelOracleRequest(
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackFunc: Arrayish,
      _expiration: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setFulfillmentPermission(
      _node: string,
      _allowed: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;

    isOwner(): Promise<boolean>;

    onTokenTransfer(
      _sender: string,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getAuthorizationStatus(_node: string): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  getChainlinkToken(): Promise<string>;

  oracleRequest(
    _sender: string,
    _payment: BigNumberish,
    _specId: Arrayish,
    _callbackAddress: string,
    _callbackFunctionId: Arrayish,
    _nonce: BigNumberish,
    _dataVersion: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  fulfillOracleRequest(
    _requestId: Arrayish,
    _payment: BigNumberish,
    _callbackAddress: string,
    _callbackFunctionId: Arrayish,
    _expiration: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  EXPIRY_TIME(): Promise<BigNumber>;

  withdrawable(): Promise<BigNumber>;

  cancelOracleRequest(
    _requestId: Arrayish,
    _payment: BigNumberish,
    _callbackFunc: Arrayish,
    _expiration: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setFulfillmentPermission(
    _node: string,
    _allowed: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  owner(): Promise<string>;

  isOwner(): Promise<boolean>;

  onTokenTransfer(
    _sender: string,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getAuthorizationStatus(_node: string): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdraw(
    _recipient: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    OracleRequest(
      specId: Arrayish | null,
      requester: null,
      requestId: null,
      payment: null,
      callbackAddr: null,
      callbackFunctionId: null,
      cancelExpiration: null,
      dataVersion: null,
      data: null
    ): EventFilter;

    CancelOracleRequest(requestId: Arrayish | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    getChainlinkToken(): Promise<BigNumber>;

    oracleRequest(
      _sender: string,
      _payment: BigNumberish,
      _specId: Arrayish,
      _callbackAddress: string,
      _callbackFunctionId: Arrayish,
      _nonce: BigNumberish,
      _dataVersion: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    fulfillOracleRequest(
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackAddress: string,
      _callbackFunctionId: Arrayish,
      _expiration: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    EXPIRY_TIME(): Promise<BigNumber>;

    withdrawable(): Promise<BigNumber>;

    cancelOracleRequest(
      _requestId: Arrayish,
      _payment: BigNumberish,
      _callbackFunc: Arrayish,
      _expiration: BigNumberish
    ): Promise<BigNumber>;

    setFulfillmentPermission(
      _node: string,
      _allowed: boolean
    ): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    isOwner(): Promise<BigNumber>;

    onTokenTransfer(
      _sender: string,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    getAuthorizationStatus(_node: string): Promise<BigNumber>;

    transferOwnership(newOwner: string): Promise<BigNumber>;

    withdraw(_recipient: string, _amount: BigNumberish): Promise<BigNumber>;
  };
}
