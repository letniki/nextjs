import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <ul>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/users'}>users</Link>
            </li>
            <li>
                <Link href={'/posts'}>posts</Link>
            </li>
            <li><Link href={'/comments'}>comments</Link></li>
        </ul>
    );
};

export default HeaderComponent;