import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render() {
    return(
      <div className="header ">
        <div className=" pull-left sm-table hidden-xs hidden-sm">
          <i className="fa fa-list" id="menu-awesome" aria-hidden="true"></i>
        </div>
        <div className=" pull-left sm-table hidden-xs hidden-sm">
          <h3><b>Radion Dashboard</b></h3>
        </div>
        <div className="pull-right">
          <span id="hi-panel">hi, Nancy</span>
          <Link to="/"><i className="fa fa-sign-out" id="sign-out-awesome" aria-hidden="true"></i></Link>
          <i className="fa fa-cog" id="cog-awesome" aria-hidden="true"></i>
          <i className="fa fa-user" id="user-awesome" aria-hidden="true"></i>
        </div>

      </div>
    )
  }
}

export default Header
