import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalToDoAppStyles } from '../../../styles/styles.js';
import { addTodoListItemStyles } from './add-todo.styles.js';
import { todoListFooterStyles } from './footer.styles.js';

@customElement('todo-list-footer')
export class ToDoListFooter extends LitElement {
  static styles = [globalToDoAppStyles, todoListFooterStyles];

  render() {
    return html`
      <div>
        <hr class="counter" />
        <div class="counter-container">
          <p><span id="todoCount">0</span> items total</p>
          <button
            id="deleteButton"
            @click="${() => {
              console.log('HI!');
            }}"
          >
            Delete All
          </button>
        </div>
      </div>
    `;
  }
}
