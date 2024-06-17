import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { aboutStyles } from "./about.styles.js";
import { globalToDoAppStyles } from "../../styles/styles.js";

@customElement('feat-about')
export class About extends LitElement {

  static styles = [globalToDoAppStyles, aboutStyles];

  render() {
    return html`
      <div class="container">
        <h2 class="uppercase letter-spacing-3">About</h2>
        <p>Lit3 Element classic todo app to play around</p>
        <p>Created by: R vd Molen</p>
      </div>
    `;
  }
}
