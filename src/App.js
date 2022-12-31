import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (addedUser) => {
    setUsers(prevState => ([addedUser, ...prevState]))
  }
  const deleteUserHandler = (deletedUser) => {
    setUsers(() => users.filter(user => user.id !== deletedUser.id))
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
