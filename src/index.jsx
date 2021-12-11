import React, { Component } from "react"
import { render } from "react-dom"

import { createStore, bindActionCreators } from "redux"
import { connect, Provider } from "react-redux"

import "./index.css"

const initialState = {
  count: 0,
}

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const increment = () => ({
  type: INCREMENT,
})

const decrement = () => ({
  type: DECREMENT,
})

const reducer = (state = initialState, action) => {
  const { type } = action
  if (type === INCREMENT) {
    return {
      count: state.count + 1,
    }
  }

  if (type === DECREMENT) {
    return {
      count: state.count - 1,
    }
  }

  return state
}

const store = createStore(reducer)

class Counter extends Component {
  render() {
    const { count, increment, decrement } = this.props

    console.log({ count, increment })
    return (
      <main>
        <p className="count">{count}</p>
        <section>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return state
}

// 
const mapDispatchToProps = {
  increment,
  decrement,
}
// to add the state and reducres to the props 
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,

  document.getElementById("root")
)
