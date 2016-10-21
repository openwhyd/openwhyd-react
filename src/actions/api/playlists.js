import { CALL_API } from `redux-api-middleware`;

const api_call = require('./api.js')('playlists'); // FIXME : import from

// FIXME : add a translation layer between client format and whyd here?
// FIXME : extract playlists from
// https://openwhyd.org/api/user -> ['pl']
module.exports.get = function (user, playlist_id) {
  const url = 'https://openwhyd.org/u/' + user._id + '/playlists

  if (!playlist_id){
    return store.dispatch(api_call('GET', url))
  }

  return store.dispatch(api_call('GET', url + '/' + playlist_id))
}

module.exports.post = function (user, body) {
  body.action = 'create';

  return store.dispatch(api_call('POST', 'https://openwhyd.org/api/playlist', body))
}

module.exports.patch = function (user, body, playlist_id) {
  body.action = 'rename';
  body.id = playlist_id;

  return store.dispatch(api_call('POST', 'https://openwhyd.org/api/playlist', body))
}

module.exports.delete = function (user, playlist_id) {
  const body = {
    action: 'delete',
    id: playlist_id
  };

  return store.dispatch(api_call('POST', 'https://openwhyd.org/api/playlist', body))
}

// FIXME : add image upload
// POST
// https://openwhyd.org/upload
