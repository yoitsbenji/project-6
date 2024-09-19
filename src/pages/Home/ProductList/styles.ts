import styled from 'styled-components'

import { Props } from '.'
import { breakpoints } from '../../../styles'

export const Section = styled.section<Omit<Props, 'title' | 'item'>>`
  margin-top: 50px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  list-style: none;
  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 10px;
  }
  @media (max-width: ${breakpoints.cell}) {
    column-gap: 10px;
    grid-template-columns: 1fr;
  }
`
