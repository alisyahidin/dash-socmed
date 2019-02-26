import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery';

import {
  openModal as openAlbumModal,
  clearSingleAlbum
} from '../../actions/album'

import PostLoader from '../Loader/PostLoader'
import img from '../../assets/images/placeholder.png'

const AlbumDetail = ({
  album,
  openAlbumModal,
  clearSingleAlbum
}) => (
  <Modal
    id="album-detail"
    size="lg"
    show={album.open}
    onHide={() => openAlbumModal(false)}
    onExiting={clearSingleAlbum}
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
            <h4><b>Album: </b>{album.data.title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <ImageGallery
            items={album.data.photos}
            lazyLoad
            showFullscreenButton={false}
            showPlayButton={false}
            defaultImage={img}
          />
        </Modal.Body>
      </>
    )}
  </Modal>
)

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    openAlbumModal,
    clearSingleAlbum
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail)