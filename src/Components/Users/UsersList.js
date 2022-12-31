import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import User from "./User";
import UsersListStyles from "./UsersList.module.css"

const UserList = props => {
    const users = props.users;
    const deleteUserHandler = (user) => {
        props.onDeleteUser(user)
    }

    return (
        <Card className={UsersListStyles.users}>
            <ul className={UsersListStyles.users}>
                {
                    users.map(user => (<User onDeleteUser={deleteUserHandler} user={user} key={user.id} />))
                }
            </ul>
        </Card>
    )
}

export default UserList;