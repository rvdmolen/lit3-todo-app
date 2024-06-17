import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { hamburgerMenuStyles } from './hamburger-menu.styles.js';
import { globalToDoAppStyles } from '../styles/styles.js';

@customElement('hamburger-menu')
export class HamburgerMenu extends LitElement {
  @property({ type: Object })
  accessor router;

  @property({ type: String })
  accessor selectedRoute;

  @state()
  accessor active = false;

  static styles = [globalToDoAppStyles, hamburgerMenuStyles];

  toggleMenu() {
    this.active = !this.active;
  }

  renderMenuItems() {
    return html`
      ${this.router.routes.map(
        route =>
          html`
            <li>
              <a
                class="uppercase text-purple-dark letter-spacing-3"
                @click="${this.toggleMenu}"
                href="${route.path}"
              >
                ${route.title}
              </a>
            </li>
          `
      )}
    `;
  }

  render() {
    return html`
      <button
        class="btn-nav-toggle ${classMap({ active: this.active })}"
        aria-controls="primary-navigation"
        aria-label="expand hamburger menu"
        aria-expanded="${this.active}"
        @click="${() => this.toggleMenu()}"
      ></button>
      <nav>
        <ul
          id="primary-navigation"
          class="primary-navigation ${classMap({ active: this.active })}"
        >
          ${this.renderMenuItems()}
        </ul>
      </nav>
    `;
  }
}
