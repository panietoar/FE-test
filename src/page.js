import request from './contentRequest';
import { selectors } from './constants';
import domHelper from './domHelper';
import { debug } from 'util';

export default {

  pageContent: {},
  languages: ['eng', 'esp'],

  loadContent(lang) {
    request.getJSONContent(lang)
    .then(content => {
      this.pageContent = content;
      this.setupHeaderContent();
    });
  },

  setupLanguage() {
    this.languages.forEach(language => {
      domHelper.appendHTML(selectors.languageSelector, `<option value="${language}">${language}</option>`);
    });
    domHelper.query(selectors.languageSelector).addEventListener('change', event => this.selectLanguage(event), false);
  },

  setupHeaderContent() {
    this.renderHeaderContent();
    domHelper.query(selectors.navMenu).addEventListener('click', event => this.toggleNavMenu(event), false);
  },

  renderHeaderContent() {
    let navigation = this.pageContent.navigation;
    domHelper.clearHTML(selectors.navigation);

    for (const link in navigation) {
      domHelper.appendHTML(selectors.navigation, `<li><a href="#${link}">${navigation[link]}</a></li>`);
    }
  },

  selectLanguage(event) {
    let newLanguage = event.target.value;
    this.loadContent(newLanguage);
  },

  toggleNavMenu(event) {
    let visibility = window.getComputedStyle(domHelper.query(selectors.navigationContainer)).getPropertyValue('visibility');
    if ('hidden' === visibility) {
      domHelper.query(selectors.navigationContainer).style.visibility = 'visible';
      domHelper.query(selectors.navigationContainer).style.opacity = 1;
    } else {
      domHelper.query(selectors.navigationContainer).style.visibility = 'hidden';
      domHelper.query(selectors.navigationContainer).style.opacity = 0;
    }
  }
}