# react

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
外界可以通过属性的形式来给组件传递参数，函数的参数就是传递的属性
```js
function Temp (props) {
  return (
    <h1>{props.str}</h1>
  )
}
let str = 'hello world'
render(<div><Temp str={str}/></div>, document.getElementById('root'))
```
类里面有生命周期，函数声明没有生命周期，状态等


首先需要先继承`React.Component`这个类，这个类提供了一些方法供我们使用的方法，组件的结构写在`render`函数里面，函数里面必须要有一个跟节点

在构造函数中获取属性
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
