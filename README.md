# react

JSX元素中引用变量是要使用大括号包裹
```js
let str = 'hello world'
render(<h1 className="bg">{str}</h1>, document.getElementById('root'))
```

大括号取值是取一个有返回值得值
```js
let str = () => 'hello world'
render(<h1 className="bg">{str()}</h1>, document.getElementById('root'))
```
 
