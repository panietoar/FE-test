export default {
  getJSONContent: function (lang) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `static/assets/content/content-${lang}.json`, true);
      xhr.onload = () => {
        resolve(xhr.response);
      }
      xhr.send();
    })
  }
}

