import { host } from "./config";

const resourceUrl = `${host}/post`;
export const getPosts = () => {
    return fetch(resourceUrl, {
        "method": "get",
        'Content-Type': 'application/json'
    })
}

export const addPost = () => {
    return fetch(resourceUrl, {

    })
}