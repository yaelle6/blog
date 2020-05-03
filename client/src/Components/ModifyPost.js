import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react'

const ModifyPost = () => {
    const handleSubmit = () => {

    }

    return (
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Title' placeholder='Title' />
            <Form.Input fluid label='Author' placeholder='Author' />
          </Form.Group>

          <Form.TextArea label='Text' placeholder='Enter your text' />
          <Form.Button>Submit</Form.Button>
        </Form>
      )

}

export default ModifyPost