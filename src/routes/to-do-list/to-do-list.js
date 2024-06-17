/* General import */
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { todoListStyles } from './to-do-list.styles.js';
import { globalToDoAppStyles } from '../../styles/styles.js';

/* Feature components */
import '@feat-to-do-list/components/overview.js';
import '@feat-to-do-list/components/add-todo.js';
import '@feat-to-do-list/components/footer.js';
import '@feat-to-do-list/components/header.js';

@customElement('feat-to-do-list')
export class ToDoList extends LitElement {
  static styles = [globalToDoAppStyles, todoListStyles];

  render() {
    return html`
      <div class="container">
        <todo-list-header></todo-list-header>
        <add-todo-list-item></add-todo-list-item>
        <to-do-list-overview></to-do-list-overview>
        <todo-list-footer></todo-list-footer>
      </div>
    `;
  }
}
