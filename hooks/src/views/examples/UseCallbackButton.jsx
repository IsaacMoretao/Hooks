import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallbackButton = (props) => {

    {/* === ๐ HTML ๐ === */}
    return (
      
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma funรงรฃo memoizada!"
            />

          {/* === โ exemplo #1 โ === */}

      <div>
           <button className="btn" onClick={() => inc(6) } >+6</button>

           <button className="btn" onClick={() => inc(12)} >+12</button>

          <button className="btn" onClick={() => inc(18)} >+18</button>
      </div>
      {/* === โ exemplo #1 โ === */}
    </div>

          

    )
}

export default React.memo(UseCallbackButton)