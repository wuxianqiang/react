import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from './Title'

export default class Header extends Component{
  static contextTypes = {
    col: PropTypes.string
    // 类型要对应
  }
  render() {
    return (
      <div style={{color: this.context.col}}>
        <h1>第一次子容器</h1>
        <Title />
      </div>
    )
  }
}