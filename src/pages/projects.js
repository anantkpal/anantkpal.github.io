import React from 'react'
import Page from './page'
import { Column, Row } from '../components/layout'

const Projects = () => (
  <Page background="#E8EAF6" padding="30px" color="#303F9F">
    <Column padding="20px 0" maxHeight="fit-content">
      <h1>Projects</h1>
    </Column>
    <Row maxHeight="max-content" minHeight="250px" flexWrap="wrap" padding="10px" >
      <Column padding="10px" border="2px solid #303F9F" margin="10px" borderRadius="10px">
        <a  rel="noopener noreferrer" href="https://github.com/anantkpal/awsrcompressor/" target="_blank"><h2>awsrcompressor - (HTML,JS,CSS Compressor)</h2></a>
        <span>
          <strong>awsrcompressor</strong> can compress HTML,js,css files.It is built using YUICompressor as core for
          compressing js and css files, and custom code to trim spaces between tags, removing commented code in HTML as
          well as minifying Javascript and CSS content present in the html file itself. It can compress the files
          recurssively if the input folder and target folder path is given.
        </span>
      </Column>
      <Column border="2px solid #303F9F" padding="10px" margin="10px" borderRadius="10px">
        <a rel="noopener noreferrer" href="https://github.com/anantkpal/awsrcompressor/" target="_blank"> <h2>AnAwesomejQCarousel</h2></a>
        <span>
          <strong>AnAwesomejQCarousel</strong> is a simple carousel jQuery plugin for just anything!!.
        </span>
      </Column>

    </Row>
    <Row maxHeight="max-content" minHeight="250px" flexWrap="wrap" padding="10px" >
      <Column padding="10px" border="2px solid #303F9F" margin="10px" borderRadius="10px">
        <a rel="noopener noreferrer" href="https://github.com/anantkpal/jQAList/" target="_blank"><h2>jQAList</h2></a>
        <span>
          <strong>jQAList</strong> A jQuery Plugin to sort, search any kind of Lists.
        </span>
      </Column>
      <Column border="2px solid #303F9F" padding="10px" margin="10px" borderRadius="10px">
        <a rel="noopener noreferrer" href="https://github.com/anantkpal/simplejsonutil/" target="_blank"> <h2>Simple JSON Util Web</h2></a>
        <span>
          <strong>Simple JSON Util Web</strong> is a website where you can validate your JSON, get value using path..
        </span>
      </Column>

    </Row>
  </Page>
)

export default Projects
