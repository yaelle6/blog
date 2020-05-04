import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

const ModifyPost = () => {
  const [form, setForm] = useState({
    title: '',
    text: '',
    image_url: ''
  })
  const handleSubmit = () => {
    axios.post('http://localhost:1234/posts/add',form)
          .then(response => { if(response.status === 200 ) console.log(response);
          })
          .catch(err => console.error(err.message))
  }

  const updateFields = e => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Title' placeholder='Title' onChange={updateFields} name='title'/>
        </Form.Group>
        <Form.Input fluid label='Image' placeholder='Image' onChange={updateFields} name='image_url'/>
        <Form.TextArea label='Text' placeholder='Enter your text' onChange={updateFields} name='text'/>
        <Form.Button onClick={ handleSubmit }>Submit</Form.Button>
      </Form>
    )

}

export default ModifyPost