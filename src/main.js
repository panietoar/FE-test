import request from 'contentRequest';

request.getJSONContent('eng')
  .then(response => console.log(response.data.heading));