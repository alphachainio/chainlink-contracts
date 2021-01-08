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

interface CoordinatorInterface extends Interface {
  functions: {
    withdrawableTokens: TypedFunctionDescription<{
      encode([]: [string]): string;
    }>;

    fulfillOracleRequest: TypedFunctionDescription<{
      encode([_requestId, _data]: [Arrayish, Arrayish]): string;
    }>;

    oracleRequest: TypedFunctionDescription<{
      encode([
        _sender,
        _amount,
        _sAId,
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

    EXPIRY_TIME: TypedFunctionDescription<{ encode([]: []): string }>;

    getId: TypedFunctionDescription<{
      encode([_agreementData]: [Arrayish]): string;
    }>;

    cancelOracleRequest: TypedFunctionDescription<{
      encode([, , ,]: [Arrayish, BigNumberish, Arrayish, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{
      encode([_account]: [string]): string;
    }>;

    serviceAgreements: TypedFunctionDescription<{
      encode([]: [Arrayish]): string;
    }>;

    depositFunds: TypedFunctionDescription<{
      encode([_sender, _amount]: [string, BigNumberish]): string;
    }>;

    onTokenTransfer: TypedFunctionDescription<{
      encode([_sender, _amount, _data]: [
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    initiateServiceAgreement: TypedFunctionDescription<{
      encode([_serviceAgreementData, _oracleSignaturesData]: [
        Arrayish,
        Arrayish
      ]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_recipient, _amount]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    OracleRequest: TypedEventDescription<{
      encodeTopics([
        sAId,
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

    NewServiceAgreement: TypedEventDescription<{
      encodeTopics([said, requestDigest]: [
        Arrayish | null,
        Arrayish | null
      ]): string[];
    }>;

    CancelOracleRequest: TypedEventDescription<{
      encodeTopics([internalId]: [null]): string[];
    }>;
  };
}

export class Coordinator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Coordinator;
  attach(addressOrName: string): Coordinator;
  deployed(): Promise<Coordinator>;

  on(event: EventFilter | string, listener: Listener): Coordinator;
  once(event: EventFilter | string, listener: Listener): Coordinator;
  addListener(eventName: EventFilter | string, listener: Listener): Coordinator;
  removeAllListeners(eventName: EventFilter | string): Coordinator;
  removeListener(eventName: any, listener: Listener): Coordinator;

  interface: CoordinatorInterface;

  functions: {
    withdrawableTokens(arg0: string): Promise<BigNumber>;

    fulfillOracleRequest(
      _requestId: Arrayish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    oracleRequest(
      _sender: string,
      _amount: BigNumberish,
      _sAId: Arrayish,
      _callbackAddress: string,
      _callbackFunctionId: Arrayish,
      _nonce: BigNumberish,
      _dataVersion: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    EXPIRY_TIME(): Promise<BigNumber>;

    getId(_agreementData: Arrayish): Promise<string>;

    cancelOracleRequest(
      arg0: Arrayish,
      arg1: BigNumberish,
      arg2: Arrayish,
      arg3: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(_account: string): Promise<BigNumber>;

    serviceAgreements(
      arg0: Arrayish
    ): Promise<{
      payment: BigNumber;
      expiration: BigNumber;
      endAt: BigNumber;
      requestDigest: string;
      aggregator: string;
      aggInitiateJobSelector: string;
      aggFulfillSelector: string;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: string;
      4: string;
      5: string;
      6: string;
    }>;

    depositFunds(
      _sender: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onTokenTransfer(
      _sender: string,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    initiateServiceAgreement(
      _serviceAgreementData: Arrayish,
      _oracleSignaturesData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      _recipient: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  withdrawableTokens(arg0: string): Promise<BigNumber>;

  fulfillOracleRequest(
    _requestId: Arrayish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  oracleRequest(
    _sender: string,
    _amount: BigNumberish,
    _sAId: Arrayish,
    _callbackAddress: string,
    _callbackFunctionId: Arrayish,
    _nonce: BigNumberish,
    _dataVersion: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  EXPIRY_TIME(): Promise<BigNumber>;

  getId(_agreementData: Arrayish): Promise<string>;

  cancelOracleRequest(
    arg0: Arrayish,
    arg1: BigNumberish,
    arg2: Arrayish,
    arg3: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(_account: string): Promise<BigNumber>;

  serviceAgreements(
    arg0: Arrayish
  ): Promise<{
    payment: BigNumber;
    expiration: BigNumber;
    endAt: BigNumber;
    requestDigest: string;
    aggregator: string;
    aggInitiateJobSelector: string;
    aggFulfillSelector: string;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: string;
    4: string;
    5: string;
    6: string;
  }>;

  depositFunds(
    _sender: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  onTokenTransfer(
    _sender: string,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  initiateServiceAgreement(
    _serviceAgreementData: Arrayish,
    _oracleSignaturesData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdraw(
    _recipient: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    OracleRequest(
      sAId: Arrayish | null,
      requester: null,
      requestId: null,
      payment: null,
      callbackAddr: null,
      callbackFunctionId: null,
      cancelExpiration: null,
      dataVersion: null,
      data: null
    ): EventFilter;

    NewServiceAgreement(
      said: Arrayish | null,
      requestDigest: Arrayish | null
    ): EventFilter;

    CancelOracleRequest(internalId: null): EventFilter;
  };

  estimate: {
    withdrawableTokens(arg0: string): Promise<BigNumber>;

    fulfillOracleRequest(
      _requestId: Arrayish,
      _data: Arrayish
    ): Promise<BigNumber>;

    oracleRequest(
      _sender: string,
      _amount: BigNumberish,
      _sAId: Arrayish,
      _callbackAddress: string,
      _callbackFunctionId: Arrayish,
      _nonce: BigNumberish,
      _dataVersion: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    EXPIRY_TIME(): Promise<BigNumber>;

    getId(_agreementData: Arrayish): Promise<BigNumber>;

    cancelOracleRequest(
      arg0: Arrayish,
      arg1: BigNumberish,
      arg2: Arrayish,
      arg3: BigNumberish
    ): Promise<BigNumber>;

    balanceOf(_account: string): Promise<BigNumber>;

    serviceAgreements(arg0: Arrayish): Promise<BigNumber>;

    depositFunds(_sender: string, _amount: BigNumberish): Promise<BigNumber>;

    onTokenTransfer(
      _sender: string,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    initiateServiceAgreement(
      _serviceAgreementData: Arrayish,
      _oracleSignaturesData: Arrayish
    ): Promise<BigNumber>;

    withdraw(_recipient: string, _amount: BigNumberish): Promise<BigNumber>;
  };
}