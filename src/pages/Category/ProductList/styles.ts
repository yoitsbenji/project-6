import styled from 'styled-components'

import { breakpoints, colors } from '../../../styles'
import { Props } from '../../Home/ProductList'

export const Section = styled.section<Omit<Props, 'title' | 'item'>>`
  margin-top: 0;
`

export const List = styled.ul`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
  }
  @media (max-width: ${breakpoints.cell}) {
    grid-template-columns: 1fr;
    margin: 0;
  }
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

export const Title = styled.div`
  top: 20vh;
  position: absolute;
  display: block;

  h2 {
    color: ${colors.white};
    margin-bottom: 15vh;
    font-size: 32px;
    font-weight: 100;
  }

  h3 {
    font-size: 32px;
    color: ${colors.white};
  }
`
