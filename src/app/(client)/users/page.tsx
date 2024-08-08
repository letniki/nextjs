import React from 'react';
import {IUser} from "@/models/IUser";
import {getAllUsers} from "@/services/api.service";
import Link from "next/link";


const UsersPage = async () => {

   let users:IUser[] =await getAllUsers();

    return (
        <div>
            <ul>
            {
                users.map(user=> <li key={user.id}><Link href={{pathname:'/users/'+`${user.id}`, query:{data:JSON.stringify(user)}}}>{user.username}</Link></li>)
            }
            </ul>
        </div>
    );
};

export default UsersPage;