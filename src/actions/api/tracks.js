import api_call from './api.js';

const tracks_api = api_call('tracks');

// FIXME : add a translation layer between client format and whyd here?
// FIXME : add offset/skip parameter
export default {
  get: function (user, track_id) {
    if (!track_id){
      return tracks_api('GET', 'https://openwhyd.org/u/' + user._id);
    }

    return tracks_api('GET', 'https://openwhyd.org/c/' + track_id);
  },

  post: function (user, body) {
    body.action = 'insert';

    return tracks_api('POST', 'https://openwhyd.org/api/post', body);
  },

  patch: function (user, body, track_id) {
    body.action = 'insert';
    body._id = track_id;

    return tracks_api('POST', 'https://openwhyd.org/api/post', body);
  },

  delete: function (user, track_id) {
    const body = {
      action: 'delete',
      _id: track_id
    };

    return tracks_api('POST', 'https://openwhyd.org/api/post', body);
  }
}
