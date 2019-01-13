import React from 'react'
import ReactPageScroller from 'react-page-scroller'
import { Column, Row } from '../components/layout'
import Home from './home'

import './base.css'
import About from './about'
import Talk from './talks'
import Projects from "./projects";

let reactPageScroller;

const IndexPage = () => (
  <Column>
    <Row background={`#303F9F`} padding="20px" justify={'flex-end'}>
      <Column
        maxWidth="50px"
        margin="0 10px"
        onClick={() => reactPageScroller.goToPage(1)}
      >
        About
      </Column>
      <Column
        maxWidth="70px"
        margin="0 10px"
        onClick={() => reactPageScroller.goToPage(2)}
      >
        Projects
      </Column>
      <Column
        maxWidth="50px"
        margin="0 10px"
        onClick={() => reactPageScroller.goToPage(3)}
      >
        Talks
      </Column>
    </Row>
    <ReactPageScroller ref={c => (reactPageScroller = c)}>
      <Home key={'home'} />
      <About key={'about'} />
      <Projects key={'projects'} />
      <Talk key={'talk'} />
    </ReactPageScroller>
  </Column>
)

export default IndexPage
