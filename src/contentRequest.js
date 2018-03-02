export default {
  getJSONContent: function (lang) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `static/assets/content/content-${lang}.json`, true);
      xhr.onload = () => {
        resolve(JSON.parse(xhr.response));
      }
      xhr.send();
    })
  }
}

