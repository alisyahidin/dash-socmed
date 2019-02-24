import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { FaRegComment } from 'react-icons/fa'

import {
  fetchSinglePost,
  clearSinglePost
} from '../../actions/post'

import Comment from '../Comment/'
import CommentForm from '../Comment/Form/'
import './style.scss'

const PostDetail = ({
  id,
  open,
  post,
  toggleOpen,
  fetchSinglePost,
  clearSinglePost,
  ...props
}) => (
  <Modal
    size="md"
    show={open}
    onEnter={() => fetchSinglePost(id)}
    onHide={() => toggleOpen(false)}
    onExited={clearSinglePost}
  >
    {post.error && <h1>{post.error}</h1>}
    {post.single !== null && (
      <>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{post.single.title}</h2>
            <Link to="/profile" className="author d-flex align-items-center mt-sm-2">
              <h5>
                Ali <span className="author__username">@ali</span>
              </h5>
            </Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <p>
            {post.single.body}
          </p>

          <span className="comment-icon mt-sm-2 d-flex align-items-center">
            <FaRegComment className="mr-sm-1" /> 5
          </span>
        </Modal.Body>
        <Modal.Footer className="flex-column">
          <CommentForm />
          <hr className="w-100" />
          <Comment />
          <Comment />
          <Comment />
        </Modal.Footer>
      </>
    )}
    {post.single === null && (
      <Modal.Body className="h-75">
      </Modal.Body>
    )}
  </Modal>
)

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchSinglePost,
    clearSinglePost
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)