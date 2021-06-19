import React from 'react'
import './PostOption.css'

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const PostOptions = ({Icon,heading}) => {
    return (
        <div className="option">
            <Icon style ={{color:"gray"}} />
            <h4>{heading}</h4>

        </div>
    )
}

export default PostOptions
