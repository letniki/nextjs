import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

const baseUrl='https://jsonplaceholder.typicode.com'

const getAllUsers=async():Promise<IUser[]>=>{
    let response=await fetch(`${baseUrl}/users`)
        .then(value => value.json());
    return response;
}
const getAllPosts=async():Promise<IPost[]>=>{
   let response= await fetch(`${baseUrl}/posts`)
        .then(value => value.json());
   return response;
}
const getAllComments=async():Promise<IComment[]>=>{
    let response = fetch(`${baseUrl}/comments`)
        .then(value => value.json());
    return response;
}
export {getAllUsers, getAllPosts, getAllComments}