import styled from 'styled-components'
import { colors } from '../../styles'
import { Click } from '../../pages/Home/Products/styles'
import trash from '../../assets/images/trash.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  color: ${colors.white};
  margin: 0;
  z-index: 1;
  background-color: ${colors.pink};
  padding: 30px 14px 0 14px;

  ul {
    display: block;
    margin: 15px 0;
  }

  ${Click} {
    background-color: ${colors.cream};
    color: ${colors.pink};
    top: 0;
    margin: 0;
    position: relative;
    width: 100%;
  }
`

export const Product = styled.li`
  list-style: none;
  width: 350px;
  background-color: ${colors.cream};
  color: ${colors.pink};
  padding: 5px;
  display: flex;
  position: relative;
  margin-bottom: 15px;

  div {
    margin: 0 5px;

    span {
      margin-top: 10px;
      display: block;
      font-size: 14px;
    }
  }

  button {
    background-image: url(${trash});
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 0;
    right: 0;
    margin: 5px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`

export const ProductImage = styled.div`
  left: 0;
  margin: 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  display: flex;
  color: ${colors.cream};
  margin: 40px 0 10px;
  justify-content: space-between;

  span {
    font-size: 14px;
    margin: 0;
  }
`
