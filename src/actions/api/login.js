import api_call from './api.js';

const login = api_call('login');

const URL = 'localhost:8000';

function toForm(json) {
  var form_data = new FormData();

  for ( var key in json ) {
    form_data.append(key, json[key]);
  }

  return form_data;
}

export default function (email, password) {
  const body = {
    email,
    password: password,
  };

  return login('POST', 'http://' + URL + '/login', body);
}

export function facebook(fbUid, token) {
  const body = {
    fbUid: fbUid,
    fbAccessToken: token
  };

  return login('POST', 'http://' + URL + '/facebookLogin', body);
}
