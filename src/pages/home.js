import React from 'react'
import Page from './page'
import { Column, Row } from "../components/layout";

const Home = () => (
  <Page background="#E8EAF6" align={'center'} justify={'center'} color="#303F9F">
    <img src="https://s.gravatar.com/avatar/2f0b632346d052e02db136ab194c0076?s=256" style={{ borderRadius: '256px' }}/>
    <h1>Hello, I'm Anant Pal</h1>
    <h3>Full Stack Engineer | Polyglot</h3>
    <Row maxHeight="fit-content">
      <Column padding="10px"><a href="https://github.com/anantkpal" target="_blank">Github</a></Column>
      <Column padding="10px">|</Column>
      <Column padding="10px"><a href="https://in.linkedin.com/in/anantkpal" target="_blank">Linkedin</a></Column>
      <Column padding="10px">|</Column>
      <Column padding="10px"><a href="https://stackoverflow.com/users/1100182/anant-pal" target="_blank">Stackoverflow</a></Column>
    </Row>
  </Page>
)

export default Home
