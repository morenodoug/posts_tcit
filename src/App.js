import React, { Component } from 'react';

import {Provider}  from "react-redux";
import configureStore from "./configureStore";
import PostApp  from "./PostApp"

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PostApp/>

        </Provider>
        
      </div>
    );
  }
}

export default App;
