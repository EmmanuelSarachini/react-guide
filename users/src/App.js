import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    setUserList((previousListValue) => {
      return [
        ...previousListValue,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {userList.length && <UserList userList={userList} />}
    </div>
  );
}

export default App;
