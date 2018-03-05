# react
给JSX元素加`class`要用`classname`代替
```js
render(<h1 className="bg">hello world</h1>, document.getElementById('root'))
```
JSX注释的写法
```js
render(<h1 className="bg">{/* hello world */}</h1>, document.getElementById('root'))
```
JSX元素中引用变量是要使用大括号包裹
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
