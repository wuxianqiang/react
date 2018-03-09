import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'


// 希望APP中定义一个color的状态，希望把状态给title来用
// context上下文当前组件下获取其他子组件的上下文

// 在父级要定义上下文 ，先表明向下文的类型
// 在父级中获取儿子的上下文

export default class App extends Component {
  static childContextTypes = {
    // 定义儿子的上下文类型
    color: PropTypes.string
  }
  getChildContext () {
    // 这里返回的结果就是儿子的上下文
    return {
      col: this.state.color
    }
  }
  constructor () {
    super()
    this.state = {
      color: 'red'
    }
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}