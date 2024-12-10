import { combineReducers } from 'redux'

import counterReducer from '../counter/reducers/counterReducer'
import userReducer from '../user/reducers/userReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
