import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  margin: 0;
  background-color: ${colors.yellow};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '14px' : ' 12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '5px 15px' : '4px 6px')};
  border-radius: 5px;
  display: inline-block;
`
