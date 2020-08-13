import React from 'react';
import PropTypes from 'prop-types'; 
import style from './Profile.module.css';


 const Profile = ({user}) => {
    const {name, tag, location, avatar, stats} = user;
    const { followers, views, likes} = stats

    return (
<div className={style.profile}>
    <div className="description" >

              <img src={avatar} alt={name} className={style.avatar}/>
              <p className={style.name}>{name}</p>
              <p className={style.tag}>@{tag}</p>
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


Profile.defaultProps = {
avatar: 'https://dummyimage.com/600x400/000/fff',
}
Profile.propTypes ={
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};