import React from "react"
import "./../components/all-data.css"

import { useData } from "./../context-infra/context-hook"

const AllData = () => {
    const { data } = useData()
    console.log(data)
    return (
        <>
            <div>
                <h1>ALL DATA</h1>
            </div>
            <div className="table-main">
                <div role='table' className="table">
                    <div role="table-header" className="table-row border-bottom">
                        <div>Email</div>
                        <div>Name</div>
                        <div>Password</div>
                    </div>
                    {
                        data.map(
                            (e, i) => <>
                                <div role="table-row" className="table-row" key={i}>
                                    <div>{e.name}</div>
                                    <div>{e.email}</div>
                                    <div>{e.password}</div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default AllData;