import request from './contentRequest';
import domHelper from './domHelper';

export default {

  pageContent: {},

  loadContent(lang) {
    request.getJSONContent('eng')
    .then(content => {
      this.pageContent = content;
      this.setHeaderContent();
    });
  },

  setHeaderContent() {
    domHelper.setNavigationContent(this.pageContent.navigation);
  }

}