import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactUs = ({ contactUs }) => {
  const { header, body } = contactUs;
  const [formValues, setFormValues] = useState(null);
  const [formStatus, setFormStatus] = useState(0);
  const sendEmail = (captchaValue) => {
    const params = {
      ...formValues,
      'g-recaptcha-response': captchaValue,
    };
    console.log(params);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        params,
        process.env.REACT_APP_EMAIL_JS_USER
      )
      .then(
        ({ status }) => {
          console.log('EMAILJS SENT', status);
          //add message success message here
        },
        (err) => {
          console.log('EMAILJS ERROR', err);
          //add something went wrong message here
        }
      );
  };

  //setting style with javascript to trick sneaky spambots
  const [styles, setStyles] = useState({ display: 'inline' });

  useEffect(() => {
    setStyles({ display: 'none' });
  }, []);
  if (formStatus === 0) {
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
            password: '',
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
              if (values.password === '') {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

                setFormValues(values);
                setFormStatus(1);
              }
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

              <label style={styles}>
                <div>
                  Password<span>*</span>:
                </div>
                <Field
                  type="text"
                  name="password"
                  tabIndex="-1"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="password"
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
  } else if (formStatus === 1) {
    return (
      <article className="contact-us-section">
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          onChange={sendEmail}
        />
      </article>
    );
  }
};

export default ContactUs;
