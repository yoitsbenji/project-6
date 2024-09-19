import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const colors = {
  cream: '#fae3cb',
  white: '#fff',
  lightCream: '#fef9f4 ',
  pink: '#E66767',
  font: '#f8ded5'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  cell: '480px'
}

export const GlobalCss = createGlobalStyle`
    * {
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }

    body {
      color: ${colors.pink};
      background-color: ${colors.lightCream};
    }`

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }
`
