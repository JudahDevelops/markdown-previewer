import { useState } from 'react'
import React, { Component } from 'react';
import './App.css'
import { marked, Marked } from 'marked';

class App extends React.Component {
  render() {
    return (
      <MarkdownCompiler />
    )
  }
}

class MarkdownCompiler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ input: event.target.value })
  }

  render() {

    const htmlContent = marked(this.state.input)

    return (
      <>
        <Editor input={this.state.input} onChange={this.handleChange}/>
        <Previewer content={htmlContent}/>

      </>
    )
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event)

  }

  render() {
    const placeholder = "Enter markdown here"

    return (
      <div id='editor'>
        <h3>Editor</h3>
        <textarea rows="10" cols="50" onChange={this.handleChange} placeholder={placeholder}>

        </textarea>
      </div>
    )
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='preview'>
        <h3>Previewer</h3>
        <div id="preview-box" 
        dangerouslySetInnerHTML={{__html: this.props.content}}></div>
      </div>
    )
  }
}

export default App
