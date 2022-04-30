import { createContext } from "react";

export interface AppContextType {
  loginVisible: boolean
  changeLoginVisible: (value: boolean) => void
  isUserLogged: boolean
  changeUserLogged: (value: boolean) => void
}

export const defaultObject = {
  loginVisible: false,
  changeLoginVisible: () => { },
  isUserLogged: false,
  changeUserLogged: () => { },
}

export const AppContext = createContext<AppContextType>(defaultObject)