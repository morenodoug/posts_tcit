import React, { Component } from 'react';
import AddPostForm  from "./containers/AddPostForm";
import {Provider}  from "react-redux";
import configureStore from "./configureStore";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <AddPostForm/>
        </Provider>
        
      </div>
    );
  }
}

export default App;
