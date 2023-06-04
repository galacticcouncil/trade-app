import { css } from 'lit';

export const positionsStyles = css`
  slot[name='header'] {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  @media (min-width: 768px) {
    slot[name='header'] {
      padding: 24px 32px;
    }
  }

  .row > div {
    color: var(--hex-white);
    padding: 16px;
  }

  @media (min-width: 768px) {
    .row > div {
      padding: 14px 16px;
    }
  }

  @media (min-width: 1024px) {
    .row > div {
      padding: 14px 32px;
    }
  }

  .row > div:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  @media (min-width: 768px) {
    .row > div.transactions {
      border-bottom: none;
    }
  }

  uigc-logo-asset {
    width: 24px;
    height: 24px;
  }

  uigc-icon-arrow {
    transform: rotate(270deg);
    width: 24px;
  }

  .item > div {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }

  .item .label {
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    text-align: left;
    color: var(--uigc-app-font-color__alternative);
  }

  .item .value {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: left;
    color: var(--hex-white);
  }

  .summary {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
  }

  .summary > :nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }

  .summary > :nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }

  .summary > :nth-child(3) {
    grid-area: 1 / 2 / 3 / 3;
  }

  .summary > :nth-child(4) {
    grid-area: 1 / 3 / 3 / 4;
  }

  .summary > *:last-child {
    margin-left: auto;
  }

  .pair {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    height: 25px;
  }

  .status__active {
    color: #4bffbb;
  }

  .status__terminated {
    color: var(--uigc-app-font-color__alternative);
  }

  .status__completed {
    color: rgb(166, 221, 255);
  }
`;