import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../../styles'

export const Section = styled.section<Omit<Props, 'title' | 'item'>>`
  margin-top: 0;
`

export const List = styled.ul`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
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
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
`

export const SubSubTitle = styled.h2`
  position: absolute;
  top: 48vh;
  font-size: 32px;
  color: ${colors.white};
`
