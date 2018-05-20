export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_ADD_POST_FORM = "UPDATE_ADD_POST_FORM";
export const UPDATE_FILTER_POST_FORM = "UPDATE_FILTER_POST_FORM";


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