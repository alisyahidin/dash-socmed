import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import { openModal } from '../../../actions/singlePost'
import './style.scss'

const Post = ({author, id, title, body, openModal, ...props}) => {
  return (
    <>
      <Row className="post mx-sm-1">
        <Col className="p-sm-0 d-flex flex-column justify-content-center align-items-start">
          <h5 onClick={() => openModal(true, id)} className="post__title mb-sm-2">{title}</h5>
          <span>
            by&nbsp;-&nbsp;
            <Link to={`/users/${author.id}`} className="author d-inline-block mb-sm-1">
              <b className="mr-sm-1">
                {author.name}
              </b>
              <span className="author__username mr-sm-2">
                @{author.username}
              </span>
            </Link>
          </span>
          <div onClick={() => openModal(true, id)} className="post__body">
            <p className="mb-sm-2">{body}</p>
          </div>
        </Col>
      </Row>
    </>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

Post.defaultProps = {
  id: 0,
  author: {
    id: 1,
    name: 'Guest',
    username: 'guest'
  },
  title: 'Title',
  body: 'Post',
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    openModal
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
