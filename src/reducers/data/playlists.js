export default function (state = {}, action) {
  console.log(action);

  switch (action.type) {
    case 'GET_PLAYLISTS_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'GET_PLAYLISTS_SUCCESS':
      /*
      if (action.payload._id) {
        return Object.assign({}, state, {})    
      }
      */

      return {
        ...state,
        playlists: action.payload,
        loading: false
      };   

    default:
      return state
  }
}
