export default {

  query(selector) {
    return document.querySelector(selector);
  },

  appendHTML(selector, content) {
    this.query(selector).innerHTML += content;
  },

  setHTML(selector, content) {
    this.clearHTML(selector);
    this.query(selector).innerHTML = content;
  },

  clearHTML(selector) {
    this.query(selector).innerHTML = '';
  }

}