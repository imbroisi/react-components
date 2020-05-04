import styled from 'styled-components'

import { theme, white, grayE6 } from 'theme'

const { background } = theme.button.default

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  ${({ disableBorder }) => !disableBorder && `border-left: 1px solid ${grayE6}`}
  ${({ selected }) => selected && `background-color: ${background}; color: ${white};`}
  ${({ onClick, selected }) => !selected && onClick && 'cursor: pointer'}
`

const Content = styled.div`
  user-select: none;
`

export { Container, Content }
