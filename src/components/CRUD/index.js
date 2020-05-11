import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import "./style.css";

const Crud = () => {
  const userData = [
    { id: uuidv4(), name: "Tania", username: "Tanialin" },
    { id: uuidv4(), name: "Robet", username: "Mono" },
    { id: uuidv4(), name: "Carlos", username: "Bigote" },
  ];

  //state
  const [users, setUsers] = useState(userData);

  //Agregar Usuario
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //editar usurario
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({
      id: null, name: '', username: ''
  })

  const editRow = (user) => {
      setEditing(true)
      setCurrentUser({
          id: user.id, name: user.name, username: user.username
      })
  }

  return (
    <Fragment>
      <div className="container">
        <h1 className="">CRUD App with Hooks</h1>
        <div className="row">
          <div className="col-6">
            {editing ? (
              <Fragment>
                <h2>Edit User</h2>
                <EditUserForm currentUser={currentUser} />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add new User</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
          </div>
          <div className="col-6">
            <h2>View User</h2>
            <UserTable users={users} deleteUser={deleteUser}  setEditing={setEditing} editRow={editRow}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Crud;
