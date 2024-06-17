import { css } from 'lit';

export const todoListFooterStyles = [
  css`
    .counter {
      border: 0.06rem solid var(--grey-light);
    }

    .counter-container {
      height: 2rem;
      display: flex;
      justify-content: space-between;
      color: var(--grey);
    }

    .counter-container p {
      align-self: center;
    }

    .counter-container button {
      border: none;
      background-color: transparent;
      color: var(--grey);
      font-size: 1rem;
    }
  `,
];
