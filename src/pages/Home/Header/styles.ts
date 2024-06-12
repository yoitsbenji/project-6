import styled from 'styled-components'
import { colors } from '../../../styles'

export const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px;
  margin-bottom: 20px;
  background-color: ${colors.darkblue};
  color: ${colors.white};
  position: relative;

  h3 {
    margin-top: 15vh;
  }
`
export const Title = styled.a`
  magin-top: 0;
  margin: auto;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.white};
  font-size: 30px;
  padding: 10px;
  width: 120px;
  height: 70px;
  border: 4px solid ${colors.white};
`
