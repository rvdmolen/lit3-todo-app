import { css } from 'lit';

export const todoListOverviewStyles = [
  css`
    :host {
      overflow: auto;
    }

    .container {
      display: flex;
      gap: 1rem;
      flex-grow: 1;
      flex-direction: column;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 2.3rem;
      gap: 1rem;
      color: var(--grey);

      border: 0.01rem solid var(--grey);
      border-radius: 0.5em;
      padding: 0.5rem;
      box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%), 0 1px 3px 0 rgb(0 0 0 / 16%);
    }

    .row > p {
      flex-grow: 1;
    }

    ul {
      padding: 0;
      margin: 0;
      overflow-y: scroll;
    }

    li {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      padding-block: 1.3rem;
    }

    li p {
      display: flex;
      gap: 1rem;
      color: var(--dark);
      align-items: center;
    }

    li .disabled {
      color: #8f98a8;
    }

    .disabled {
      display: flex;
      text-decoration: line-through;
    }

    input[type='checkbox'] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
    }

    input[type='checkbox']::before {
      content: '\\2713';
      display: inline-block;
      width: 2rem;
      height: 2rem;
      font-size: 1.7rem;
      text-align: center;
      border: 0.06rem solid var(--grey-border);
      border-radius: 50%;
      color: transparent;
    }

    input[type='checkbox']:checked::before {
      color: var(--white);
      background-color: var(--green);
      border: 0.06rem solid var(--green);
      border-radius: 50%;
    }

    .scroll {
      scrollbar-width: thin;
    }

    .scroll::-webkit-scrollbar {
      width: 0.6rem;
    }

    .scroll::-webkit-scrollbar-thumb {
      background-color: var(--blue);
      border-radius: 0.5rem;
    }

    .scroll::-webkit-scrollbar-track {
      display: none;
    }

    .delete-icon {
      align-self: center;
      font-size: 1.2rem;
      color: var(--grey);
      cursor: pointer;
    }

    .delete-icon:hover {
      color: var(--grey-dark);
    }
  `,
];
