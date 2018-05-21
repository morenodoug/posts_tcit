import React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import {connect }from "react-redux";
// import {isValidString} from "../helpers";
// import {updateAddPostForm, addPost} from "../actions";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
class FilterPostsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterBy:""
        }
        this.onChangeFilter =  this.onChangeFilter.bind(this);
        this.onClickBuscarButton =  this.onClickBuscarButton.bind(this);
    }
    onChangeFilter(element){
        this.setState({filterBy:element.target.value.toUpperCase().trim()})
    }

    onClickBuscarButton(){
        this.props.setFilterBy(this.state.filterBy);
    }

    render(){
        return (
        <div>
            <Grid container spacing={24} style={styles}>
                <Grid item xs={12} md={4}>
                    <TextField
                    id="name"
                    label="Buscar por Nombre"
                    fullWidth
                    onChange ={this.onChangeFilter}
                    value={this.state.filterBy}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button 
                        variant="raised" 
                        color="primary"
                        onClick={this.onClickBuscarButton}>
                    Buscar
                    </Button>
                </Grid>
            </Grid>
        </div>
        );        
    }
}

export default FilterPostsForm;