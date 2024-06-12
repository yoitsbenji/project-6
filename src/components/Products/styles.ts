import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.lightBlue};
  border-radius: 14px;
  align-itens: center;
  padding: 10px;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 7px;
`

export const TagPosition = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-top: 20px;
  margin-bottom: 14px;
`

export const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
`

export const Click = styled.button`
  background-color: ${colors.yellow};
  padding: 6px 8px;
  border: none;
  display: block;
  color: ${colors.white};
  margin-top: 26px;
  border-radius: 5px;
  cursor: pointer;
`
