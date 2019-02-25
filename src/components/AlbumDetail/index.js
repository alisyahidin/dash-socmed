import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap'

import { openModal } from '../../actions/album'

import PostLoader from '../Loader/PostLoader'

const AlbumDetail = ({
  album,
  openModal,
}) => (
  <Modal
    id="album-detail"
    size="lg"
    show={album.open}
    onHide={() => openModal(false)}
  >
    {album.error && <h3 className="w-100 text-center my-5">{album.error}</h3>}
    {album.loading && (
      <Modal.Body className="h-75 text-center">
        <PostLoader long />
      </Modal.Body>
    )}
    {album.data !== null && (
      <>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>{album.data.title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          {console.log(album)}
        </Modal.Body>
      </>
    )}
  </Modal>
)

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    openModal
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail)