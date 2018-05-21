import { combineReducers } from "redux";
import { ADD_POST, DELETE_POST } from "./actions";
import { UPDATE_FILTER_POST_FORM, UPDATE_ADD_POST_FORM, CHARGE_POSTS } from "./actions";


const UI_INITIAL_STATE = {
    addPostForm: {
        postName: "",
        postDescription: "",
        isAdding: false,
        isReadyToAdd: false
    },
    filterPostForm: {
        filterNameBy: "",
        isFiltering: false,
        isReadyToFilter: false,

    }
}

function posts(state = [], action) {
    switch (action.type) {

        case CHARGE_POSTS:
            return action.posts;

        case ADD_POST:
            let postsCopy = state.slice();
            postsCopy.push(action.post);
            return postsCopy;

        case DELETE_POST:
            return state.map((post) => post.id !== action.post.id);

        default:
            return state;
    }
}

function ui(state = UI_INITIAL_STATE, action) {

    switch (action.type) {
        case UPDATE_ADD_POST_FORM:
            return {...state, addPostForm: action.addPostForm }

        case UPDATE_FILTER_POST_FORM:
            return {...state, filterPostForm: action.filterPostForm };

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts,
    ui
});

export default rootReducer;