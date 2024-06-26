import create from 'zustand'
import { getThemeConfigRequest } from '@/utils/api-requests/theme.request'

const useApiStore = create((set) => ({
  themeData: null,
  loading: false,
  error: null,
  fetchData: async () => {
    try {
      set({ loading: true, error: null })
      const res = await getThemeConfigRequest()
      const data = await res.data
      console.log('zustands data => ', data)
      if (data?.status === 200) {
        set({ themeData: data?.data, loading: false })
      } else {
        set({ error: data?.message, loading: false })
      }
    } catch (error: any) {
      console.error('Error fetching data:', error)
      set({ error: error.message, loading: false })
    }
  },
}))

export default useApiStore
