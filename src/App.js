import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Icon from '@material-ui/core/Icon'
import { Root, Header, Nav, Content, Footer, presets } from 'mui-layout'
import './App.css'
import HeaderContent from './components/Layout/HeaderContent'

const baseTheme = createMuiTheme() // or use your own theme;
const config = presets.createDefaultLayout()

function App() {
  return (
    <MuiThemeProvider theme={baseTheme}>
      <Root config={config} style={{ minHeight: '100vh' }}>
        <CssBaseline />
        <Header renderMenuIcon={opened => (opened ? <Icon>chevron_left</Icon> : <Icon>menu_rounded</Icon>)}>
          {({ screen, collapsed }) => <HeaderContent screen={screen} collapsed={collapsed} />}
        </Header>
        <Nav
          renderIcon={collapsed => (collapsed ? <Icon>chevron_right</Icon> : <Icon>chevron_left</Icon>)}
          header={({ collapsed }) => <p>Nav Header</p>}
        >
          nav
        </Nav>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Root>
    </MuiThemeProvider>
  )
}

export default App
