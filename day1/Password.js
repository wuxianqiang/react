import React, { Component } from 'react'
import local from './Local'
//  存一个数据将数据放入输入框里

class Password extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.state.password} onChange={()=>{}}/>
      </div>
    )
  }
}


export default local('password')(Password)