import React from 'react'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import SendIcon from '@material-ui/icons/Send';
import PostOptions from './options/PostOptions';

const Post = ({ Avatar, name }) => {
    return (
        <div className='post_content'>
            <div className="post_header">
                <Avatar />
                <div className="written_profile">
                    <h3 className='name'>{name}</h3>
                    <p>Description</p>
                </div>
            </div>
            <div className="post_body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut harum cumque possimus quos eaque debitis vero nam! Doloribus, distinctio non perferendis iusto ipsa nihil nemo sequi enim ea deserunt.</p>
            </div>
            <div className="post_options">
                <PostOptions Icon={ThumbUpAltOutlinedIcon} heading="Like"/>
                <PostOptions Icon={MessageOutlinedIcon} heading="Comment"/>
                <PostOptions Icon={RedoOutlinedIcon} heading="Share"/>
                <PostOptions Icon={SendIcon} heading="Send"/>
            </div>

        </div>

    )
}

export default Post
