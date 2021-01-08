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

interface ChainlinkClientInterface extends Interface {
  functions: {};

  events: {
    ChainlinkCancelled: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;

    ChainlinkFulfilled: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;

    ChainlinkRequested: TypedEventDescription<{
      encodeTopics([id]: [Arrayish | null]): string[];
    }>;
  };
}

export class ChainlinkClient extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ChainlinkClient;
  attach(addressOrName: string): ChainlinkClient;
  deployed(): Promise<ChainlinkClient>;

  on(event: EventFilter | string, listener: Listener): ChainlinkClient;
  once(event: EventFilter | string, listener: Listener): ChainlinkClient;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ChainlinkClient;
  removeAllListeners(eventName: EventFilter | string): ChainlinkClient;
  removeListener(eventName: any, listener: Listener): ChainlinkClient;

  interface: ChainlinkClientInterface;

  functions: {};

  filters: {
    ChainlinkCancelled(id: Arrayish | null): EventFilter;

    ChainlinkFulfilled(id: Arrayish | null): EventFilter;

    ChainlinkRequested(id: Arrayish | null): EventFilter;
  };

  estimate: {};
}
