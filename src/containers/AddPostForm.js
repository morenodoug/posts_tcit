import React from "react";
import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {connect }from "react-redux";
import {updateAddPostForm} from "../actions";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
class AddPostForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeNombrePost = this.onChangeNombrePost.bind(this);
        console.log(props);
    }
    onChangeNombrePost(element){
        const stateAddPostFormCopy  = {...this.props.addPostForm};
        stateAddPostFormCopy.postName = element.target.value;
        console.log(stateAddPostFormCopy);
        this.props.updateAddPostFormState(stateAddPostFormCopy);

    }
    render(){

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
                onChange = {this.onChangeNombrePost}                
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <TextField
                fullWidth
                
                id="descripcion"
                label="Descripcion"
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <Button 
                    variant="raised" 
                    color="primary"
                    disabled ={crearButtonDisabled}>
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
        updateAddPostFormState: (stateAddPostForm) => (dispatch(updateAddPostForm(stateAddPostForm)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPostForm);