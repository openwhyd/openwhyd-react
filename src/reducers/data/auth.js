export default function (state = {}, action) {
  if (action.type == 'POST_LOGIN_SUCCESS') {
    console.log(action);
    console.log('SET COOKIE HERE');
    return state;
  }
  return state;
};
