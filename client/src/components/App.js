import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'




export default props => {
 

  return (
    <Provider store={store}>
      <div>
      nil
      </div>
    </Provider>
  )
}