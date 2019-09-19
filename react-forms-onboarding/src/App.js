import React, { useState } from "react";
import "./App.css";
import UserForm from "./Form";
import axios from "axios";
import * as Yup from "yup";

const userApi = "https://reqres.in/api/users";

const initalUserForm = {
  name: "",
  email: "",
  password: "",
  terms: false
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please add your name")
  /*   terms: yup.bool()
  .required("Please agree to the terms and conditions"), */
});

function App() {
  const [userList, setUserList] = useState([]);
  const [serverError, setServerError] = useState("");


    function onSubmit(formValues, actions) {

      const userToPost = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        terms: formValues.terms
      };

    
      axios
        .post(userApi, userToPost)
        .then(res => {
          console.log(res.data);
          const newUserFromServer = res.data;
          setUserList(userList.concat(newUserFromServer));
          actions.resetForm();
        })
        .catch(err => {
          setServerError(serverError);
        });
    }

    return (
      <div>
        {serverError}

        <UserForm
          onSubmit={onSubmit}
          initialValues={initalUserForm}
          validationSchema={validationSchema}
          userList={userList}
        />

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
  };


export default App;
