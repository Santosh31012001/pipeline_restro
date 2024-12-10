'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

//packages
import Button from '@package/antd-wrapper/button'

import * as S from './example.styles'
import { fetchUsers } from '@package/redux-setup/src/user/thunks/userThunks'
import {
  selectCurrentPage,
  selectUsers,
  selectUserError,
} from '@package/redux-setup/src/user/selectors/userSelectors'
import { useDispatch, useSelector } from '@package/redux-setup'
import { AppDispatch } from '@package/redux-setup/src/store'

const Example = () => {
  const currentPage = useSelector(selectCurrentPage)
  const userError = useSelector(selectUserError)
  const users = useSelector(selectUsers)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers(currentPage))
  }, [useDispatch])

  return (
    <S.ExampleWrapper>
      <S.ExamplePageHeading>Example Page : {currentPage}</S.ExamplePageHeading>
      <Link href="/" passHref>
        <Button color="default" variant="link">
          {/* Go Back To Home {useSelector(selectCurrentPage)} */}
          {userError ? (
            <h1>{userError}</h1>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={Math.random()}>{user.firstName}</li>
              ))}
            </ul>
          )}
        </Button>
      </Link>
    </S.ExampleWrapper>
  )
}

export default Example
