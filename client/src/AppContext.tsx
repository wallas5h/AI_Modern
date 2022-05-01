import { createContext } from "react";
import { LoginTypes } from "./components/login/Login";

export interface AppContextType {
  loginVisible: boolean
  changeLoginVisible: (value: boolean) => void
  isUserLogged: boolean
  changeUserLogged: (value: boolean) => void
  loginMode: LoginTypes,
  changeLoginMode: (value: LoginTypes) => void,
  userName: string,
  changeUserName: (value: string) => void
}

export const defaultObject = {
  loginVisible: false,
  changeLoginVisible: () => { },

  loginMode: LoginTypes.SIGNIN,
  changeLoginMode: () => { },

  isUserLogged: false,
  changeUserLogged: () => { },

  userName: '',
  changeUserName: () => { },

}

export const AppContext = createContext<AppContextType>(defaultObject)