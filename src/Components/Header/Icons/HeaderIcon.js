import React from 'react'
import './HeaderIcon.css'

const HeaderIcon = (props) => {

    return (
        <div className="header_icon">
            {props.Icon &&<props.Icon className = 'icon'/>}
            {props.Avatar && <props.Avatar className = 'icon' src={props.image}/>}
            <p>{props.title}</p>
            
        </div>
    )
}
export default HeaderIcon
