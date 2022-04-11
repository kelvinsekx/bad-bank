import React, {useState} from "react"
import "./../components/deposit.css"

import {useData} from "./../context-infra/context-hook"

const Deposit = ()=> {
    const [v, sV] = useState()
    const {data, updateAccount} = useData()
    const u = data.length - 1
    let presentUser = data[u]
    return (
        <>
            <div>
                <h1>DEPOSIT</h1>
            </div>
            <div>
                <div role="form" className="deposit-form">
                    <div className="flex row balance deposit-row">
                        <span>BALANCE</span>
                        <span className="font-bolder">{presentUser.balance}</span>
                    </div>
                    <div className="flex column deposit-row">
                        <span>DEPOSIT AMOUNT</span>
                        <input 
                            value={v}
                            onChange={e=> sV(e.target.value)}/>
                    </div>
                    <button
                        onClick={
                            ()=> {
                                updateAccount(presentUser.name, presentUser.email, presentUser.password, presentUser.balance, Number(v))
                                alert(`${v} successfully deposited into your account`)
                        sV('')
                        }}
                    >DEPOSIT</button>
                </div>
            </div>
        </>
    )
}

export default Deposit;