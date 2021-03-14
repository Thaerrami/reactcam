import React, { useReducer, useRef } from 'react'


export default  function Reduser(){



    const butt=useRef(0)
    const intialstate=0;

    const inc=(state)=>{
        butt.current.disabled=true
        return state+1
    }
    const reduser=(state,action)=>{
        switch(action){
            case "inc":return inc(state)
            case "dec":return state-1
        case   "reset":return state=0
        default : return state
        }
    }

    

    const [value,dispatch] = useReducer(reduser,intialstate)
    return (
        <div className='m-auto'>
            <h1>{value}</h1><br />
            <button  ref={butt} onClick={()=>dispatch('inc')}>increment</button>
            <button onClick={()=>dispatch('dec')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
        </div>
    )
}