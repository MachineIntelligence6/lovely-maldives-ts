import create from 'zustand'

const createToggler = create((set) => ({
  isOpen: false,
  toggleHamburger: (state: any) => {
    console.log('state ', state)
    set({ isOpen: state })
  },
}))

export default createToggler
