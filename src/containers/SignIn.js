import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import FacebookLogin from 'react-facebook-login';
import UserPassForm from '../components/UserPassForm.js';

import login, { facebook } from '../actions/api/login.js';

// DEBUG
function toForm(json) {
  var form_data = new FormData();

  for ( var key in json ) {
    form_data.append(key, json[key]);
  }
  return form_data;
}
// ENDDEBUG

class SignIn extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.dispatch = this.props.dispatch.bind(this);
  }

  handleSubmit(values) {
    if (values.accessToken) {
      this.dispatch(facebook(values.userID, values.accessToken))
           .then((result) => {
             console.log(arguments);
           })
           .catch(console.error);
    }
    else if (values.email && values.password) {
      const body = {
        email: values.email,
        password: values.password,
      };

      this.dispatch(login(values.email, values.password))
          .then((result) => {
            if (result.type == 'POST_LOGIN_SUCCESS') {
              console.log(this.context);
//              this.dispatch({type: '', path: '/mobile'});
//              this.context.router.replace('/mobile');
            }
          })
          .catch(console.log);
    }
  }

  render() {
    return (
        <div className="signin">
          <div className="userpass">
            <UserPassForm onSubmit={this.handleSubmit.bind(this)} />
          </div>
          <div className="facebook">
            <FacebookLogin
            appId="414437012016681" // FIXME, remove hardcoded value
            autoLoad={true}
            fields="name,email,picture"
            callback={this.handleSubmit.bind(this)} />
          </div>
        </div>
    );
  }
}
export default connect(({ routes }) => ({ routes }))(SignIn);
