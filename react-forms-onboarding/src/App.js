import React , {useState, useEffect }from "react";
import "./App.css";
import UserForm from "./Form";
import axios from "axios";

const userApi = "https://reqres.in/api/users";

const initalUserForm = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
function App() {
  const [userList, setUserList] = useState([]);
  const [serverError, setServerError] = useState("");

  const addUser = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    };
    axios
      .post(userApi, userToPost)
      .then(res => {
        const newUserFromServer = res.data;
        setUserList(userList.concat(newUserFromServer));
        actions.resetForm();
      })
      .catch(err => {
        setServerError(serverError);
      });
  };

  return (
    <div>
      {serverError}

      <UserForm onSubmit={addUser} />

      {userList.length
        ? userList.map(user => (
            <div key={user.name} className="user">
              User: {user.name}
              Email: {user.email}
            </div>
          ))
        : "No Users Yet"}
    </div>
  );
}

export default App;
