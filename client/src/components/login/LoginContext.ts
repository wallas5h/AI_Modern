import React from "react";

interface loginContextType {
  loadingLogData: boolean,
  changeLoadingLogData: (value: boolean) => void

  serverSignupMessage: string | null,
  setServerSignupMessage: (value: string | null) => void

  serverSigninMessage: string | null,
  setServerSigninMessage: (value: string | null) => void

}

export const LoginContext = React.createContext<loginContextType>({
  loadingLogData: false,
  changeLoadingLogData: () => { },

  serverSignupMessage: '',
  setServerSignupMessage: () => { },

  serverSigninMessage: '',
  setServerSigninMessage: () => { },
});