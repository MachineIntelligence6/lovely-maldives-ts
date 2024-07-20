import create from 'zustand'

const createToggler = create((set) => ({
  isOpen: false,
  toggleHamburger: (state: any) => {
    set({ isOpen: state })
  },
}))

export default createToggler
