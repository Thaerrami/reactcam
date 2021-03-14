import React,{useEffect} from 'react'

import './sidebar.css'

function Sidebar(props) {
    const defaultmenu=['main','choice1','choice 2','choice 3','choice 4']

    useEffect(()=>{
        actions()
        console.log(props)
        if(props){
            document.body.style.setProperty('--bg-main',   props.main?props.main:'#3871c5');
            document.body.style.setProperty('--bg-second', props.secound?props.secound:'#141061');
            document.body.style.setProperty('--bg-hover',  props.hover?props.hover:'#13407a');
            document.body.style.setProperty('--bg-text',   props.text?props.text:'#000000');
            document.body.style.setProperty('--font-size',   props.fontSize?props.fontSize:'2em');
            }
    });

    return (
        
        <div id='side'>
            <ul className="nav">
                {
                props.menulist?props.menulist.map((title,i)=>(
                     <li key={i}> <a href="#"> {title} </a> </li>)
                     ):
                defaultmenu.map((title,i)=>(
                <li key={i}> <a href="#"> {title} </a> </li>)
                )
                }
            
             <button className="nav-toggle " id="nav-toggle">&#10054;</button>
         </ul>

        </div>
    )
}

export default Sidebar


const actions=()=>{

    let nav = document.querySelector('.nav')

    let li = nav.querySelectorAll('li')
    
    let group_size = Math.ceil(li.length / 3)
    
    let group_index = 0
    
    li.forEach((e, i) => {    
        e.setAttribute('data-group', group_index)
    
        group_index = i % group_size === group_size - 1 ? group_index + 1 : group_index
    })
    
    document.querySelector('#nav-toggle').onclick = (e) => {
        e.preventDefault()
    
        console.log(li[0].getBoundingClientRect())
        
        li.forEach((el, i) => {
            let top = el.getBoundingClientRect().top + el.getAttribute('data-group') * -17 
    
            el.style.setProperty('--top', top)
            el.style.setProperty('--delay-close', `${i * 0.1}s`)
            el.style.setProperty('--delay-open', `${(li.length - i) * 0.1}s`)
        })
    
         nav.classList.toggle('nav-closed')
    
        e.stopPropagation()

    }
    document.querySelector('#nav-toggle').click()
}
