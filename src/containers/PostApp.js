import React, { Component } from 'react';
import AddPostForm  from "./AddPostForm";
import  PostsTable from "./PostsTable";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";



class PostApp extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props);
    this.props.fetchPosts()
  }
  render(){
    return(
      <div>
        <PostsTable/>
        <AddPostForm/>
      </div>
    
    );
  }
  
}
function mapDispatchToProps(dispatch){
  return {
    fetchPosts: () => {
        dispatch(fetchPosts())
    }
  }
}
export default connect(null,mapDispatchToProps)(PostApp);
