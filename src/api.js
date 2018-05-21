import { host } from "./config";
import axios from 'axios';

const resourceUrl = `${host}/post`;
export const getPosts = () => {
    return axios(resourceUrl)
}

export const addPostRequest = (postName, postDescription) => {
    return axios.post(resourceUrl, { postName, postDescription })

}