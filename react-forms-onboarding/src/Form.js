import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";

function userForm() {
  return (
    <Formik
      initialValues={initialUserForm}
      onSubmit={onSubmit}
      render={props => {
        return (
          <Form>
            <div>
              <label>
                Name
                <Field name="name" type="text" placeholder="Name" />
              </label>
              <label>
                <Field name="email" type="text" placeholder="Email" />
              </label>
              <label>
                <Field name="password" type="text" placeholder="Password" />
              </label>
              <input type="checkbox" /> Terms of Service
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}

export default Form;
