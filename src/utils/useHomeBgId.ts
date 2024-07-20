/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react'
import { getHomeBgRequest } from './api-requests/home.request'

const useHomeBgId = () => {
  const [homeBgId, setHomeBgId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== 'undefined') {
        const storedHomeBgId = localStorage.getItem('homeBgId')
        if (storedHomeBgId) {
          setHomeBgId(JSON.parse(storedHomeBgId))
        } else {
          try {
            const res = await getHomeBgRequest()
            const data = res?.data?.data
            if (res?.status === 200) {
              localStorage.setItem('homeBgId', JSON.stringify(data?.id))
              setHomeBgId(data?.id)
            }
          } catch (error: any) {
            console.log('error ', error)
          }
        }
      }
    }

    fetchData()
  }, [])

  return homeBgId as any
}

export default useHomeBgId
