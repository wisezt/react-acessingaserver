import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js';

import Aux from './hoc/Auxiliary.js'



class App extends Component {
  render() {
    return (
      <div>
          <Aux>
              <p> test</p>
          </Aux>
          <Layout>
              <p>
                layout test!!!
              </p>
          </Layout>


          <p>Test</p>

     </div>
    );
  }
}

export default App;
