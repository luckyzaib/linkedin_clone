import React from 'react'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import SendIcon from '@material-ui/icons/Send';
import PostOptions from './options/PostOptions';
import image from '../../../images/profile.jpeg';


const Post = ({ Avatar, name, desc, message }) => {
    return (
        <div className='post_content'>
            <div className="post_header">
                <Avatar src={image} />
                <div className="written_profile">
                    <h3 className='name'>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_options">
                <PostOptions Icon={ThumbUpAltOutlinedIcon} heading="Like" />
                <PostOptions Icon={MessageOutlinedIcon} heading="Comment" />
                <PostOptions Icon={RedoOutlinedIcon} heading="Share" />
                <PostOptions Icon={SendIcon} heading="Send" />
            </div>

        </div>

    )
}

export default Post
