import React from 'react';
import {getAllComments} from "@/services/api.service";
import Link from "next/link";

const CommentsPage =async () => {
    let comments=await getAllComments();
    return (
        <div>
            {
                comments.map(value=> <li key={value.id}>
                    <Link href={{pathname:'/comments/'+`${value.id}`, query:{data:JSON.stringify(value)}}}>
                    {value.id} - {value.name}</Link>
                </li>)
            }
        </div>
    );
};

export default CommentsPage;