import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallbackButton = (props) => {

    {/* === 👇 HTML 👇 === */}
    return (
      
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

          {/* === ↓ exemplo #1 ↓ === */}

      <div>
           <button className="btn" onClick={() => inc(6) } >+6</button>

           <button className="btn" onClick={() => inc(12)} >+12</button>

          <button className="btn" onClick={() => inc(18)} >+18</button>
      </div>
      {/* === ↑ exemplo #1 ↑ === */}
    </div>

          

    )
}

export default React.memo(UseCallbackButton)