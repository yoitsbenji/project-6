import styled from 'styled-components'
import { colors } from '../../../styles'
import { Props } from '../../../components/Tags'

export const Card = styled.div`
  background-color: ${colors.white};
  width: 450px;
  height: 450px;
  position: relative;
  border: solid ${colors.pink} 1px;
`

export const Image = styled.img`
  width: 100%;
  height: 250px;
`

export const TagPosition = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
`

export const Rating = styled.img`
  width: 24px;
  position: absolute;
  right: 10px;
  top: 27.7vh;
`

export const RatingNote = styled.div<Props>`
  color: ${colors.pink};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  position: absolute;
  margin-top: 5px;
  right: 40px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-top: 12px;
  margin-left: 8px;
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
