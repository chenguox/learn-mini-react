console.log('====')

// 创建元素节点
function createElement(type) {
  return document.createElement(type)
}

// 创建文本节点
function createTextNode(text) {
  const textNode = document.createTextNode('')
  textNode.nodeValue = text
  return textNode
}

const App = {
  type: 'div',
  props: {
    class: 'App',
    children: [
      {
        type: 'TEXT_ELEMENT',
        children: 'App'
      }
    ]
  }
}

function render(obj) {
  
}

const dom = createElement(App.type)
dom.classList.add('App');
const textNode = createTextNode()
dom.append(textNode)

const root = document.querySelector('#root')
root.append(dom)
