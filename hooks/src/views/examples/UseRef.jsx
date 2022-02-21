import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2){
  return [...s1].map(function(e, i) {
    return `${e}${s2[i] || ""}`
  }).join("")
}

const UseRef = props => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
       count.current++
       myInput2. current.focus()
    }, [value1])

    useEffect (function(){
        count.current++
        myInput1. current.focus()
    }, [value2])
    
    {/* === 👇 HTML 👇 === */}

    return (
        <body className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            {/* === ↓ exemplo #1 ↓ === */}
            <SectionTitle title="Exercício #01" />
            <br />
            <div>
              <span className='text'>Valor: </span>
              <span className='text'>{merge(value1, value2)}</span>
              <span className='text red'>[{count.current}]</span>

            </div>

              <section className='text'></section>

              <input type="text" className="input" 
              ref={myInput1}
              value={value1} onChange={e => setValue1(e.target.value)}  />

              {/* === ↑ exemplo #1 ↑ === */}

              {/* === ↓ Exercício #01 ↓ === */}
            <div>

              <SectionTitle title="Exercício #02" />
              <input type="text" className="input"
                ref={myInput2}
                 value={value2} onChange={e => setValue2(e.target.value)} />


            </div>
              {/* === ↑ Exercício #01 ↑ === */}

        </body>
        
    )
}

export default UseRef
