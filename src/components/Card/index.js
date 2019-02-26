import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Card as BsCard } from 'react-bootstrap'
import './style.scss'

const Card = ({children, className, align, ...props}) => (
  <BsCard {...props} className={classNames("my-card", className)}>
    <BsCard.Body
      className={`my-card__body my-card__body--${align}`}
    >
      {children}
    </BsCard.Body>
  </BsCard>
)

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
}

Card.defaultProps = {
  align: 'center',
  children: 'Card'
}

export default Card