import React from 'react';
import './Gadget.css';
import { Avatar } from '@material-ui/core'

const Gadget = ({ name, desc, photoURL }) => {
    return (
        <div className='gadget'>
            <Avatar src = {photoURL}/>
            <div className="main_container">
                <div className="name_container">
                    <h3>{name}</h3>
                    <h5>{desc}</h5>
                </div>
                <button>+ Follow</button>
            </div>
        </div>
    )
}

export default Gadget
