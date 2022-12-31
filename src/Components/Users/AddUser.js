import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import AddUserStyles from "./AddUser.module.css"
const EMPTY_USER = {
    username: "",
    age: ""
};
const AddUser = props => {
    const [addedUser, setUser] = useState(EMPTY_USER)
    const [error, setError] = useState(false)
    const addUserHandler = event => {
        event.preventDefault();
        if (addedUser.username.trim().length === 0 || addedUser.age.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty valus)."
            })
            return
        }
        if (+addedUser.age < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)."
            })
            return
        }
        props.onAddUser({ ...addedUser, id: Math.random() });
        setUser(EMPTY_USER);
    }
    const usernameChangeHandler = event => {
        setUser(prevState => ({
            ...prevState,
            username: event.target.value,
        }));
    }
    const ageChangeHandler = event => {
        setUser(prevState => ({
            ...prevState,
            age: event.target.value,
        }));
    }
    const errorHandler = () => {
        setError(false);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={AddUserStyles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={addedUser.username}
                        onChange={usernameChangeHandler}>
                    </input>
                    <label
                        htmlFor="age">Age(Years)
                    </label>
                    <input
                        id="age"
                        type="number"
                        value={addedUser.age}
                        onChange={ageChangeHandler}>
                    </input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser;