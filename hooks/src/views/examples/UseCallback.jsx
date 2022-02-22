import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    function inc(delta) {
        setCount(count + delta)
    }

    {/* === 👇 HTML 👇 === */}
    return (

        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
          {/* === ↓ exemplo #1 ↓ === */}

            <div className='center'>
                <span className='text'>{count}</span>

                <div>
                   <button className="btn" onClick={() => inc(6) } >+6</button>

                   <button className="btn" onClick={() => inc(12)} >+12</button>

                   <button className="btn" onClick={() => inc(18)} >+18</button>
                </div>

            </div>

          {/* === ↑ exemplo #1 ↑ === */}

        </div>
    )
}

export default UseCallback
