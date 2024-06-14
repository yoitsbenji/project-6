import styled from 'styled-components'
import { colors } from '../../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  color: ${colors.cream};
  width: 330px;
  height: 430px;
  position: relative;
  border: solid ${colors.pink} 1px;
  margin-top: 20px;
`

export const Image = styled.img`
  width: 100%;
  height: 250px;
  padding: 8px;
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
  margin-left: 8px;
`

export const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
  padding: 0 8px;
  line-height: 1.6;
`

export const Click = styled.button`
  background-color: ${colors.cream};
  color: ${colors.pink};
  padding: 5px;
  width: 310px;
  margin: 0 8px;
  border: none;
  font-weight: bold;
  display: block;
  cursor: pointer;
  text-decoration: none;
  bottom: 5px;
  position: absolute;
`
