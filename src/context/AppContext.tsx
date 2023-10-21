import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react'

type Props = {
  children: React.ReactNode
}

interface IAppContext {
  isLogged: boolean
  setIsLogged: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const sharedData: IAppContext = useMemo(
    () => ({
      isLogged,
      setIsLogged,
    }),
    [isLogged, setIsLogged],
  )

  return (
    <AppContext.Provider value={sharedData}>{children}</AppContext.Provider>
  )
}
