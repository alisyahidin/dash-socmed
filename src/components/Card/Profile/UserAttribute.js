import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import './style.scss'

const UserAttribute = ({label, value}) => {
  return (
    <div className="d-flex w-100">
      <Form.Label column sm="4">
        <b>{label}</b>
      </Form.Label>
      <Form.Label column>
        {value}
      </Form.Label>
    </div>
  )
}

UserAttribute.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

UserAttribute.defaultProps = {
  label: 'label',
  value: 'value',
}

export default UserAttribute