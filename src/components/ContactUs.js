import React, { useState } from 'react'

const ContactUs = ({ contactUs }) => {
  const { header, body } = contactUs
  const initialFormData = {
    name: '',
    email: '',
    website: '',
    message: '',
    formErrors: { email: '', website: '' },
    emailValid: false,
    websiteValid: false,
    formValid: false,
  }

  const [formData, setFormData] = useState(initialFormData)

  console.log(formData)

  const handleFormUpdate = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // const validateField = (fieldName, value) => {
  //   let validationErrors=formData.formErrors
  //   let emailValid = formData.emailValid
  //   let websiteValid = formData.websiteValid

  //   switch(fieldName) {
  //     case 'email':
  //       emailValid = value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i)
  //       break
  //     default:
  //       break
  //   }
  // }

  return (
    <article className="contact-us-section">
      <h2>{header}</h2>
      <p>{body}</p>
      <form>
        <label>
          <div>Full Name<span>*</span>:</div>
          <input onChange={handleFormUpdate} type='text' name='name' value={formData.name} />
        </label>

        <label>
          <div>Email<span>*</span>:</div>
          <input onChange={handleFormUpdate} type='email' name='email' value={formData.email} />
        </label>
        <label>
          Website:
          <input onChange={handleFormUpdate} type='text' name='website' value={formData.website} />
        </label>
        <label>
          <div>Message<span>*</span>:</div>
          <textarea onChange={handleFormUpdate} type='text' name='message' value={formData.message} />
        </label>
        <div className="form-button-container"><button>Submit</button></div>
      </form>
    </article>
  )
}

export default ContactUs