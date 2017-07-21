import api_call from './api.js';

const playlists_api = api_call('playlists');

// FIXME : add a translation layer between client format and whyd here?
module.exports.get = function (user, playlist_id) {
  const url = 'http://localhost:8000/u/' + user._id + '/playlists';

  if (!playlist_id){
    return playlists_api('GET', url);
  }

  return playlists_api('GET', url + '/' + playlist_id);
}

module.exports.post = function (user, body) {
  body.action = 'create';

  return playlists_api('POST', 'http://localhost:8000/api/playlist', body);
}

module.exports.patch = function (user, body, playlist_id) {
  body.action = 'rename';
  body.id = playlist_id;

  return playlists_api('POST', 'http://localhost:8000/api/playlist', body);
}

module.exports.delete = function (user, playlist_id) {
  const body = {
    action: 'delete',
    id: playlist_id
  };

  return playlists_api('POST', 'http://localhost:8000/api/playlist', body);
}

// FIXME : add image upload
// POST
// http://localhost:8000/upload
