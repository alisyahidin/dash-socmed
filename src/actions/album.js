export const OPEN_MODAL_ALBUM = 'OPEN_MODAL_ALBUM'
export const FETCH_SINGLE_ALBUM = 'FETCH_SINGLE_ALBUM'
export const FETCH_SINGLE_ALBUM_SUCCESS = 'FETCH_SINGLE_ALBUM_SUCCESS'
export const FETCH_SINGLE_ALBUM_FAILURE = 'FETCH_SINGLE_ALBUM_FAILURE'
export const CLEAR_SINGLE_ALBUM = 'CLEAR_SINGLE_ALBUM'

export const openModal = (open, albumId) => ({
  type: OPEN_MODAL_ALBUM,
  albumId,
  open,
})

export const fetchSingleAlbum = id => ({
  type: FETCH_SINGLE_ALBUM,
  id
})

export const fetchSingleAlbumSuccess = payload => ({
  type: FETCH_SINGLE_ALBUM_SUCCESS,
  payload
})

export const fetchSingleAlbumFailure = payload => ({
  type: FETCH_SINGLE_ALBUM_FAILURE,
  payload
})

export const clearSingleAlbum = () => ({
  type: CLEAR_SINGLE_ALBUM
})