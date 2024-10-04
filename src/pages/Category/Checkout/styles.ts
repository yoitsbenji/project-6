import styled from 'styled-components'
import { colors } from '../../../styles'

export const FList = styled.ul`
  color: ${colors.cream};

  h2 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  li {
    display: block;
    justify-content: space-between;

    label {
      display: block;
      margin: 10px 0;
    }

    input {
      border: 1px solid ${colors.pink};
      padding: 10px;
      width: 100%;
      background-color: ${colors.cream};
      -webkit-appearance: none;
    }
  }
`

export const Line1 = styled.div`
  display: flex;
    flex: auto;


  li {
    width: 175px;

    input,
    label {
  }
`
