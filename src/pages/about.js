import React from 'react'
import Page from './page'
import { Column } from '../components/layout'

const About = () => (
  <Page background="#E8EAF6" color="#303F9F" padding="0 30px" style={{ overflowY: 'scroll'}}>
    <h1>About</h1>
    <Column maxHeight="max-content">
      <p>
        I am a hands-on Full Stack Engineer with high empathy for business – proficient at designing, coding and
        managing teams to build effective solutions for business problems.
      </p>
      <p>
        I bring a good mix of 8+ years of experience in agile development, implementation and management of continuous
        delivery for projects and SaaS product engagements.
      </p>
      <p>
        I am passionate about programming and strive to continuously improve the quality of the software.
      </p>
      <p>
        Currently, I working on Spring, Docker, k8s, React. Before this I was
        working on NodeJs ecosystem with GraphQL to build a finance related
        solution.
      </p>
      <p>
        I have been working on Java, Javascript, React, NodeJs, Spring boot, Docker,
        Kubernetes, Python, Django. However my preferred stack is Python,
        NodeJs.
      </p>
    </Column>
  </Page>
)

export default About
