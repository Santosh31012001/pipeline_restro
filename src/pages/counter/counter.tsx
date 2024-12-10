'use client'
import React from 'react'

// Redux
import { useDispatch, useSelector } from '@package/redux-setup'

import {
  incrementCounter,
  decrementCounter,
} from '@package/redux-setup/src/counter/reducers/counterReducer'

// Selectors
import { selectCounterValue } from '@package/redux-setup/src/counter/selectors/counterSelectors'

//packages
import { useCustomTheme } from '@package/antd-wrapper/theme/customtheme/CustomThemeContext'

const Counter: React.FC = () => {
  const dispatch = useDispatch()

  const { token } = useCustomTheme()
  const counterValue: number = useSelector(selectCounterValue)

  const handleIncrement = () => {
    dispatch(incrementCounter()) // Increment by 1
  }

  const handleDecrement = () => {
    dispatch(decrementCounter()) // Decrement by 1
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: token.colorP3,
        height: '400px',
      }}
    >
      <h1
        style={{
          color: token.colorP1,
          fontSize: token.headingSizeXLarge,
          fontWeight: token.textWeightLarge,
          margin: token.spacingXSmall,
        }}
      >
        Counter
      </h1>

      <h1
        style={{
          border: `${token.borderUnit}rem solid ${token.colorP2}`,
          borderRadius: `${token.borderRadiusUnit}rem`,
          width: '200px',
          padding: token.spacingLarge,
          margin: token.spacingXXLarge,
        }}
      >
        Counter Value: {counterValue}
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: `${token.borderUnit}rem solid ${token.colorP1}`,
            borderRadius: `${token.borderRadiusUnit}rem`,
            width: '100px',
            height: '30px',
            padding: token.spacingSmall,
            margin: token.spacingXXLarge,
            backgroundColor: token.colorP2,
          }}
          onClick={handleIncrement}
        >
          Increase
        </button>
        <button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: `${token.borderUnit}rem solid ${token.colorP1}`,
            borderRadius: `${token.borderRadiusUnit}rem`,
            width: '100px',
            height: '30px',
            padding: token.spacingSmall,
            margin: token.spacingXXLarge,
            backgroundColor: token.colorP2,
          }}
          onClick={handleDecrement}
        >
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
