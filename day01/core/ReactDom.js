import React from './React.js'

const ReactDOM = {
  createRoot(container) {
    return {
      render(el) {
        React.render(container, el)
      }
    }
  }
}

export default ReactDOM