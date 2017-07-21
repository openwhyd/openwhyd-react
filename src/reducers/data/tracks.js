export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_TRACKS_REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'GET_TRACKS_SUCCESS':
      /*
      if (action.payload._id) {
        return Object.assign({}, state, {})    
      }
      */

      return {
        ...state,
        tracks: action.payload,
        loading: false
      };   

    default:
      return state
  }
}
