import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

const baseUrl='https://jsonplaceholder.typicode.com'

const getAllUsers=async():Promise<IUser[]>=>{
    return await fetch(`${baseUrl}/users`)
        .then(value => value.json());
}
const getAllPosts=async():Promise<IPost[]>=>{
   return await fetch(`${baseUrl}/posts`)
        .then(value => value.json());
}
const getAllComments=async():Promise<IComment[]>=>{
    return fetch(`${baseUrl}/comments`)
        .then(value => value.json());
}
export {getAllUsers, getAllPosts, getAllComments}