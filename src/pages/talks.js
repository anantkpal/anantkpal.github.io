import React from 'react'
import Page from './page'
import { Column } from '../components/layout'

const Talk = () => (
  <Page background="#E8EAF6" padding="0 30px" color="#303F9F">
    <Column padding="20px 0" maxHeight="fit-content">
      <h1>Talks</h1>
    </Column>
    <Column maxHeight="max-content" justify={'center'}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/78LT0M_jkls"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Column>
  </Page>
)

export default Talk
