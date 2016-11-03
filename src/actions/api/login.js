import api_call from './api.js';
import md5 from 'md5';

const login = api_call('login');

const URL = 'localhost:8080';
//const URL = 'openwhyd.org';

function toForm(json) {
  var form_data = new FormData();

  for ( var key in json ) {
    form_data.append(key, json[key]);
  }

  return form_data;
}

export default function (email, password) {
  const hashed_password = md5(password);
  const body = {
    action:'login',
    md5: hashed_password,
    password: hashed_password,
    email,
  };

  return login('POST', 'https://' + URL + '/login', toForm(body));
}

export function facebook(fbUid, token) {
  const body = {
    ajax: 'iframe',
    fbUid: fbUid,
    fbAccessToken: token
  };

  return login('POST', 'https://' + URL + '/facebookLogin', toForm(body));
}
