class Switch {
  constructor () {
    // 保存的状态
    this.state = {turn: false}
  }
  // 将字符串封装：字符串不能绑定事件，要将字符串变成DOM
  createDOMFromString (str) {
    let oDiv = document.createElement('div')
    oDiv.innerHTML = str
    return oDiv.firstElementChild;
  }
  change () {
    // this就是实例
    Object.assign(this.state, {turn: this.state.turn})
    // 使用对象覆盖的方法可以不影响其他属性
    let oldEl = this.el
    let newEl = this.render()
    // 渲染一个新的元素替换掉之前
    oldEl.parentNode.replaceChild(newEl, oldEl)
  }
  render () {
    this.el = this.createDOMFromString(`
      <div>
        <input type="checkbox" class="switch ${this.state.turn?'checked':''}">
        <p class="text">${this.state.turn?'开':'关'}</p>
      </div>
    `)
    this.el.firstElementChild.addEventListener('change', this.change.bind(this), false)
    return this.el
  }
}

let app = document.querySelector('.app')
app.appendChild(new Switch().render())