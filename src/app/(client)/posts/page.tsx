import React from 'react';
import {getAllPosts} from "@/services/api.service";
import Link from "next/link";


const PostsPage = async () => {
    let posts=await getAllPosts();
    return (
        <div>
            {posts.map(value =><li key={value.id}> <Link href={{pathname:'/posts/'+`${value.id}`, query:{data:JSON.stringify(value)}}}>
                {value.id} - {value.title}
            </Link></li>)}
        </div>
    );
};

export default PostsPage;