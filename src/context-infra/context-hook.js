import { createContext, useContext} from "react"


export const BankContext = createContext();
export const useData = () => useContext(BankContext)
