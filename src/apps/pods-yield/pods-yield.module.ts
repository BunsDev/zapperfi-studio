import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { PodsYieldViemContractFactory } from './contracts';
import { EthereumPodsYieldQueueContractPositionFetcher } from './ethereum/pods-yield.queue.contract-position-fetcher';
import { EthereumPodsYieldStrategyTokenFetcher } from './ethereum/pods-yield.strategy.token-fetcher';

@Module({
  providers: [
    EthereumPodsYieldQueueContractPositionFetcher,
    EthereumPodsYieldStrategyTokenFetcher,

    PodsYieldViemContractFactory,
  ],
})
export class PodsYieldAppModule extends AbstractApp() {}
