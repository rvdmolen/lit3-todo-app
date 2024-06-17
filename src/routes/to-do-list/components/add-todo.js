import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { globalToDoAppStyles } from '../../../styles/styles.js';
import { addTodoListItemStyles } from './add-todo.styles.js';
import { consume, provide } from '@lit/context';
import { todoListStore } from '../../../services/state.js';

@customElement('add-todo-list-item')
export class AddTodoListItem extends LitElement {
  static styles = [globalToDoAppStyles, addTodoListItemStyles];

  @query('#todoInput')
  accessor todoInput;

  @consume({ context: todoListStore.getStateContext(), subscribe: true })
  accessor myData;

  __handleClick(e) {
    this.todoInput.focus();
    e.preventDefault();
  }

  __addTodoListItem(event) {
    const todoItemToAdd = event?.target.value;
    this.todoInput.value = '';
    this.__updateState(todoItemToAdd);
  }

  __updateState(val) {
    todoListStore.updateState({
      id: this.__generateUniqueId(),
      name: val,
      checked: false,
      archive: false,
    });
  }

  __generateUniqueId() {
    return (
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(12, 0)
    );
  }

  render() {
    return html`
      <div class="input">
        <input
          type="text"
          class="input-field"
          id="todoInput"
          placeholder="Add a new todo"
          @change=${this.__addTodoListItem}
        />
        <button class="btn" @click="${e => this.__handleClick(e)}">Add</button>
      </div>
    `;
  }
}
