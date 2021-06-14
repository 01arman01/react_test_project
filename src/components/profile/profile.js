import React from "react";
import s from './profile.module.css'
import img from '../../images/image.jpeg'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo  />
            <MyPosts
                addPost={props.addPost}
                newPostText={props.profileData.newPostText}
                updateNewPostText={props.updateNewPostText}
                postsData={props.profileData.postsData}/>

        </div>

    );

}

export default Profile