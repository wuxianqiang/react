class Component {
  createDOMFromString(str) {
    let oDiv = document.createElement('div')
    oDiv.innerHTML = str
    return oDiv.firstElementChild;
  }
  setSate(newSate) {
    Object.assign(this.state, newSate)
    let oldEl = this.el
    let newEl = this._render()
    oldEl.parentNode.replaceChild(newEl, oldEl)
  }
  _render () {
    this.el = this.createDOMFromString(this.render()) //this是下面实例调用的
    this.el.firstElementChild.addEventListener('change', this.change.bind(this), false)
    return this.el
  }
  mount (container) {
    // 用来将元素添加到页面上
    container.appendChild(this._render())
  }
}


class Switch extends Component{
  constructor() {
    super()
    this.state = {
      turn: false
    }
  }
  change() {
    this.setSate({turn: !this.state.turn})
  }
  render() {
    return (`
      <div>
        <input type="checkbox" class="switch ${this.state.turn?'checked':''}">
        <p class="text">${this.state.turn?'开':'关'}</p>
      </div>
    `)
  }
}

let app = document.querySelector('.app')
// app.appendChild(new Switch()._render())

// new Switch().mount(app)

let render = (ele, container) => {
  // 渲染到哪个元素中
  ele.mount(container)
}

render(new Switch, app)

// 实现组件化
// 将字符串进行封装，字符串不能绑定事件
// 将字符串变成DOM
// 提取公共类，如果想渲染DON，可以通过setSate
// 模拟实现一个渲染方法