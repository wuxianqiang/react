import React, { Component } from 'react'
import local from './Local'

class Username extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={()=>{}}/>
      </div>
    )
  }
}

// 告诉local将username取出来，以属性的方式传递个给uaername
// mixin混合，我们可以把公共逻辑提取处理
export default local('username')(Username)
