import React from 'react';
import {IComment} from "@/models/IComment";

const CommentPage = ({searchParams}:any) => {
    let comment: IComment=JSON.parse(searchParams.data);
    return (
        <div>
            <h4>{comment.id} - {comment.name}</h4>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentPage;