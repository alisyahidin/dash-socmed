import React from 'react'
import ContentLoader from "react-content-loader"

const ProfileLoader = props => (
  <ContentLoader
    height={400}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <circle cx="50%" cy="55" r="35" />
    <rect x="30%" y="105" rx="7" ry="7" width="40%" height="13" />
    <rect x="40%" y="130" rx="7" ry="7" width="20%" height="9" />
    <rect x="20" y="175" rx="7" ry="7" width="18%" height="10" />
    <rect x="150" y="175" rx="7" ry="7" width="40%" height="10" />
    <rect x="20" y="200" rx="7" ry="7" width="20%" height="10" />
    <rect x="150" y="200" rx="7" ry="7" width="45%" height="10" />
    <rect x="20" y="225" rx="7" ry="7" width="22%" height="10" />
    <rect x="150" y="225" rx="7" ry="7" width="35%" height="10" />
    <rect x="20" y="250" rx="7" ry="7" width="18%" height="10" />
    <rect x="150" y="250" rx="7" ry="7" width="40%" height="10" />
    <rect x="20" y="275" rx="7" ry="7" width="20%" height="10" />
    <rect x="150" y="275" rx="7" ry="7" width="45%" height="10" />
    <rect x="20" y="300" rx="7" ry="7" width="21%" height="10" />
    <rect x="150" y="300" rx="7" ry="7" width="35%" height="10" />
    <rect x="20" y="325" rx="7" ry="7" width="20%" height="10" />
    <rect x="150" y="325" rx="7" ry="7" width="40%" height="10" />
    <rect x="20" y="350" rx="7" ry="7" width="23%" height="10" />
    <rect x="150" y="350" rx="7" ry="7" width="45%" height="10" />
  </ContentLoader>
)

ProfileLoader.defaultProps = {
    repeat: 1
}

export default ProfileLoader