import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../component/trade';

@customElement('gc-trade-screen')
export class TradeScreen extends LitElement {
  render() {
    return html`
      <gc-trade-app
        apiAddress="wss://rococo-basilisk-rpc.hydration.dev"
        accountAddress="bXmMqb3jBWToPPXf5RXWgRjFCk3eN9mM9Tqx8uj7MQ9vZ6HEx"
        accountProvider="polkadot-js"
        accountName="testcoco"
      ></gc-trade-app>
    `;
  }
}