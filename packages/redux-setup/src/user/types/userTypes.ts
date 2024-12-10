import { PayloadAction } from '@reduxjs/toolkit'

// User Type
export interface User {
  id: number
  firstName: string
  lastName: string
}

// State type for the user reducer
export interface UserState {
  users: User[]
  error: string | null
  page: number
}

// type for dispatch actions
export type FETCH_USERS_SUCCESS = PayloadAction<User[]>
export type FETCH_USERS_ERROR = PayloadAction<string>
export type SET_PAGE = PayloadAction<number>
