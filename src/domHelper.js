import { selectors } from './constants';

export default {

  setNavigationContent(navigation) {
    this.clearHTML(selectors.navigation);

    for (const link in navigation) {
      this.appendHTML(selectors.navigation, `<li><a href="#${link}">${navigation[link]}</a></li>`);
    }
  },

  appendHTML(selector, content) {
    document.querySelector(selector).innerHTML += content;
  },

  setHTML(selector, content) {
    this.clearHTML(selector);
    document.querySelector(selector).innerHTML = content;
  },

  clearHTML(selector) {
    document.querySelector(selector).innerHTML = '';
  }

}