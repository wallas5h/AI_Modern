import { createContext } from "react";
import { LoginTypes } from "./components/login/Login";

export interface AppContextType {
  loginVisible: boolean
  changeLoginVisible: (value: boolean) => void
  isUserLogged: boolean
  changeUserLogged: (value: boolean) => void
  loginMode: LoginTypes,
  changeLoginMode: (value: LoginTypes) => void,
}

export const defaultObject = {
  loginVisible: false,
  changeLoginVisible: () => { },

  loginMode: LoginTypes.SIGNIN,
  changeLoginMode: () => { },

  isUserLogged: false,
  changeUserLogged: () => { },
}

export const AppContext = createContext<AppContextType>(defaultObject)