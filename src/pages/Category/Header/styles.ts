import styled from 'styled-components'
import { colors } from '../../../styles'

export const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px;
  background-color: ${colors.darkblue};
  color: ${colors.white};
  position: relative;
`

export const HList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`

export const Hlink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
`

export const Title = styled.a`
  padding: 10px;
  margin-left: 4em;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.white};
  font-size: 30px;
  align-itens: center;
  width: 120px;
  height: 70px;
  border: 4px solid ${colors.white};
`
