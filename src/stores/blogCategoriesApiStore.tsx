import create from 'zustand'
import { getBlogCategories } from '@/utils/api-requests/blog-categories.request'

const useCategoriesStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,
  fetchData: async () => {
    try {
      set({ loading: true, error: null })
      const res = await getBlogCategories()
      const data = await res.data
      if (data?.status === 200) {
        set({ categories: data?.data, loading: false })
      } else {
        set({ error: data?.message, loading: false })
      }
    } catch (error: any) {
      console.error('Error fetching data:', error)
      set({ error: error.message, loading: false })
    }
  },
}))

export default useCategoriesStore
