import React from 'react';

class HeaderSecond extends React.Component {
  render() {
    return(
      <div className="header ">
        <div className=" pull-left sm-table hidden-xs hidden-sm">
          <i className="fa fa-list" id="menu-awesome" aria-hidden="true"></i>
        </div>
        <div className=" pull-left sm-table hidden-xs hidden-sm">
          <h3><b>This page is for the owner only</b></h3>
        </div>
        <div className="pull-right">
          <i className="fa fa-user" id="user-awesome" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default HeaderSecond
