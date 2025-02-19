import { AbracadabraCauldronContractPositionDefinition } from '../common/abracadabra.cauldron.contract-position-fetcher';
import { HOURS_PER_YEAR } from '../common/abracadabra.common.constants';

export const ARBITRUM_CAULDRONS: AbracadabraCauldronContractPositionDefinition[] = [
  { version: 'V2', type: 'REGULAR', address: '0xc89958b03a55b5de2221acb25b58b89a000215e6' }, // wETH
  { version: 'V4', type: 'GLP', address: '0x5698135ca439f21a57bddbe8b582c62f090406d5' }, // GLP
  { version: 'V4', type: 'REGULAR', address: '0x726413d7402ff180609d0ebc79506df8633701b1' }, // magicGLP
  { version: 'V4', type: 'REGULAR', address: '0x4f9737e994da9811b8830775fd73e2f1c8e40741' }, // gmARB
  { version: 'V4', type: 'REGULAR', address: '0xd7659d913430945600dfe875434b6d80646d552a' }, // gmBTC
  { version: 'V4', type: 'REGULAR', address: '0x2b02bbeab8ecab792d3f4dda7a76f63aa21934fa' }, // gmETH
  { version: 'V4', type: 'REGULAR', address: '0x7962acfcfc2ccebc810045391d60040f635404fb' }, // gmSOL
  { version: 'V4', type: 'REGULAR', address: '0x66805f6e719d7e67d46e8b2501c1237980996c6a' }, // gmLINK
];

export const ARBITRUM_GLP_TOKEN_ADDRESS = '0x4277f8f2c384827b5273592ff7cebd9f2c1ac258';
export const AVALANCHE_GLP_TOKEN_ADDRESS = '0x01234181085565ed162a948b6a5e88758cd7c7b8';

export const CURVE_MIM_3POOL_FARM = '0x839de324a1ab773f76a53900d70ac1b913d2b387';

export const M_SPELL_ADDRESS = '0x1df188958a8674b5177f77667b8d173c3cdd9e51';
export const S_SPELL_ADDRESS = '0xf7428ffcb2581a2804998efbb036a43255c8a8d3';
export const SPELL_ADDRESS = '0xf7428ffcb2581a2804998efbb036a43255c8a8d3';

export const MAGIC_GLP_ADDRESS = '0x85667409a723684fe1e57dd1abde8d88c2f54214';
export const GLP_REWARD_TRACKER_ADDRESSES = [
  '0x4e971a87900b931ff39d1aad67697f49835400b6',
  '0x1addd80e6039594ee970e5872d247bf0414c8903',
];
export const MAGIC_GLP_HARVESTOR_ADDRESS = '0xc99a4863173ef52ccb7ea05440da0e37ba39c139';
export const MAGIC_GLP_ANNUAL_HARVESTS = HOURS_PER_YEAR;
