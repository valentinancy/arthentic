import React from 'react';
import {Link} from 'react-router';

class Form extends React.Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title text-center">
            <h3 className="text-center">Are you the Owner?</h3>
          </div>
        </div>
        <div className="panel-body">
        <form className="" role="form" id="create-account">
          <div className="form-group form-group-default required ">
            <label>Username</label>
            <input type="email" className="form-control" placeholder="username" required/>
          </div>
          <div className="form-group form-group-default required">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="password" required/>
          </div>
          <div className="form-group form-group-default required">
            <label>Role</label>
            <input type="text" className="form-control" placeholder="owner" required/>
          </div>
          <div className="form-group form-group-default required">
            <label>Permission</label>
            <input type="password" className="form-control" placeholder="permission" required/>
          </div><div className="form-group form-group-default required">
            <label>Passcode</label>
            <input type="password" className="form-control" placeholder="*****" required/>
          </div>
        </form>
        <p>
          &nbsp;Already have an account? <Link to={'/'}>Log in here</Link>
        </p>
        <button className="btn btn-primary btn-cons m-t-10" type="submit" form="create-account">Create Account</button>
      </div>
      </div>
    )
  }
}

export default Form
