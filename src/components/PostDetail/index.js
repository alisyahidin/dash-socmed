import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { FaRegComment } from 'react-icons/fa'

import Comment from '../Comment/'
import CommentForm from '../Comment/Form/'
import './style.scss'

const PostDetail = ({open, toggleOpen}) => (
  <Modal size="md" show={open} onHide={() => toggleOpen(false)}>
    <Modal.Header closeButton>
      <Modal.Title>
        <h2>Lorem Ipsum</h2>
        <Link to="/profile" className="author d-flex align-items-center mt-sm-2">
          <h5>
            Ali <span className="author__username">@ali</span>
          </h5>
        </Link>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="px-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
        tempore error autem atque quas corrupti, cupiditate. Earum voluptate,
        error, ipsam itaque, repellat commodi aliquam id veniam neque explicabo
        iste sequi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
        tempore error autem atque quas corrupti, cupiditate. Earum voluptate,
        error, ipsam itaque, repellat commodi aliquam id veniam neque explicabo
        iste sequi.
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
  </Modal>
)

export default PostDetail