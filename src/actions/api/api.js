import { CALL_API } from 'redux-api-middleware';

function api_call(name) {
  const up_name = name.toUpperCase();

  return function (method, endpoint, body) {
    const up_method = method.toUpperCase();

    var rsaa = {
      [CALL_API]: {
        endpoint: endpoint,
        method: method,
        types: [up_method + '_' + up_name + '_REQUEST',
          up_method + '_' + up_name + '_SUCCESS',
          up_method + '_' + up_name + '_FAILURE']
      }
    };

    if (body) {
      rsaa.body = body;
    }

    return rsaa;
  }
}

export default api_call;
