import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { colors } from '../../styles'

export const Footer = styled.div`
  background-color: ${colors.cream};
  color: ${colors.pink};
  width: 100%;
  text-align: center;
  padding: 80px;
  margin-top: 50px;
  position: relative;
`

export const Link = styled(HashLink)`
  text-decoration: none;
`

export const Title = styled.p`
  color: ${colors.pink};
  border: 4px solid ${colors.pink};
  magin-top: 0;
  margin: auto;
  font-weight: bold;
  text-decoration: none;
  font-size: 30px;
  padding: 10px;
  width: 120px;
  height: 70px;
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
