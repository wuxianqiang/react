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
    this.el = this.createDOMFromString(this.render()) //this是实例调用的
    this.el.firstElementChild.addEventListener('change', this.change.bind(this), false)
    return this.el
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
app.appendChild(new Switch()._render())