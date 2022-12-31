import React, { useEffect, useInsertionEffect, useState } from 'react';
import AddUser from './Components/Users/AddUser';
import FilterUser from './Components/Users/FilterUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsername, setFilteredUsername] = useState("")
  // const [filteredUsers, setFilteredUsers] = useState(users)
  const addUserHandler = (addedUser) => {
    setUsers(prevState => ([addedUser, ...prevState]))
    setFilteredUsername(addedUser.username)
  }
  const deleteUserHandler = (deletedUser) => {
    setUsers(() => users.filter(user => user.id !== deletedUser.id))
  }
  const filterUserHandler = (username) => {
    setFilteredUsername(username)
  }
  const filteredUsers = users.filter(user => user.username === filteredUsername)

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <FilterUser users={users} onFilterUser={filterUserHandler} />
      <UsersList users={filteredUsers} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
