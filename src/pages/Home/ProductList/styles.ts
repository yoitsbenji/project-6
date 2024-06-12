import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../../styles'
import { Card } from '../../../components/Products/styles'

export const Section = styled.section<Omit<Props, 'title' | 'item'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'blue' ? colors.blue : colors.lightBlue};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'blue' ? colors.lightBlue : colors.blue};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
`
