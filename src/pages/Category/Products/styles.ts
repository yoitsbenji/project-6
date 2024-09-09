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

  &:hover {
    background-color: ${colors.white};
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  display: none;
  z-index: 1;

  &.visible {
  display: block;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
}`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  display: flex;
  margin: auto;
  margin-top: 30vh;
  padding: 30px;
  background-color: ${colors.pink};
  color: ${colors.white};
  z-index: 1;
`

export const Box = styled.div`
  width: 300px;
  height: 300px;
  display: flex;

  img {
    object-fit: cover;
    width: 300px;
    height: 300px;
  }
`

export const Text = styled.div`
  display: block;
  margin-left: 30px;

  h4 {
    margin-bottom: 20px;
    font-size: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  ${Click} {
    font-size: 16px;
    margin: 0;
    bottom: 7vh;
    padding: 2px;
    width: 280px;
  }
`
