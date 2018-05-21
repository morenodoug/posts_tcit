import React, { Component } from 'react';
import AddPostForm  from "./containers/AddPostForm";
import  PostsTable from "./containers/PostsTable";
import {Provider}  from "react-redux";
import configureStore from "./configureStore";


const store = configureStore();
class PostApp extends Component {
  render(){
    return(
      <div>
        <PostsTable/>
        <AddPostForm/>
      </div>
    
    );
  }
}
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
