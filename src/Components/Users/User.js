import React from "react";
const User = (props) => {
    const user = props.user;
    const deleteUserHandler = () => {
        props.onDeleteUser(user);
    }
    return (<li key={user.id} onClick={deleteUserHandler} > {user.username} {user.age} years old</li >)
}
export default User;