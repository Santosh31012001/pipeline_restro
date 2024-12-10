import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  SET_PAGE,
  UserActionTypes,
  User,
} from '../types/userTypes'

// Action Creators
export const fetchUsersSuccess = (users: User[]): UserActionTypes => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersError = (error: string): UserActionTypes => ({
  type: FETCH_USERS_ERROR,
  payload: error,
})

export const setPage = (page: number): UserActionTypes => ({
  type: SET_PAGE,
  payload: page,
})
