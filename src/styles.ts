import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkblue: '#0d152a ',
  blue: '#192a56',
  lightBlue: '#273c75',
  white: '#f5f6fa',
  yellow: '#e1b12c'
}

export const GlobalCss = createGlobalStyle`
    * {
      margin: 0 ;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;

    }

    body {
      color: ${colors.white};
      background-color: ${colors.blue};
    }`

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`
