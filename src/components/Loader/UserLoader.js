import React from 'react'
import ContentLoader from "react-content-loader"
import { random } from '../../helper'

const UserLoader = ({repeat, ...props}) => [...Array(repeat)].map((_, i) => (
  <ContentLoader
    key={i}
    height={30}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <circle cx="10" cy="10" r="10" />
    <rect
      x="25"
      y="7"
      rx="5"
      ry="5"
      height="7"
      width={random(80, 150)}
    />
  </ContentLoader>
))

UserLoader.defaultProps = {
    repeat: 1
}

export default UserLoader