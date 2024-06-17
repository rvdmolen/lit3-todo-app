import { css } from 'lit';

export const todoListStyles = [
  css`
    :host {
      background: var(--gradient);
      margin: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      --background-color: var(--white);
    }

    .container {
      border-radius: 2rem;
      background: var(--white);
      padding: 3rem;
      height: 50%;
      width: 60%;
      box-shadow: 0 1rem 3rem 1rem rgba(0, 23, 71, 0.15);
      max-width: 30rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .disabled {
      display: flex;
      text-decoration: line-through;
    }
  `,
];
