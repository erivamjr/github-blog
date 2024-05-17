import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PostProvider } from './context/PostContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostProvider>
          <Router />
        </PostProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
