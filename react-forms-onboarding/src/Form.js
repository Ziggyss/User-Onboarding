import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required("Please add your name"),
  terms: yup.bool()
  .required("Please agree to the terms and conditions")
});

function UserForm(validationSchema, initialUserForm, onSubmit) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialUserForm}
      onSubmit={onSubmit}
      render={props => {
        return (
            
          <Form>
            <div>
            <h1>Add User Below:</h1>
              <label>
                Name
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name='name' component='div' />
              </label>
              <label>
                <Field name="email" type="text" placeholder="Email" />
                <ErrorMessage name='name' component='div' />
              </label>
              <label>
                <Field name="password" type="text" placeholder="Password" />
                <ErrorMessage name='name' component='div' />
              </label>
              <input
                name="terms"
                type="checkbox"
                checked={props.values.terms}
              />{" "}
              Terms of Service
            </div>
            <button name="submitButton" type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    />
  );
}

export default UserForm;
