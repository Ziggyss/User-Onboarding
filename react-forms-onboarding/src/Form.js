import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";

const validationSchema = yup.object().shape({
  name: yup.string().required("Please add your name"),
  terms: yup.bool().checked("Please agree to the terms")
});

function userForm() {
  return (
    <Formik
      validationSchema={validationSchema}
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

export default Form;
