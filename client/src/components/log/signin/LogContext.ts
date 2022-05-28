import React from "react";

interface logContextType {
  loadingLogData: boolean,
  changeLoadingLogData: (value: boolean) => void

  serverSignupMessage: string | null,
  setServerSignupMessage: (value: string | null) => void

  serverSigninMessage: string | null,
  setServerSigninMessage: (value: string | null) => void

  resetPasword: boolean,
  changeResetPassword: (value: boolean) => void

}

export const LogContext = React.createContext<logContextType>({
  loadingLogData: false,
  changeLoadingLogData: () => { },

  serverSignupMessage: '',
  setServerSignupMessage: () => { },

  serverSigninMessage: '',
  setServerSigninMessage: () => { },

  resetPasword: false,
  changeResetPassword: () => { },
});