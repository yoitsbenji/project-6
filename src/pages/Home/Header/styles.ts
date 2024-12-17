import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const Header = styled.div`
  background-color: ${colors.cream};
  color: ${colors.pink};
  width: 100%;
  text-align: center;
  padding: 40px;
  margin-bottom: 20px;
  display: block;
`

export const SubTitle = styled.div`
  margin: auto;

  h3 {
    margin-top: 15vh;
    font-size: 36px;
    @media (max-width: ${breakpoints.cell}) {
      font-size: 20px;
      width: 300px;
    }
  }
`

export const Title = styled.a`
  color: ${colors.pink};
  background-color: ${colors.white};
  border: 4px solid ${colors.pink};
  magin-top: 0;
  font-weight: bold;
  text-decoration: none;
  font-size: 30px;
  padding: 10px;
  width: 120px;
  height: 70px;
`
