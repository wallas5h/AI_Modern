import React from "react";

interface loginContextType {
  loadingLogData: boolean,
  changeLoadingLogData: (value: boolean) => void
}

export const LoginContext = React.createContext<loginContextType>({
  loadingLogData: false,
  changeLoadingLogData: () => { },
});