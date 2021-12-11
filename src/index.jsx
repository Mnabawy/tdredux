import React, { Component } from "react"
import { render } from "react-dom"

import { createStore } from "redux"
import { connect, Provider } from "react-redux"

import "./index.css"

const initialState = {
  count: 0,
}

const INCREMENT = "INCREMENT"

const incrementValue = () => ({
  type: INCREMENT,
})

const reducer = (state = initialState, action) => {
  const { type } = action
  if (type === INCREMENT) {
    return {
      count: state.count + 1,
    }
  }

  return state
}

const store = createStore(reducer)

class Counter extends Component {
  render() {
    const { count, increment } = this.props

    console.log({ count, increment })
    return (
      <main>
        <p className="count">{count}</p>
        <section>
          <button onClick={increment}>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(incrementValue())
    },
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,

  document.getElementById("root")
)
