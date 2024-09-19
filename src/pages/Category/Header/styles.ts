import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px;
  background-color: ${colors.cream};
  color: ${colors.pink};
  position: relative;
`

export const HList = styled.ul`
  list-style: none;
  display: flex;
  width: 75%;
  @media (max-width: ${breakpoints.desktop}) {
    align-items: center;
    width: 100%;
  }

  a {
    cursor: pointer;
    @media (max-width: ${breakpoints.desktop}) {
      margin: 10px;
    }
    @media (max-width: ${breakpoints.cell}) {
      width: 10%;
      margin: 10px;
    }
  }
`

export const Hlink = styled.a`
  color: ${colors.pink};
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
`

export const Title = styled.a`
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.pink};
  background-color: ${colors.white};
  border: 4px solid ${colors.pink};
  font-size: 30px;
  align-itens: center;
  width: 120px;
  height: 70px;
`
