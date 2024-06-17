import { html } from 'lit';

const _routes = [
  {
    path: '/',
    render: () => html`<feat-to-do-list></feat-to-do-list>`,
    title: '00 Home',
    enter: async () => {
      await import('@feat-to-do-list/to-do-list.js');
    },
  },
  {
    path: '/archive',
    render: () => html`<feat-archive-list></feat-archive-list>`,
    title: '01 Archive',
    enter: async () => {
      await import('./archive/archive-list.js');
    },
  },
  {
    path: '/about',
    render: () => html`<feat-about></feat-about>`,
    title: '02 About',
    enter: async () => {
      await import('./about/about.js');
    },
  },
];

export const ToDoAppRouter = {
  routes: _routes,
};
