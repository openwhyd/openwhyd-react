import api_call from './api.js';

const tracks_api = api_call('tracks');

const format_json = '?format=json'

// FIXME : add a translation layer between client format and whyd here?
//         -> move this translation layer to the bridge?
// FIXME : add offset/skip parameter
export default {
  get: function (user, track_id, after = '') {
    if (!track_id){

      if (after) {
        after = '&after=' + after;
      }

      const url = 'http://localhost:8000/u/' + user._id + format_json + after;

      return tracks_api('GET', url);
    }

    return tracks_api('GET', 'http://localhost:8000/c/' + track_id + format_json);
  },

  post: function (user, body) {
    body.action = 'insert';

    return tracks_api('POST', 'http://localhost:8000/api/post', body);
  },

  patch: function (user, body, track_id) {
    body.action = 'insert';
    body._id = track_id;

    return tracks_api('POST', 'http://localhost:8000/api/post', body);
  },

  delete: function (user, track_id) {
    const body = {
      action: 'delete',
      _id: track_id
    };

    return tracks_api('POST', 'http://localhost:8000/api/post', body);
  }
}
