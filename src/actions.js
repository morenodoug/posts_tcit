import { getPosts, addPostRequest, deletePostRequest } from "./api";

export const CHARGE_POSTS = "CHARGE_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_ADD_POST_FORM = "UPDATE_ADD_POST_FORM";




export function addPost(post) {
    return {
        type: ADD_POST,
        post
    };
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        postId
    };
}

export function updateAddPostForm(addPostForm) {
    return {
        type: UPDATE_ADD_POST_FORM,
        addPostForm
    }
}

export function chargePosts(posts) {
    return {
        type: CHARGE_POSTS,
        posts
    }
}


/** redux thunk */

export const fetchPosts = () => (dispatch, getState) => {
    return getPosts()
        .then(response => dispatch(chargePosts(response.data)))
}


export const addPostThunk = (postName, postDescription) => (dispatch, getState) => {
    return addPostRequest(postName, postDescription).then((response) => {
        if (response.status === 201) {

            dispatch(addPost({ id: response.data.id, name: response.data.name, description: response.data.description }))
        } else {
            Promise.reject(response.status)
        }
    });
}

export const deletePostThunk = (postId) => (dispatch, getState) => {
    return deletePostRequest(postId).then((response) => {
        if (response.status === 200) {
            console.log(response);
            dispatch(deletePost(response.data.id));
        }
    })


}