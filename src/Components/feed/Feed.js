import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Avatar } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import image from '../../images/profile.jpeg';
import InputOption from './inputOptions/InputOption';
import Post from './post/Post';
import { db, FirebaseGetAllNodeDataWithURL } from '../config/firebase';
import firebase from 'firebase';
const Feed = () => {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([])
    useEffect(() => {
        FirebaseGetAllNodeDataWithURL('posts')
            .then(success => {
                // console.log('it is working', success)
                let data = success.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                // console.log("Real Data", data);
                setPosts(data);
            })
            .catch(error => console.log("error"))

        // db.collection('posts').onSnapshot((snapshot) =>
        //     setPosts(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data(),
        //         }))
        //     ));
        // console.log("Posts===>", posts)
    }, [input])
    const submit = (e) => {
        e.preventDefault()
        if (input != "") {
            db.collection("posts").add({
                name: 'Zohaib',
                description: 'ReactJS Developer',
                message: input,
                // photoURl: image,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            // console.log(posts)

            setInput("");
        }
    }
    return (
        <div className="feed">
            <div className="parent_container">
                <div className="input_container">
                    <Avatar alt="Remy Sharp" src={image} />
                    <form onSubmit={(e) => submit(e)}>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start a post" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="input_options">
                    <InputOption Icon={PhotoIcon}
                        title="Photo" color="#70B5F9"
                    />
                    <InputOption Icon={PlayCircleFilledOutlinedIcon}
                        title="Video" color="#19d32c"
                    />
                    <InputOption Icon={EventIcon}
                        title="Event" color="#edc73d"
                    />
                    <InputOption Icon={CalendarViewDayIcon}
                        title="Write Article" color="#e06e45"
                    />
                </div>
            </div>
            <div className="post">

                {posts.map(({ id, data: { name, description, message } }) => (
                    <Post key={id} Avatar={Avatar} name={name} desc={description} message={message}/>
                ))
                }
                {/* {
                    posts.map((post)=>(
                        <h1>post</h1>
                    ))
                } */}
                {/* 
                <Post Avatar={Avatar} name="Zohaib" desc="test" message="hahaha" />
                <h1>{input}</h1>
                {Object.keys(posts).map((e) => {
                    console.log(posts[e].data.message)
                })}
                {Object.keys(posts).map((e) => (
                    <h1>{posts[e].id}</h1>
    ))} */}
            </div>

        </div>



    )
}

export default Feed
