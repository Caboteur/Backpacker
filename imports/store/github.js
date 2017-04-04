import {ReactiveVar} from 'meteor/reactive-var';
import axios from 'axios';

const results = new ReactiveVar([]);

const getData = (term, callback) => {
  const root = 'https://api.github.com/search/repositories?q=';
  axios.get(root + term)
  .then((response) => {
    results.set(response.data.items);
    callback();
  })
  .catch((error) => {
    callback(err);
  });
};

export default github = {
  results,
  getData
}
