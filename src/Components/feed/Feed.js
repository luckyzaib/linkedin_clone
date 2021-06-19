import React from 'react';
import './Feed.css';
import { Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import image from '../../images/profile.jpeg';
import InputOption from './inputOptions/InputOption';
import Post from './post/Post';

const Feed = () => {
    const submit = (e) => {
        e.preventdefault()
    }
    return (
        <div className="feed">
            <div className="parent_container">
                <div className="input_container">
                    <Avatar alt="Remy Sharp" src={image} />
                    <form onSubmit={(e) => submit(e)}>
                        <input type="text" placeholder="Start a post" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="input_options">
                    <InputOption Icon ={PhotoIcon} 
                    title = "Photo" color = "#70B5F9" 
                    />
                    <InputOption Icon ={PlayCircleFilledOutlinedIcon} 
                    title = "Video" color = "#19d32c" 
                    />
                    <InputOption Icon ={EventIcon} 
                    title = "Event" color = "#edc73d" 
                    />
                    <InputOption Icon ={CalendarViewDayIcon} 
                    title = "Write Article" color = "#e06e45" 
                    />
                </div>
            </div>
        <div className="post">
            <Post Avatar = {Avatar} name ="Muhammad Zohaib" />
        </div>
        </div>


    )
}

export default Feed
