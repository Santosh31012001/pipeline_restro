import { RootState } from '../../reducers'
import { CounterState } from '../types/counterTypes'

export const selectCounterValue = (state: RootState): number =>
  state.counter.value
