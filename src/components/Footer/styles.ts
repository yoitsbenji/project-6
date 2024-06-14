import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px;
  margin-top: 50px;
  background-color: ${colors.cream};
  color: ${colors.pink};
  position: relative;
`
export const Title = styled.a`
  magin-top: 0;
  margin: auto;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.pink};
  font-size: 30px;
  padding: 10px;
  width: 120px;
  height: 70px;
  border: 4px solid ${colors.pink};
`

export const Social = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 40px;

  img {
    width: 30px;
    margin: 5px;
  }
`
export const Copyright = styled.p`
  margin-top: 10vh;
`
