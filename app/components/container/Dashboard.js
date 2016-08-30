import React from 'react';
import Counter from './dashboard/Counter';
import Other from './dashboard/Other';

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <Counter />
        <Other />
      </div>
    )
  }
}

export default Dashboard
