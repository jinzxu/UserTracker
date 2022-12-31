import React, { useState } from "react";
import Card from "../UI/Card";
import AddUserStyles from "./AddUser.module.css"
const FilterUser = (props) => {
    const users = props.users;
    const usernames = [...new Set(users.map(user => user.username))]
    const [filteredUsername, setFilteredUsername] = useState("");
    console.log("filteredUsername", filteredUsername)
    const filterUserHandler = (event) => {
        console.log("1", event.target.value)
        setFilteredUsername(event.target.value)
        props.onFilterUser(event.target.value)
    };
    return (
        <Card className={AddUserStyles.input}>
            <label>Filter by username</label>
            <select
                value={filteredUsername}
                onChange={filterUserHandler}
            >
                {
                    usernames.map(username => (<option key={Math.random()}>{username}</option>))
                }
            </select>
        </Card>
    )
}
export default FilterUser