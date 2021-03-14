import React,{useEffect, useState} from 'react';



function Mouse() {
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)

      useEffect(()=>{
          window.addEventListener('mousemove',(e)=>{
              setx(e.clientX)
              sety(e.clientY)
          })
       console.log(x+"   "+y)   
      },[]);
    return(
    <div>
       
    </div>
    )
}

export default Mouse; 