import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : ' 14px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '5px 15px' : '4px 6px')};
  display: inline;
  margin-right: 10px;
  right: 10px;
`
