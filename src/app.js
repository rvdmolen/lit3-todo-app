/* eslint-disable no-undef */
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
// import { ContextProvider, provide } from '@lit/context';
import { Router } from '@lit-labs/router';
import { ToDoAppRouter } from './routes/routes.js';

import './services/state.js';
import { todoListStore } from './services/state.js';
import { ContextProvider, provide } from '@lit/context';
// import { toDoListContext } from './services/state.js';

/* Generic components import */
import '@components/hamburger-menu.js';

const { routes } = ToDoAppRouter;

@customElement('lit3-todo-app')
export class AppLit3Starter extends LitElement {
  _router = new Router(this, routes);

  // @provide({ context: toDoListContext2 })
  // accessor _provider = { message: 'hello' };

  // @provide({ context: toDoListContext })
  // accessor toDoListContext = { message: 'hello' };

  // _provider = new ContextProvider(this, {
  //   context: toDoListContext,
  //   initialValue: { level: 0, color: 'red', timeStamp: Date.now() },
  // });

  constructor() {
    super();
    todoListStore.initialize(this, []);
  }

  connectedCallback() {
    super.connectedCallback();

    // setInterval(() => {
    //   // if (this._provider) {
    //   //   console.log(this._provider);
    //   //   this._provider.setValue({
    //   //     ...this.myData,
    //   //     timeStamp: Date.now(),
    //   //   });
    //   // }
    //   todoListStore.updateSate({
    //     ...this.myData,
    //     timeStamp: Date.now(),
    //   });
    // }, 1000);
  }

  render() {
    return html`
      <hamburger-menu .router="${this._router}"></hamburger-menu>
      ${this._router.outlet()}
    `;
  }
}
