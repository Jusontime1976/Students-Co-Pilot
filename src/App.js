import React from 'react';
import Aux from './HOC/Auxi';
import Layout from './Layout/Layout';

class App extends React.Component
{
  render()
  {
    return (
      <Aux>
    <Layout />
    </Aux>
    );
  }
}

export default App;
