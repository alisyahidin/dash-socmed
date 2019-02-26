import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Form } from 'react-bootstrap'

import { createSinglePost } from '../../actions/singlePost'

const PostForm = ({singlePost, createSinglePost}) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <Form className="text-center w-100 d-flex flex-column justify-content-center">
      <Form.Group controlId="title">
        <Form.Control onChange={({target}) => setTitle(target.value)} value={title} type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group controlId="body">
        <Form.Control onChange={({target}) => setBody(target.value)} value={body} as="textarea" placeholder="Body" />
      </Form.Group>

      <Button
        disabled={title === '' && body === ''}
        onClick={() => createSinglePost({title, body})}
        variant="primary"
        className="mt-sm-2 mx-auto">
        {singlePost.loading ? 'Creating' : 'Create Post'}
      </Button>
    </Form>
  )
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createSinglePost
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)