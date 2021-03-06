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

interface OwnedTestHelperInterface extends Interface {
  functions: {
    acceptOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    modifierOnlyOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_to]: [string]): string;
    }>;
  };

  events: {
    Here: TypedEventDescription<{ encodeTopics([]: []): string[] }>;

    OwnershipTransferRequested: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([from, to]: [string | null, string | null]): string[];
    }>;
  };
}

export class OwnedTestHelper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): OwnedTestHelper;
  attach(addressOrName: string): OwnedTestHelper;
  deployed(): Promise<OwnedTestHelper>;

  on(event: EventFilter | string, listener: Listener): OwnedTestHelper;
  once(event: EventFilter | string, listener: Listener): OwnedTestHelper;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): OwnedTestHelper;
  removeAllListeners(eventName: EventFilter | string): OwnedTestHelper;
  removeListener(eventName: any, listener: Listener): OwnedTestHelper;

  interface: OwnedTestHelperInterface;

  functions: {
    acceptOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    modifierOnlyOwner(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;

    transferOwnership(
      _to: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  modifierOnlyOwner(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  owner(): Promise<string>;

  transferOwnership(
    _to: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Here(): EventFilter;

    OwnershipTransferRequested(
      from: string | null,
      to: string | null
    ): EventFilter;

    OwnershipTransferred(from: string | null, to: string | null): EventFilter;
  };

  estimate: {
    acceptOwnership(): Promise<BigNumber>;

    modifierOnlyOwner(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    transferOwnership(_to: string): Promise<BigNumber>;
  };
}
