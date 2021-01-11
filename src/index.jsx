import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n'
import About from './pages/About'
import Clients from './pages/Clients'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Video from './pages/Video'
import Photo from './pages/Photo'
import Work from './pages/Work'
import './App.scss'

i18n.changeLanguage('es')

const MainRouter = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Switch>
        <Route
          path="/about"
          component={() => <About />}
        />
        <Route
          path="/clients"
          component={() => <Clients />}
        />
        <Route
          path="/contact"
          component={() => <Contact />}
        />
        <Route
          path="/services"
          component={() => <Services />}
        />
        <Route
          path="/video"
          component={() => <Video />}
        />
        <Route
          path="/photo"
          component={() => <Photo />}
        />
        <Route
          path="/work"
          component={() => <Work />}
        />
        <Route
          path="/"
          render={() => <Home />}
        />
      </Switch>
    </BrowserRouter>
  </I18nextProvider>
)

const rootElement = document.getElementById('root')
ReactDOM.render((<MainRouter />), rootElement)
