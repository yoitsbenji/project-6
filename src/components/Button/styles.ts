import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const StandardClick = styled.button<Props>`
  background-color: ${colors.cream};
  padding: 5px 8px;
  border: none;
  width: 100%;
  font-weight: bold;
  display: block;
  color: ${colors.pink};
  cursor: pointer;
  margin-top: 15px;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  padding: 5px 8px;
  border: none;
  margin-left: 8px;
  font-weight: bold;
  display: block;
  color: ${colors.font};
  cursor: pointer;
  text-decoration: none;
  position: absolute;
`
