import { useEffect } from 'react'

export function TitleHook(title) {
  return (
    useEffect(() => {
      document.title=title
    }, [title])
    
  )
}

