import React, { useEffect, useState } from 'react'

export function useAuth(key) {
  const token = localStorage.getItem(key)

  return [
    token,
    () => {
      alert('Expired!')
    },
  ]
}

export const WithAuth = ComposedComponent => {
  const [authenticated, setAuth] = useState(false)
  const [token, expiredCallback] = useAuth('auth')

  useEffect(() => {
    if (token) {
      setAuth(true)
    } else {
      expiredCallback()
    }
  }, [expiredCallback, token])

  return props => <>{authenticated ? <ComposedComponent {...props} /> : null}</>
}
