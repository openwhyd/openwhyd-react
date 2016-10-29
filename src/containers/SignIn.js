import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import FacebookLogin from 'react-facebook-login';
import UserPassForm from '../components/UserPassForm.js';

import login, { facebook_login } from '../actions/api/login.js';

class SignIn extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.dispatch = this.props.dispatch.bind(this);
  }

  handleSubmit(values) {
    if (values.email) {
      this.dispatch(login(values.email, values.password))
          .then(() => {
//            this.dispatch({type: '', path: '/mobile'});
//            this.context.router.replace('/mobile');
          })
          .catch(console.log);
    }
    // else if (values.) // facebook login {
    //  facebook_login();
    // }
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
