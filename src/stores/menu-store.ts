import { createStore } from 'zustand/vanilla'

export type MenuState = {
  isOpen: boolean
}

export type MenuActions = {
  open: () => void
  close: () => void
  toggleMenu: () => void
}

export type MenuStore = MenuState & MenuActions

export const defaultInitState: MenuState = {
  isOpen: false,
}

export const createMenuStore = (initState: MenuState = defaultInitState) => {
  return createStore<MenuStore>()((set) => ({
    ...initState,
    open: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),

    // increase: () => set((state) => ({ count: state.count + 1 })),
  }))
}
