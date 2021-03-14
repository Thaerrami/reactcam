import React,{useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../App';


const Button=()=>{
    const theme = useContext(ThemeContext);
    const [cnt,setCnt]=useState(true);
    return (
        
      <button onClick={()=>setCnt(!cnt)} style={{'background':theme =='dark'?'#777':'#eee','color':cnt?'green':'red','border':'0px','borderRadius':'3px','padding':'10px'}}>{cnt?'subscribed':'subscribe'}</button>
    )
  }

  export default Button;