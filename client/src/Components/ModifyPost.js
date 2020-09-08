import React, { useState } from 'react';
import { TextField,  FormControl, makeStyles, TextareaAutosize, Button } from '@material-ui/core';
import axios from 'axios';

const ModifyPost = () => {
  const [form, setForm] = useState({
    title: '',
    text: '',
    image_url: ''
  })
  const handleSubmit = () => {
    axios.post('http://localhost:1234/posts/add',form)
      .then(response => { if(response.status === 200 ) window.location.href='/';
      })
      .catch(err => console.error(err.message))
  }

  const updateFields = e => {
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  return (
      <FormControl>
        <TextField label='Title' placeholder='Title' onChange={updateFields} name='title'/>
        <TextField label='Image' placeholder='Image' onChange={updateFields} name='image_url'/>
        <TextField label='Text' placeholder='Enter your text' onChange={updateFields} name='text' multiline/>
        <Button onClick={ handleSubmit }>Submit</Button>
      </FormControl>
    )

}

export default ModifyPost