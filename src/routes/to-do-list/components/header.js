import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalToDoAppStyles } from '../../../styles/styles.js';
import { addTodoListItemStyles } from './add-todo.styles.js';
import { todoListFooterStyles } from './footer.styles.js';
import { todoListHeaderStyles } from './header.styles.js';

@customElement('todo-list-header')
export class ToDoListHeader extends LitElement {
  static styles = [globalToDoAppStyles, todoListHeaderStyles];

  render() {
    return html` <h2 class="uppercase letter-spacing-3">To-do list</h2> `;
  }
}
