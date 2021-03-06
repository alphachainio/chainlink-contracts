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

interface LinkTokenReceiverInterface extends Interface {
  functions: {
    getChainlinkToken: TypedFunctionDescription<{ encode([]: []): string }>;

    onTokenTransfer: TypedFunctionDescription<{
      encode([_sender, _amount, _data]: [
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class LinkTokenReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): LinkTokenReceiver;
  attach(addressOrName: string): LinkTokenReceiver;
  deployed(): Promise<LinkTokenReceiver>;

  on(event: EventFilter | string, listener: Listener): LinkTokenReceiver;
  once(event: EventFilter | string, listener: Listener): LinkTokenReceiver;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): LinkTokenReceiver;
  removeAllListeners(eventName: EventFilter | string): LinkTokenReceiver;
  removeListener(eventName: any, listener: Listener): LinkTokenReceiver;

  interface: LinkTokenReceiverInterface;

  functions: {
    getChainlinkToken(): Promise<string>;

    onTokenTransfer(
      _sender: string,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  getChainlinkToken(): Promise<string>;

  onTokenTransfer(
    _sender: string,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    getChainlinkToken(): Promise<BigNumber>;

    onTokenTransfer(
      _sender: string,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;
  };
}
