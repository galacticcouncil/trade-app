import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../../base.css';

import '../../component/AssetList';
import '../../component/AssetListItem';
import '../../component/IconButton';
import '../../component/Paper';
import '../../component/SearchBar';

import { PoolAsset } from '@galacticcouncil/sdk';
import { AssetSelector } from '../trade.d';

@customElement('app-select-token')
export class SelectToken extends LitElement {
  @property({ attribute: false }) assets: PoolAsset[] = [];
  @property({ attribute: false }) pairs: Map<string, PoolAsset[]> = new Map([]);
  @property({ type: String }) assetIn = null;
  @property({ type: String }) assetOut = null;
  @property({ attribute: false }) selector: AssetSelector = null;
  @property({ type: String }) query = '';

  static styles = [
    baseStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .header {
        display: flex;
        justify-content: center;
        padding: 22px 28px;
        box-sizing: border-box;
        align-items: center;
        line-height: 40px;
      }

      .header span {
        color: var(--hex-neutral-gray-100);
        font-weight: 500;
        font-size: 16px;
      }

      .header .back {
        position: absolute;
        left: 20px;
      }

      .search {
        padding: 0 28px;
        box-sizing: border-box;
      }
    `,
  ];

  updateSearch(searchDetail: any) {
    this.query = searchDetail.value;
  }

  onBackClick(e: any) {
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('back-clicked', options));
  }

  filterAssets(query: string) {
    return this.assets.filter((a) => a.symbol.toLowerCase().includes(query.toLowerCase()));
  }

  isDisabled(asset: PoolAsset): boolean {
    if (this.selector.id == 'assetIn') {
      return this.assetOut == asset.symbol;
    } else if (this.selector.id == 'assetOut') {
      return this.assetIn == asset.symbol;
    } else {
      return false;
    }
  }

  isSelected(asset: PoolAsset): boolean {
    return this.selector.asset == asset.symbol;
  }

  getSlot(asset: PoolAsset): string {
    if (this.isSelected(asset)) {
      return 'selected';
    } else if (this.isDisabled(asset)) {
      return 'disabled';
    } else {
      return null;
    }
  }

  render() {
    return html`
      <div class="header">
        <ui-icon-button class="back" @click=${this.onBackClick}>
          <img src="assets/img/icon/back.svg" alt="settings" />
        </ui-icon-button>
        <span>Select token</span>
        <span></span>
      </div>
      <ui-search-bar
        class="search"
        placeholder="Search by name"
        @search-changed=${(e: CustomEvent) => this.updateSearch(e.detail)}
      ></ui-search-bar>
      <ui-asset-list>
        ${this.filterAssets(this.query).map((asset: PoolAsset) => {
          return html`
            <ui-asset-list-item
              slot=${this.getSlot(asset)}
              ?disabled=${this.isDisabled(asset)}
              ?selected=${this.isSelected(asset)}
              .asset=${asset}
            ></ui-asset-list-item>
          `;
        })}
      </ui-asset-list>
    `;
  }
}
