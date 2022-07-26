import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactUs = ({ contactUs }) => {
  const { header, body } = contactUs;

  return (
    <article className="contact-us-section">
      <h2>{header}</h2>
      <p>{body}</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          website: '',
          message: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.message) {
            errors.message = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //this is where the emailjs call happens!
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
              <ErrorMessage
                name="name"
                component="p"
                className="error-message"
              />
            </label>

            <label>
              <div>
                Email<span>*</span>:
              </div>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </label>

            <label>
              <div>Website:</div>
              <Field type="text" name="website" />
              <ErrorMessage
                name="website"
                component="p"
                className="error-message"
              />
            </label>

            <label>
              <div>
                Message<span>*</span>:
              </div>
              <Field type="textarea" name="message" />
              <ErrorMessage
                name="message"
                component="p"
                className="error-message"
              />
            </label>
            <div className="form-button-container">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </article>
  );
};

export default ContactUs;
