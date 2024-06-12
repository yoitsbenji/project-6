import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../../styles'
import { Card } from '../../../components/Products/styles'

export const Section = styled.section<Omit<Props, 'title' | 'item'>>`
  ackground-color: ${(props) =>
    props.background === 'blue' ? colors.blue : colors.lightBlue};

  ${Card} {
    margin-top: 40px;
    background-color: ${(props) =>
      props.background === 'blue' ? colors.lightBlue : colors.blue};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
`
export const Banner = styled.div`
  height: 100%;
  postion: relative;

  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
    filter: brightness(40%);
  }
`

export const SubTitle = styled.h3`
  position: absolute;
  top: 18vh;
  font-size: 24px;
`

export const SubSubTitle = styled.h2`
  position: absolute;
  top: 48vh;
  font-size: 24px;
  font-weight: 100;
`
