import { of } from 'rxjs'
import { takeUntil, mergeMap, map, catchError } from 'rxjs/operators'

import {
  OPEN_MODAL_ALBUM,
  FETCH_SINGLE_ALBUM,
  CLEAR_SINGLE_ALBUM,
  fetchSingleAlbum,
  fetchSingleAlbumSuccess,
  fetchSingleAlbumFailure,
  clearSingleAlbum
} from "../actions/album"

export const openModalAlbumEpic = action$ => action$.ofType(OPEN_MODAL_ALBUM).pipe(
  map(action => typeof action.albumId !== 'undefined' && action.open !== false
    ? fetchSingleAlbum(action.albumId)
    : clearSingleAlbum()
  )
)

export const fetchSingleAlbumEpic = (action$, state$, { fetch$ }) => {
  return action$
    .ofType(FETCH_SINGLE_ALBUM)
    .pipe(
      mergeMap(action => fetch$(`/albums/${action.id}`).pipe(
        mergeMap(album  => fetch$(`/photos?albumId=${album.data.id}`).pipe(
          map(photos => {
            const photo = photos.data.map(singlePhoto => {
              const { url, thumbnailUrl, title, ...photo } = singlePhoto
              return {
                original: url,
                thumbnail: thumbnailUrl,
                originalTitle: title,
                description: title,
                ...photo
              }
            })
            return fetchSingleAlbumSuccess({photos: photo, ...album.data})
          }),
          takeUntil(action$.ofType(CLEAR_SINGLE_ALBUM)),
        ))
      )),
      catchError(error => {
        console.log(error)
        return of(fetchSingleAlbumFailure('Cannot get Post, please try again :)'))
      })
    )
}