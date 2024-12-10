import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk' // we need to check work on that
import { Provider } from 'react-redux'

import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export { store, Provider }
export type AppDispatch = typeof store.dispatch
