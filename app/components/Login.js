import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {

  handleLogin(val) {
    val.preventDefault();
    const username = this.usernameRef.value;
    const password = this.passwordRef.value;
    this.usernameRef.value = '';
    this.passwordRef.value = '';
    this.context.router.push(`home/${username}`);
  }

  render() {
    return(
      <div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="login-container login bg-white">
          <div className="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
            {/*<img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>*/}
            <h1 className="text-center"><b>Radical Technology</b></h1>
            <p className="p-t-35">Welcome back, this is Radical Technology System!</p>
            <form id="form-login" className="p-t-15" role="form">
              <div className="form-group form-group-default">
                <label>Login</label>
                <div className="controls">
                  <input type="text" name="username" placeholder="User Name" className="form-control" ref={(ref) => this.usernameRef = ref} required/>
                </div>
              </div>
              <div className="form-group form-group-default">
                <label>Password</label>
                <div className="controls">
                  <input type="password" className="form-control" name="password" placeholder="Credentials" ref={(ref) => this.passwordRef = ref} required/>
                </div>
              </div>
              <div className="row">
              </div>
              <div className="">
                <p>
                  &nbsp;New user? <Link to={'newacc'}>create new account here</Link>
                </p>
              </div>
              <button onClick={(val) => this.handleLogin(val)} className="btn btn-primary btn-cons m-t-10 log_in" type="submit">Sign in</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="text-right">
              <img className="logo-login" src="assets/img/kirim.jpg"/>
            </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"> </div>
      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login
