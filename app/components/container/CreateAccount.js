import React from 'react';
import HeaderSecond from './header/HeaderSecond';
import Form from './createacc/Form';

class CreateAccount extends React.Component {
  render() {
    return(
      <div className="create-account">
        <HeaderSecond />
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form />
        </div>
        <div className="col-md-4"></div>
      </div>
    )
  }
}

export default CreateAccount
