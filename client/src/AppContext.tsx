import { createContext } from "react";
import { LogTypes } from "./components/log/signin/Login";

export interface AppContextType {
  loginVisible: boolean
  changeLoginVisible: (value: boolean) => void
  isUserLogged: boolean
  changeUserLogged: (value: boolean) => void
  loginMode: LogTypes,
  changeLoginMode: (value: LogTypes) => void,
  userName: string,
  changeUserName: (value: string) => void,
  userId: string,
  changeUserId: (value: string) => void
}

export const defaultObject = {
  loginVisible: false,
  changeLoginVisible: () => { },

  loginMode: LogTypes.SIGNIN,
  changeLoginMode: () => { },

  isUserLogged: false,
  changeUserLogged: () => { },

  userName: '',
  changeUserName: () => { },

  userId: '',
  changeUserId: () => { },

}

export const AppContext = createContext<AppContextType>(defaultObject)