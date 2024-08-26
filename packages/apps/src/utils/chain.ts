import { chainsMap } from '@galacticcouncil/xcm-cfg';
import {
  AnyChain,
  AnyParachain,
  Asset,
  EvmChain,
  Parachain,
} from '@galacticcouncil/xcm-core';

import { Ecosystem } from '../db';

const chains = Array.from(chainsMap.values());

export function getChainKey(paraId: number, ecosystem: Ecosystem) {
  const chainEcosystem = ecosystem ?? Ecosystem.Polkadot;
  const chain = chains.find(
    (chain: AnyParachain) =>
      chain.parachainId === paraId &&
      chain.ecosystem.toString() === chainEcosystem,
  );
  if (chain) {
    return chain.key;
  }
  return null;
}

export function useH160AddressSpace(chain: AnyChain) {
  if (chain instanceof Parachain) {
    return chain.h160AccOnly;
  }
  return chain.isEvmChain();
}

export function useSs58AddressSpace(chain: AnyChain) {
  if (chain instanceof Parachain) {
    return !chain.h160AccOnly;
  }
  return false;
}

export function getChainAssetId(chain: AnyChain, asset: Asset) {
  const selected = Array.from(chain.assetsData.values()).find((a) => {
    if (asset.key === 'eth') {
      // tmp fix (eth using weth key in xcm-sdk)
      return a.asset.key === 'weth';
    }
    return a.asset.key === asset.key;
  });
  return selected.id || '0';
}

export function getChainId(chain: AnyChain) {
  if (chain instanceof EvmChain) {
    return chain.defEvm.id;
  }
  if (chain instanceof Parachain) {
    return chain.parachainId;
  }
  throw new Error('Unsupported chain type: ' + chain);
}

export function getChainEcosystem(chain: AnyChain) {
  if (chain instanceof EvmChain) {
    return 'ethereum';
  }
  if (chain instanceof Parachain) {
    return chain.ecosystem.toLowerCase();
  }
  throw new Error('Unsupported chain type: ' + chain);
}
