
import { css, unsafeCSS } from 'lit';


const iconHamburger = new URL('../../assets/shared/icon-hamburger.svg', import.meta.url).href;
const iconClose = new URL('../../assets/shared/icon-close.svg', import.meta.url).href;


export const hamburgerMenuStyles = [
  css`
    /* ----- Primary Navigation ----- */
    .primary-navigation {
      --gap: clamp(1.5rem, 5vw, 3.5rem);
      --underline-gap: 2rem;
      list-style: none;
      margin: 0;
      background: var(--gradient);
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 auto;
      width: 20rem;
      padding: min(20rem, 15vh) 2rem;
      transform: translateX(100%);
      transition: transform 500ms ease-in-out;
      margin-block: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @supports (backdrop-filter: blur(1rem)) {
      .primary-navigation {
        background: var(--menu-background);
        backdrop-filter: blur(1.5rem);
      }
    }

    .primary-navigation.active {
      transform: translateX(-2%);
    }

    .primary-navigation a {
      text-decoration: none;
    }

    .primary-navigation a > span {
      font-weight: 600;
      margin-right: 0.5em;
    }

    /* ----- Navigation Button ----- */
    .btn-nav-toggle {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      background: transparent url(${unsafeCSS(iconHamburger)}) no-repeat center center;
      width: 1.5rem;
      aspect-ratio: 1;
      border: 0;
    }

    .btn-nav-toggle:focus-visible {
      outline: 5px solid var(--white);
      outline-offset: 5px;
    }

    .btn-nav-toggle.active {
      background: transparent url(${unsafeCSS(iconClose)}) no-repeat;
    }

    /* Menu Items */
    ul > * {
      cursor: pointer;
      padding: 1rem;
      border: 0;
      background-color: transparent;
    }

    ul > *:hover,
    ul > *:focus {
      border-color: var(--white);
      border-bottom-width: 0.1rem;
      border-style: solid;
    }

    ul > .active {
      color: var(--white);
    }

  `,
];
