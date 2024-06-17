import { css } from 'lit';

export const archiveListStyles = [
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

      display: flex;
      flex-direction: column;
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
  `,
];
