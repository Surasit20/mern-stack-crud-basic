import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function SearchStudent() {
  return (

    <div className='form-wrapper mt-4'>
    <h1> Create Student</h1>
    <Form>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text'   ></Form.Control>
      </Form.Group>

      <Form.Group controlId='Subject'>
        <Form.Label>Subject</Form.Label>
        <Form.Control type='text'></Form.Control>
      </Form.Group>

      <Form.Group controlId='Score'>
        <Form.Label>Score</Form.Label>
        <Form.Control type='number'></Form.Control>
      </Form.Group>
      <div className="d-grid">
        <Button variant='success' size="lg"  type='submit' className='mt-3'  >
          Save
        </Button>
      </div>
    </Form>
  </div>
  )
}
