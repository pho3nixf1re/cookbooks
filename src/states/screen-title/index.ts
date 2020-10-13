import { TypePolicy, makeVar } from '@apollo/client'
import { useEffect } from 'react'

export const screenTitle = makeVar('')

export const policy: Record<string, TypePolicy> = {
  Query: {
    fields: {
      screenTitle: {
        read() {
          return screenTitle()
        },
      },
    },
  },
}

export function useScreenTitle(title?: string) {
  const setScreenTitle = (newTitle: string) => screenTitle(newTitle)

  useEffect(() => {
    title && screenTitle(title)
  }, [title])

  return { operations: { setScreenTitle } }
}
