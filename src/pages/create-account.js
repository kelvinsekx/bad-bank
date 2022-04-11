import React, {useState} from "react"
import './../components/create-account.css'

import {useData} from "./../context-infra/context-hook"

const CreateAccount = ()=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert , setAlert] = useState(false)

    const [c, cc] = useState(0)
    const {createAccount} = useData()

    const Submit = ()=> {
        createAccount(name, email, password)
        cc(c+1)
        setAlert(true)
        setName('')
        setEmail('')
        setPassword('')
        return 
    }

    const handleChange = (e, set)=> {
        setAlert(false)
        return set(e.target.value)
    }
    return (
        <div style={{marginLeft: '2rem'}}>
            <div>
                <h1>CREATE ACCOUNT</h1>
            </div>
            <div className="cra-main">
                {alert && <p>Account successfully created</p>}
                <form onSubmit={e=>e.preventDefault()}>
                    <div className="subForm">
                        <input 
                            placeholder="NAME"
                            value={name}
                            onChange={(e)=>handleChange(e, setName)}
                        />
                        <input 
                            type="email" placeholder="EMAIL"
                            value={email}
                            onChange={(e)=>handleChange(e, setEmail)}
                        />
                        <input 
                            type="password" placeholder="PASSWORD"
                            value={password}
                            onChange={(e)=>handleChange(e, setPassword)}
                        />
                        <button 
                            type="submit"
                            onClick={()=> Submit()}
                        >{c>0 ? 'CREATE ANOTHER ACCOUNT': 'CREATE ACCOUNT'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;