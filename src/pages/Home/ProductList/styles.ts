import styled from 'styled-components'

import { Props } from '.'

export const Section = styled.section<Omit<Props, 'title' | 'item'>>`
  margin-top: 50px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
`
