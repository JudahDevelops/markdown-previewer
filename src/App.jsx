import { useState } from 'react'
import React, { Component } from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Editor />
        <Previewer />
      </>
    )
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    const placeholder = "Enter markdown here"

    return (
      <div>
        <h3>Editor</h3>
        <textarea rows="10" cols="50">
          {placeholder}
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
      <div>
        <h3>Previewer</h3>
      </div>
    )
  }
}

export default App
