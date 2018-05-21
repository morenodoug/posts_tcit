import React from "react";
import { Component } from "react";

import { connect } from "react-redux";
import  FilterPostsForm from "../components/FilterPostsForm";

import Grid from "@material-ui/core/Grid";
import {Table, TableHead, TableBody, TableRow, TableCell, TableFooter, TablePagination} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
class PostsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5,
            filterBy:""
        }
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.setFilterBy =  this.setFilterBy.bind(this);
    }
    handleChangePage(event, page) {
        this.setState({ page });
    }

    handleChangeRowsPerPage(event) {
        this.setState({ rowsPerPage: event.target.value })
    }

    setFilterBy(filterBy){
        console.log("holiii")
        this.setState({filterBy:filterBy.trim()})
    }

    render() {
        const begin = this.state.page * this.state.rowsPerPage;
        const end =  this.state.page * this.state.rowsPerPage  + this.state.rowsPerPage ;
        let postsCopy =  this.props.posts.slice();   
        
        if(this.state.filterBy.length !==0){
            postsCopy =  postsCopy.filter((post) => (post.name.toUpperCase().indexOf(this.state.filterBy) !== -1 ))
        }
        const posts  = postsCopy.slice(begin , end);
        const {rowsPerPage, page } = this.state;
        const {classes}  = this.props;
        return(
            
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <FilterPostsForm setFilterBy = {this.setFilterBy}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Nombre Post</CustomTableCell>
                                <CustomTableCell>Descripcion</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.map((post, index) =>{
                                return(
                                    <TableRow key ={index} className={classes.row}>
                                    <CustomTableCell >{post.name}</CustomTableCell>
                                    <CustomTableCell>{post.description}</CustomTableCell>
                                    </TableRow>
                                )  
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    count={postsCopy.length}
                                    onChangePage ={this.handleChangePage}
                                    onChangeRowsPerPage = {this.handleChangeRowsPerPage}                                
                                ></TablePagination>
                            </TableRow>

                        </TableFooter>                            
                    </Table>                    
                </Grid>
        
            </Grid>
            
        );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps,null)(withStyles(styles)(PostsTable));