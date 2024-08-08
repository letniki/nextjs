import React from 'react';
import {IPost} from "@/models/IPost";

const PostPage = ({searchParams}:any) => {
    let post:IPost=JSON.parse(searchParams.data);
    return (
        <div>
            <h3>{post.id} - {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostPage;