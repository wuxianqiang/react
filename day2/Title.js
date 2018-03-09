import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Title extends Component{
  static contextTypes = {
    col: PropTypes.string
  }
  render() {
    return (
      <div style={{color: this.context.col}}>
        <h1>第二层容器</h1>
      </div>
    )
  }
}