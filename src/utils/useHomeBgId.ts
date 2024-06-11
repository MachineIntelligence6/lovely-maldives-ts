import { useState, useEffect } from 'react'

const useHomeBgId = () => {
  const [homeBgId, setHomeBgId] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedHomeBgId = localStorage.getItem('homeBgId')
      if (storedHomeBgId) {
        setHomeBgId(JSON.parse(storedHomeBgId))
      }
    }
  }, [])

  return homeBgId as any
}

export default useHomeBgId
