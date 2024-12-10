import { RootState } from '../../reducers'
import { User } from '../types/userTypes'

export const selectUsers = (state: RootState): User[] => state.user.users
export const selectUserError = (state: RootState): string | null =>
  state.user.error
export const selectCurrentPage = (state: RootState): number => state.user.page
