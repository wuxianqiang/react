# react

使用react需要导入两个模块，`react`模块中提供了一些供模板使用的方法，`react-dom`提供了渲染DOM的方法
```js
import React from 'react'
import ReactDOM from 'react-dom'
```

给JSX元素加`class`要用`classname`代替
```js
render(<h1 className="bg">hello world</h1>, document.getElementById('root'))
```
JSX注释的写法
```js
render(<h1 className="bg">{/* hello world */}</h1>, document.getElementById('root'))
```
JSX元素使用JS语法是要使用大括号包裹
```js
let str = ''hello world''
render(<h1 className="bg">{str}</h1>, document.getElementById('root'))
```

大括号取值是取一个有返回值得值，如果多个元素想在`return`后面返回可以加个小括号
```js
let str = () => 'hello world'
render(<h1 className="bg">{str()}</h1>, document.getElementById('root'))
```
 JSX循环遍历数组，遍历时候需要提供一个唯一的`key`属性
 ```js
 let ele = (
  <ul>
    {arr.map((item,index) => <li key={index}>{item}</li>)}
  </ul>
)
render(ele, document.getElementById('root'))
 ```
`<lable></label>`标签的`for`属性要使用`htmlFor`代替
```js
let ele = (
  <div>
    <label htmlFor="username">
    用户名:
    </label>
    <input type="text" id="username"/>
  </div>
)
render(ele, document.getElementById('root'))
```
`style`必须是一个对象的形式
```js
render(<h1 style={{background: 'red'}}>hello world</h1>, document.getElementById('root'))
```
插入HTML
```js
let str = '<div>插入标签</div>'
render(<h1 dangerouslySetInnerHTML={{__html: str}}></h1>, document.getElementById('root'))
```
## 组件
组件名开头大写，声明组件有函数声明和类声明两种形式
```js
function Temp () {
  return (
    <h1>hello world</h1>
  )
}
render(<div><Temp /></div>, document.getElementById('root'))
```
外界可以通过属性的形式来给组件传递参数，函数的参数就是传递的属性，参数是一个对象，里面包含传递过来的属性，既是模板，也照常可以当做函数来用，注意函数里面是没有`this`，react中语法采用严格模式
```js
function Temp (props) {
  return (
    <h1>{props.str}</h1>
  )
}
let str = 'hello world'
render(<div><Temp str={str}/></div>, document.getElementById('root'))
```
类里面有生命周期，函数声明没有生命周期，状态等。首先需要先继承`React.Component`这个类，这个类提供了一些方法供我们使用的方法，组件的结构写在`render`函数里面，函数里面必须要有一个跟节点

```js
class Temp extends React.Component {
  constructor (props) {
    super()
  }
  render() {
    return (
      <h1>
        {this.props.str}
      </h1>
    )
  }
}
let str = 'hello world'
render(<div><Temp str={str}/></div>, document.getElementById('root'))
```
类里面的`this`是当前实例，实例上有`props`属性，里面是组件所有的属性

## 属性校验

属性校验需要安装第三方模块
```js
import PropTypes from 'prop-types'
```
```js
class Temp extends React.Component {
  static propTypes = {
    str: PropTypes.string
  }
  static defaultProps = {
    str: 'hello'
  }
  constructor (props) {
    super()
  }
  render() {
    return (
      <h1>
        {this.props.str}
      </h1>
    )
  }
}
let str = 'hello world'
render(<div><Temp str={str}/></div>, document.getElementById('root'))
```
设置状态
```js
class Temp extends React.Component {
  constructor (props) {
    super()
    this.state = {
      count: {
        number: 1
      }
    }
  }
  handleClick = () => {
    this.setState({count: {number: this.state.count.number + 1}})
  }
  render() {
    return (
      <h1 onClick={this.handleClick}>
        {this.state.count.number}
      </h1>
    )
  }
}
render(<div><Temp /></div>, document.getElementById('root'))
```
## 父组件传递数据给子组件
通过属性的方式给子组件传递的数据
```js
class Parent extends React.Component {
  constructor () {
    super()
    this.state = {
      num: 1
    }
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <div>{this.state.num}</div>
        <Child num={this.state.num}/>
      </div>
    )
  }
}

class Child extends React.Component {
  constructor (props) {
    super()
  }
  render() {
    return (
      <div>
        <div>子组件</div>
        {this.props.num}
      </div>
    )
  }
}
render(<div><Parent></Parent></div>, document.getElementById('root'))
```
## 子组件传递数据给父组件
父组件通过属性传入一个函数给子组件 -> 子自己接受到父组件的参数调用该方法 -> 父组件的方法被子组件调用来修改值
```js
class Parent extends React.Component {
  constructor () {
    super()
    this.state = {
      str: ''
    }
  }
  changeStr = (newStr) => {
    this.setState({str: newStr})
  }
  render() {
    return (
      <div>
        <div>{this.state.str}</div>
        <div>父组件</div>        
        <Child change={this.changeStr}/>
      </div>
    )
  }
}

class Child extends React.Component {
  constructor (props) {
    super()
    this.state = {
      str: 'hello world'
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.str}</div>
        <div onClick={()=>{this.props.change(this.state.str)}}>子组件</div>
      </div>
    )
  }
}
render(<div><Parent></Parent></div>, document.getElementById('root'))
```
## 受控组件
受状态的控制，可以指定默认值，修改状态必须使用`setState`方法才会导致视图重新渲染，下面是双向数据绑定
```js
class Input extends React.Component {
  constructor () {
    super()
    this.state = {
      val: '请输入'
    }
  }
  changeVal = (e) => {
    this.setState({val: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.val} onChange={this.changeVal}/>
        <div>{this.state.val}</div>
      </div>
    )
  }
}

render(<div><Input></Input></div>, document.getElementById('root'))
```
控制多个状态使用同一个方法
```js
class Input extends React.Component {
  constructor () {
    super()
    this.state = {
      a: 1,
      b: 2
    }
  }
  changeVal = (key, e) => {
    this.setState({[key]: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.a} onChange={(e)=>{this.changeVal('a', e)}}/>
        <div>{this.state.a}</div>
        <input type="text" value={this.state.b} onChange={(e)=>{this.changeVal('b', e)}}/>
        <div>{this.state.b}</div>
      </div>
    )
  }
}

render(<div><Input></Input></div>, document.getElementById('root'))
```
## 非受控组件
不受状态控制的组件叫非受控组件，不能指定默认值
```js
class Input extends React.Component {
  constructor () {
    super()
    this.state = {
      a: 1,
      b: 2
    }
  }
  changeVal = (key, e) => {
    console.log(this.refs[key].value)
  }
  render() {
    return (
      <div>
        <input type="text" ref='a' onChange={(e)=>{this.changeVal('a', e)}}/>
        <div>{this.state.a}</div>
        <input type="text" ref='b' onChange={(e)=>{this.changeVal('b', e)}}/>
        <div>{this.state.b}</div>
      </div>
    )
  }
}

render(<div><Input></Input></div>, document.getElementById('root'))
```
## redux
[redux](https://github.com/wuxianqiang/redux)
