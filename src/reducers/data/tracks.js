export default function (state = {}, action) {
  console.log(action);

  switch (action.type) {
    /*case 'TRACKS_GET_SUCCESS':
      // FIXME : push track
      if (action.payload._id) {
        return Object.assign({}, state, {})    
      }

      return Object.assign({}, state, action.payload)    
      */

    default:
      return state
  }
}
