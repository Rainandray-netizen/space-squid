import React, { useState } from 'react'

const ContactUs = ({contactUs}) =>{
  const { header, body } = contactUs
  const initialFormData = {
    name: '',
    email: '',
    website: '',
    message: '',
  }

  const [ formData, setFormData ] = useState(initialFormData)

  const handleFormUpdate = () => {

  }

  return(
    <div>
      <h2>{header}</h2>
      <p>{body}</p>
      <form>
        <label>
          Name*:
          <input type='text' name='name' value={formData.name}/>
        </label>
        <label>
          Email*:
          <input type='text' name='email' value={formData.email}/> 
        </label>
        <label>
          Website:
          <input type='text' name='website' value={formData.email}/> 
        </label>
        <label>
          Message*:
          <input type='text' name='message' value={formData.message}/> 
        </label>
      </form>
    </div>
  )

}