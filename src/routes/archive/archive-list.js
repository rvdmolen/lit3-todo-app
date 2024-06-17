import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { archiveListStyles } from './archive-list.styles.js';
import { globalToDoAppStyles } from '../../styles/styles.js';
import { consume } from '@lit/context';
import { todoListStore } from '../../services/state.js';

@customElement('feat-archive-list')
export class ArchiveList extends LitElement {
  @consume({ context: todoListStore.getStateContext(), subscribe: true })
  accessor todoListItems;

  static styles = [globalToDoAppStyles, archiveListStyles];

  render() {
    return html`
      <div class="container">
        <h2 class="uppercase letter-spacing-3">Archive</h2>
        <ul class="scroll">
          <li>
            ${this.todoListItems
              .filter(item => item.archive)
              .map(
                item => html`
                  <div class="row">
                    <p><del> ${item.name}</del></p>
                  </div>
                `
              )}
          </li>
        </ul>
      </div>
    `;
  }
}
