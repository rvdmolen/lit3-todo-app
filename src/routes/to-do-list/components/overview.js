import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalToDoAppStyles } from '../../../styles/styles.js';
import { todoListOverviewStyles } from './overview.styles.js';
import { consume } from '@lit/context';
import { todoListStore } from '../../../services/state.js';

@customElement('to-do-list-overview')
export class ToDoListOverview extends LitElement {
  static styles = [globalToDoAppStyles, todoListOverviewStyles];

  @consume({ context: todoListStore.getStateContext(), subscribe: true })
  accessor todoListItems;

  __selectItem(todoListItem) {
    todoListStore.updateState({
      ...todoListItem,
      checked: !todoListItem.checked,
    });
  }

  __archiveItem(todoListItem) {
    todoListStore.updateState({ ...todoListItem, archive: true });
  }

  render() {
    return html`
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <ul class="container scroll">
        <li>
          ${this.todoListItems
            .filter(item => !item.archive)
            .map(
              item => html`
                <div class="row">
                  <input
                    type="checkbox"
                    @click="${e => this.__selectItem(item)}"
                    ?checked="${item.checked}"
                  />
                  <p id="todo-1" class="">${item.name}</p>
                  <i
                    class="material-icons delete-icon"
                    style="font-size: 32px"
                    @click="${e => this.__archiveItem(item)}"
                    >do_not_disturb_on</i
                  >
                </div>
              `
            )}
        </li>
      </ul>
    `;
  }
}
