import React from 'react'
import PropTypes from 'prop-types'

const ComponentesJS = ({ nombre, edad }) => {
  return (
    <div>ComponentesJS</div>
  )
}

ComponentesJS.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number
}

export default ComponentesJS