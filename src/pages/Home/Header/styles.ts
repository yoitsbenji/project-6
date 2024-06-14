import styled from 'styled-components'
import { colors } from '../../../styles'

export const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px;
  margin-bottom: 20px;
  background-color: ${colors.cream};
  color: ${colors.pink};
  position: relative;
`

export const SubTitle = styled.div`
  width: 600px;
  margin: auto;

  h3 {
    margin-top: 15vh;
    font-size: 36px;
  }
`
export const Title = styled.a`
  magin-top: 0;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.pink};
  background-color: ${colors.white};
  font-size: 30px;
  padding: 10px;
  width: 120px;
  height: 70px;
  border: 4px solid ${colors.pink};
`
