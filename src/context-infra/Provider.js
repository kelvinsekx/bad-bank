import React, { useState} from "react"
import {v4} from "uuid"

import PsuedoData from "./psuedodata.json"
import {BankContext} from "./context-hook"

const id = v4()
export default function ContextProvider ({children}){
    const [data, setData] = useState(PsuedoData)

    const createAccount = (email, name, password)=> {
        setData([
            ...data, {
                id, email, name, password, balance: 0
            }
        ])
        console.log(data)
    }

    const updateAccount = (email, name, password, balance, d)=> {
        balance = balance + d
        setData(
            [
                ...data, {email, name, password, balance}
            ]
        )
    }

    const withdraw = (email, name, password, balance, w)=> {
        balance = balance - w
        setData(
            [
                ...data, {email, name, password, balance}
            ]
        )
    }

    return (
        <BankContext.Provider value={{
            data,
            createAccount,
            updateAccount,
            withdraw
        }}>
            {children}
        </BankContext.Provider>
    )
}