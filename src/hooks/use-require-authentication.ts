import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export function useRequireAuthentication() {
  const { isAuthenticated, isLoading, user } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/welcome')
  }, [isAuthenticated, isLoading, navigate])

  return { authorized: Boolean(user) }
}
