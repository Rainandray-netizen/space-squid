import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactUs = ({ contactUs }) => {
  const { header, body } = contactUs;

  return (
    <Formik
      initialValues={{ name: '', email: '', website: '', message: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            <div>
              Name<span>*</span>:
            </div>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="p" />
          </label>

          <label>
            <div>
              Email<span>*</span>:
            </div>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </label>

          <label>
            <div>Website:</div>
            <Field type="text" name="website" />
            <ErrorMessage name="website" component="p" />
          </label>

          <label>
            <div>
              Message<span>*</span>:
            </div>
            <Field type="textarea" name="message" />
            <ErrorMessage name="message" component="p" />
          </label>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUs;
