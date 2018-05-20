import React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {connect }from "react-redux";
import {isValidString} from "../helpers";
import {updateAddPostForm, addPost} from "../actions";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
class AddPostForm extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.onChangePostName = this.onChangePostName.bind(this);
        this.onChangePostDescription =  this.onChangePostDescription.bind(this);
        this.onClickCrearButton =  this.onClickCrearButton.bind(this);
    }
    onChangePostName(element){
        const addPostFormState  = {...this.props.addPostForm};
        const isReadyToAdd = isValidString(element.target.value.toUpperCase()) && isValidString(this.props.addPostForm.postDescription)
        addPostFormState.postName = element.target.value.toUpperCase();
        addPostFormState.isReadyToAdd =  isReadyToAdd; 
        this.props.updateAddPostFormState(addPostFormState);

    }

    onChangePostDescription(element){
        const addPostFormState = {...this.props.addPostForm};
        const isReadyToAdd = isValidString(element.target.value.toLowerCase()) && isValidString(this.props.addPostForm.postName);
        addPostFormState.postDescription = element.target.value.toLowerCase();
        addPostFormState.isReadyToAdd =  isReadyToAdd;
        this.props.updateAddPostFormState(addPostFormState);
        
    }
    onClickCrearButton(){
        this.props.addPost({
            name: this.props.addPostForm.postName, 
            description: this.props.addPostForm.postDescription
        });
    }

    render(){
        console.log("render");
        const crearButtonDisabled = ( this.props.addPostForm.isAdding || !this.props.addPostForm.isReadyToAdd );
        return (
        <div>
            <Grid container spacing={24} style={styles}>
            <Grid item xs={12} md={4}>
                <TextField
                id="name"
                label="Nombre del Post"
                fullWidth
                value= {this.props.addPostForm.postName}
                onChange = {this.onChangePostName}                
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <TextField
                    fullWidth
                    id="descripcion"
                    label="Descripcion"
                    value = {this.props.addPostForm.postDescription}
                    onChange = {this.onChangePostDescription}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <Button 
                    variant="raised" 
                    color="primary"
                    disabled ={crearButtonDisabled}
                    onClick = {this.onClickCrearButton}>
                Crear
                </Button>
            </Grid>
            </Grid>
        </div>
        );        
    }
}
function mapStateToProps( state){
    return{
        addPostForm: state.ui.addPostForm
    }
}
function mapDispatchToProps(dispatch){
    return {
        updateAddPostFormState: (stateAddPostForm) => (dispatch(updateAddPostForm(stateAddPostForm))),
        addPost: (name, description) =>(dispatch(addPost({name, description})))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPostForm);