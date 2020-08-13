import React from 'react';
// import user from '../../user.json';
import style from './Profile.module.css';


 const Profile = ({user}) => {
    const {name, tag, location, avatar, stats} = user;
    const { followers, views, likes} = stats

    return (
<div className={style.profile}>
    <div className="description" >

              <img src={avatar} alt={name} className={style.avatar}/>
              <p className={style.name}>{name}</p>
              <p className={style.tag}>@              {tag}</p>
              <p className={style.tag}>{location}</p>

        </div>
        
        <ul className={style.list}>
            <li className={style.listItem}>
                <span className={style.tag}>Followers</span>
               <span className={style.name}>{followers}</span>
            </li>
            <li className={style.listItem}>
                <span className={style.tag}>Views</span>
               <span className={style.name}>{views}</span>
            </li>
            <li className={style.listItem}>
                <span className={style.tag}>Likes</span>
               <span className={style.name}>{likes}</span>
            </li>
        </ul>

</div>
    );

}
export default Profile;