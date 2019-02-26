import React from 'react'
import ContentLoader from "react-content-loader"

import { random } from '../../helper'
import './style.scss'

const PostLoader = ({repeat, long, ...props}) => [...Array(repeat)].map((_, i) => (
  <ContentLoader
    key={i}
    className="post-loader"
    height={long ? 190 : 100}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="15" rx="5" ry="5" width="230" height="7" />
    <rect x="0" y="30" rx="3" ry="3" width="85" height="6.4" />
    <rect x="0" y="50" rx="3" ry="3" width={random(200, 350)} height="6.4" />
    <rect x="0" y="65" rx="3" ry="3" width={random(200, 350)} height="6.4" />
    <rect x="0" y="80" rx="3" ry="3" width={random(200, 350)} height="6.4" />
    {long && (
      <>
        <rect x="0" y="95" rx="3" ry="3" width={random(200, 350)} height="6.4" />
        <rect x="0" y="110" rx="3" ry="3" width={random(200, 350)} height="6.4" />
        <rect x="0" y="125" rx="3" ry="3" width={random(200, 350)} height="6.4" />
        <rect x="0" y="140" rx="3" ry="3" width={random(200, 350)} height="6.4" />
        <rect x="0" y="155" rx="3" ry="3" width={random(200, 350)} height="6.4" />
        <rect x="0" y="170" rx="3" ry="3" width={random(200, 350)} height="6.4" />
      </>
    )}
  </ContentLoader>
))

PostLoader.defaultProps = {
    repeat: 1,
    long: false
}

export default PostLoader