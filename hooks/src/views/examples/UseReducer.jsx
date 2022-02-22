import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}
function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: 'Aisac'}}
        default:
            return state
    }
}
 
const UseReducer = (props) => {

    const [state, dispet] = useReducer(reducer, initialState)
    const [num, setNum] = useState('0')
    
    {/* === 👇 HTML 👇 === */}
    return (
        <div className="UseReducer">
        
        
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            /> 

            {/* === ↓ Exemplo ↓ === */}

            <SectionTitle title=" Exemplo: " />
            <div className="center">
                

                {state.user ?
                <span className='text'>{state.user.name}</span>
                : <span className='text'>sem usuario</span>}
                
                <span className='text'>{state.number}</span>
                <div>
                    <button className="btn"
                       onClick={() => dispet({type: 'login'})}
                    >login</button>

                
                
                    <button className="btn"
                     onClick={() => dispet({type: 'numberAdd2'})}>+2</button>
                </div>
            </div>

            {/* === ↑ Exemplo ↑ === */}

            <br />

            {/* === ↓ Desafio ↓ === */}
            <SectionTitle title=" Desafio: " />

            <div className="center">
                <p>
                  <input type="number" className="input" value={num} onChange={e => setNum(e.target.value)}/>  
                    <br />

                  <h2>{num} x 25</h2>
                  <label className='text red' >{num * 25}</label>
                    <br />

                  <h2>{num * 25} x 7</h2>
                  <label className='text red'>{num * 25 * 7} </label>
                    <br />

                  <h2>{num * 25 * 7} % 5</h2>
                  <label className='text red'>{num * 25 * 7 / 5}</label>
                </p>
              
            </div>

            {/* === ↑ Desafio ↑ === */}
        </div>
    )
}

export default UseReducer
