import api_call from './api.js';
import md5 from 'md5';

const login = api_call('login');

//const URL = 'localhost:8080';
const URL = 'openwhyd.org';

function toForm(json) {
  var form_data = new FormData();

  for ( var key in json ) {
    form_data.append(key, json[key]);
  }
}

export default function (email, password) {
  const hashed_password = md5(password);
  const body = {
    fbRequest: '',
    fbUid: '',
    redirect: '',

    action:'login',
    md5: hashed_password,
    password: hashed_password,
    email,
  };

  console.log(body);
  console.log(toForm(body));

  return login('POST', 'https://' + URL + '/login', body);
}

export function facebook_login(fbUid, token) {
  const body = {
// FIXME: fill
    fbRequest: '',
    fbUid: '',
    redirect: '',

    action:'login',
    md5: '',
    password: '',
    email: '',
  };

  return login('POST', 'https://' + URL + '/login', body);
}
