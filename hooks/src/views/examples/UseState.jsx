import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Nome:")
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            {/* ↓ === Exercicio #01 === ↓ */}
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>

                    <button className="btn"
                     onClick={() => setCount(count - 1)}>-1</button>

                    <button className="btn"
                     onClick={() => setCount(count + 1)}>+1</button>

                </div>
            </div>
            {/* ↑ === Exercicio #01 === ↑ */}

            {/* ↓ === Exercicio #02 === ↓ */}

            <SectionTitle title="Exercício #02" />
            <input className='input'
             value={name} onChange={e => setName(e.target.value)}/>
             <span className='text'>{name}</span>

             {/* ↑ === Exercicio #02 === ↑ */}
        </div>
    )
}

export default UseState
