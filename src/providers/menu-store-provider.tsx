import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { type MenuStore, createMenuStore } from '@/stores/menu-store'

export const MenuStoreContext = createContext<StoreApi<MenuStore> | null>(null)

export interface MenuStoreProviderProps {
  children: ReactNode
}

export function MenuStoreProvider({ children }: MenuStoreProviderProps) {
  const storeRef = useRef<StoreApi<MenuStore>>()
  if (!storeRef.current) {
    storeRef.current = createMenuStore()
  }

  return (
    <MenuStoreContext.Provider value={storeRef.current}>
      {children}
    </MenuStoreContext.Provider>
  )
}

// eslint-disable-next-line no-unused-vars
export const useMenuStore = <T,>(selector: (store: MenuStore) => T): T => {
  const menuStoreContext = useContext(MenuStoreContext)

  if (!menuStoreContext) {
    throw new Error(`useMenuStore must be use within MenuStoreProvider`)
  }

  return useStore(menuStoreContext, selector)
}
