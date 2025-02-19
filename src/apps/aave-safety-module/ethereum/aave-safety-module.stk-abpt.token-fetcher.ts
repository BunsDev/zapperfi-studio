import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { ZERO_ADDRESS } from '~app-toolkit/constants/address';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import { GetDataPropsParams } from '~position/template/app-token.template.types';

import { AaveSafetyModuleViemContractFactory } from '../contracts';
import { AaveStkAbpt } from '../contracts/viem';

@PositionTemplate()
export class EthereumAaveSafetyModuleStkAbptTokenFetcher extends AppTokenTemplatePositionFetcher<AaveStkAbpt> {
  groupLabel = 'stkABPT';

  stkApyHelperAddress = '0xa82247b44750ae23076d6746a9b5b8dc0ecbb646';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(AaveSafetyModuleViemContractFactory)
    protected readonly contractFactory: AaveSafetyModuleViemContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string) {
    return this.contractFactory.aaveStkAbpt({ address, network: this.network });
  }

  async getAddresses() {
    return ['0xa1116930326d21fb917d5a27f1e9943a9595fb47'];
  }

  async getUnderlyingTokenDefinitions() {
    return [{ address: '0x41a08648c3766f9f9d85598ff102a08f4ef84f84', network: this.network }];
  }

  async getPricePerShare() {
    return [1];
  }

  async getApy({ multicall }: GetDataPropsParams<AaveStkAbpt>) {
    const stkApyHelperContract = this.contractFactory.aaveStkApyHelper({
      network: this.network,
      address: this.stkApyHelperAddress,
    });

    const stkAaveData = await multicall.wrap(stkApyHelperContract).read.getStkBptData([ZERO_ADDRESS]);

    const apy = (+stkAaveData[5] / 1e4) * 100;
    return apy;
  }
}
