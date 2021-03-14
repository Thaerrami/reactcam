import React,{useContext, useEffect, useState} from 'react';
import {IdContext} from '../App';
import {ThemeContext} from '../App';


function Form() {
    const name = useContext(IdContext);
    const theme = useContext(ThemeContext);
    const [form,setForm] = useState({username:'',email:''})
    
    const hasNumber=(myString)=>{
        return /\d/.test(myString);
      }

      useEffect(()=>{
       console.log(form.email)   
      },[form.email]);
    return(
    <div>
        {name}
        {!!theme}
        <form >
        <input placeholder='inter usernaem' value={form.username} onChange={(e)=>setForm({username:e.target.value,email:form.email})} />
        <input placeholder='enter email' value={form.email} onChange={(e)=>setForm({username:form.username,email:e.target.value})} />
        <br />
        <div style={{'color':hasNumber(form.username)?'red':''}}> {`${form.username}`} </div>
        <br />
        <div style={{'color':form.email.includes('@')?'':'red'}}>{`${form.email}`}</div>
        </form>
    </div>
    )
}

export default Form; 