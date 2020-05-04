import React from 'react'
import propTypes from 'prop-types'

import { Container, Content } from './styles'

const Box = props => {
  const { children, disableBorder, onClick, selected } = props
  return (
    <Container onClick={onClick} disableBorder={disableBorder} selected={selected}>
      <Content>{children}</Content>
    </Container>
  )
}

Box.defaultProps = {
  onClick: () => {},
  disableBorder: false,
  selected: false,
}

Box.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
  disableBorder: propTypes.bool,
  selected: propTypes.bool,
}

export default Box
