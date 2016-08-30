import React from 'react';
import Header from './container/header/Header';
import Dashboard from './container/Dashboard';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Dashboard />
      </div>
    )
  }
}

export default Home
