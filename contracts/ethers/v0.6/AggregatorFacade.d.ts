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

interface AggregatorFacadeInterface extends Interface {
  functions: {
    aggregator: TypedFunctionDescription<{ encode([]: []): string }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    description: TypedFunctionDescription<{ encode([]: []): string }>;

    getAnswer: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getRoundData: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([_roundId]: [BigNumberish]): string;
    }>;

    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRoundData: TypedFunctionDescription<{ encode([]: []): string }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;

    version: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, updatedAt]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;

    NewRound: TypedEventDescription<{
      encodeTopics([roundId, startedBy, startedAt]: [
        BigNumberish | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class AggregatorFacade extends Contract {
  connect(signerOrProvider: Signer | Provider | string): AggregatorFacade;
  attach(addressOrName: string): AggregatorFacade;
  deployed(): Promise<AggregatorFacade>;

  on(event: EventFilter | string, listener: Listener): AggregatorFacade;
  once(event: EventFilter | string, listener: Listener): AggregatorFacade;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): AggregatorFacade;
  removeAllListeners(eventName: EventFilter | string): AggregatorFacade;
  removeListener(eventName: any, listener: Listener): AggregatorFacade;

  interface: AggregatorFacadeInterface;

  functions: {
    aggregator(): Promise<string>;

    decimals(): Promise<number>;

    description(): Promise<string>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getRoundData(
      _roundId: BigNumberish
    ): Promise<{
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestRoundData(): Promise<{
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    latestTimestamp(): Promise<BigNumber>;

    version(): Promise<BigNumber>;
  };

  aggregator(): Promise<string>;

  decimals(): Promise<number>;

  description(): Promise<string>;

  getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

  getRoundData(
    _roundId: BigNumberish
  ): Promise<{
    roundId: BigNumber;
    answer: BigNumber;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

  latestAnswer(): Promise<BigNumber>;

  latestRound(): Promise<BigNumber>;

  latestRoundData(): Promise<{
    roundId: BigNumber;
    answer: BigNumber;
    startedAt: BigNumber;
    updatedAt: BigNumber;
    answeredInRound: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  latestTimestamp(): Promise<BigNumber>;

  version(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      updatedAt: null
    ): EventFilter;

    NewRound(
      roundId: BigNumberish | null,
      startedBy: string | null,
      startedAt: null
    ): EventFilter;
  };

  estimate: {
    aggregator(): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    description(): Promise<BigNumber>;

    getAnswer(_roundId: BigNumberish): Promise<BigNumber>;

    getRoundData(_roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(_roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestRoundData(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;

    version(): Promise<BigNumber>;
  };
}
