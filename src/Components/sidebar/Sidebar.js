import React from 'react'
import './Sidebar.css'
import image from '../../../src/images/back.jpg'
import ImageAvatars from './avatar/Avatar'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img src={image} />
                <ImageAvatars />
                <span>Muhammad Zohaib</span>
                <p>Web Page Manager at
                International Center
                for Chemical and
                      Biological Science</p>
            </div>
            <div className="connection">
                <span className="hehe">
                    <span>
                        <p>Connections</p>
                        <p className="blue">42</p>
                    </span>
                    <h5>Grow your Network</h5>
                </span>
                <span className="lastchild">
                    <p>Who viewed your profile</p>
                    <p className="blue">17</p>
                </span>
            </div>
        </div>
    )
}

export default Sidebar
