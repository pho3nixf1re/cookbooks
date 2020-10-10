import { useAuth0 } from '@auth0/auth0-react'
import React, { Fragment } from 'react'
import { useMyCookbooksQuery } from './helpers'

export function Cookbooks() {
  const { user } = useAuth0()

  const { books, loading } = useMyCookbooksQuery({ userId: user.sub })

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h2>My cookbooks</h2>
      <dl>
        {books?.map(({ id, name, description }) => (
          <Fragment key={id}>
            <dt>{name}</dt>
            <dd>{description}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  )
}
