import React,{useEffect, useState,useRef} from 'react';
import './css/calender.css';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

function Calender() {
    const dates=[
        "Apr-5",
        "Feb-3",
        "Sep-6",
        "Jan-12",
        "Mar-11",
        "Oct-15",
        "Des-9",
        "Apr-15",
        "Feb-31",
        "Sep-16",
        "Jan-2",
        "Mar-10",
        "Oct-5",
        "Des-19"
    ]

    return (
        <div className='ground'>
           {dates.map((date,index)=><Day date={date} id={index} />)}
        </div>
    )
}

 function Day(props) {
     const [vis, setvis] = useState(false)
     const month=props.date.split('-')
     
     useEffect(()=>{
       vis?$(`#${props.date}`).show(500):$(`#${props.date}`).hide(500)
    })     

    

    $(`#${props.date}`)
    return (
        <div className='day-button' onClick={()=>setvis(!vis)}>
            <span>{month[0]}</span>
            <span>{month[1]}</span>
            <Details date={props.date} vis={vis}   />
        </div>
    )
}


function Details(props){
    const bl = useRef(null)
    // var position=;
    // var left=
    // $(`#${props.date}`).css('left',$(`#${props.date}`).parent().position().left-$(`#${props.date}`).position().left)
    // console.log(position+''+ left)
    useEffect(()=>{
        return $(`#${props.date}`).css('left',50-$(`#${props.date}`).parent().position().left )
    },
    [props.date])
    return(
        <div className='det' ref={bl} id={props.date} >
            <div> boardme Founders meetings </div>
            <p> 4 Sep 2021 - 13:50 to 22:20 </p>
            <div className="zoom-but">
                <p>Join Zoom Meeting</p>
                <p>Meeting info</p>
            </div>
            <Attendies  />
        </div>
    )
}


function Attendies(){
    const [attendies, setatt] = useState([])
    useEffect(()=>{
       const atts=[{'name':'person@email.com','check':true},
                  {'name':'art@email.com','check':true},
                  {'name':'love@email.com','check':false},
                  {'name':'technology@gmail.com','check':false}
                ]
        setatt(atts)
    },
    [])
    
    return(
        <div className='att'>
            <b>Attendies</b>
            <ul>
                {attendies.map( (att,index) =><li key={index} className='attespeace'>
                {checker(att.check)}
                    <p>{att.name}</p>
                </li>
                    )}
            </ul>
        </div>
    )
}

function checker(check){
    if(check) 
    return <span className='checked'></span>
    else 
    return <span className='notchecked'> ?</span>
}

export default Calender
