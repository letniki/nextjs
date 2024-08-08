import React from 'react';
import {IUser} from "@/models/IUser";

const UserPage = ({searchParams}:any) => {
    let user:IUser=JSON.parse(searchParams.data);
    console.log(user);
    return (
        <div>
            {user.name} - {user.email}
        </div>
    );
};

export default UserPage;