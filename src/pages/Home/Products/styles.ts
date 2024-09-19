import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${colors.white};
  width: 450px;
  height: 450px;
  border: solid ${colors.pink} 1px;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 500px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const TagPosition = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
`

export const Title = styled.h3`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: 8px;
  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }

  div {
    margin-right: 75px;
    width: 100px;
    display: flex;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 0;

      img {
        margin-right: 5px;
        margin-left: 0;
      }

      h3 {
        margin-left: 0;
      }
    }
  }
`

export const Rating = styled.img`
  width: 25%;
  margin: 0 10px 0 100px;
`

export const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
  padding: 0 8px;
  line-height: 1.4;
`

export const Click = styled.button`
  background-color: ${colors.pink};
  padding: 5px 8px;
  border: none;
  margin-left: 8px;
  font-weight: bold;
  display: block;
  color: ${colors.font};
  cursor: pointer;
  text-decoration: none;
  bottom: 5px;
  position: absolute;
`
