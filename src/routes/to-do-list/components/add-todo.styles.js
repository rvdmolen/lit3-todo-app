import { css } from 'lit';

export const addTodoListItemStyles = [
  css`
    .btn {
      color: var(--white);
      font-size: 1.1rem;
      padding: 0.7rem 1.5rem;
      border-radius: 0.3rem;
      background-color: var(--blue);
      border: none;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
    }

    .input {
      position: relative;
      display: flex;
    }

    .input-field {
      width: 100%;
      border: 0.06rem solid #d2d2d2bf;
      border-radius: 0.5rem;
      padding: 1.25rem;
      font-size: 1rem;
    }

    input[type='text']::placeholder {
      color: var(--grey);
    }
  `,
];
