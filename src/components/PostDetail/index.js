import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'

import { openModal } from '../../actions/singlePost'

import Comment from '../Comment/'
import CommentForm from '../Comment/Form/'
import PostLoader from '../Loader/PostLoader'
import './style.scss'

const PostDetail = ({
  singlePost,
  openModal,
}) => (
  <Modal
    size="lg"
    show={singlePost.open}
    onHide={() => openModal(false)}
  >
    {singlePost.error && <h1>{singlePost.error}</h1>}
    {singlePost.loading && (
      <Modal.Body className="h-75 text-center">
        <PostLoader long />
      </Modal.Body>
    )}
    {singlePost.data !== null && (
      <>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>{singlePost.data.title}</h4>
            <h5 className="d-flex align-items-center mt-sm-2">
              by&nbsp;-&nbsp;
              <Link to="/profile" className="author d-flex align-items-center">
                  Ali <span className="author__username">@ali</span>
              </Link>
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <p>
            {singlePost.data.body}
          </p>
        </Modal.Body>
        <Modal.Footer className="flex-column">
          <CommentForm />
          <hr className="w-100 mb-0 mt-4" />
          {singlePost.data.comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Modal.Footer>
      </>
    )}
  </Modal>
)

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    openModal
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)