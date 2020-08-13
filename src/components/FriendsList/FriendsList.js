import React from 'react';
import style from './FriendList.module.css';

const FriendList =({friends})=>{
     return (

<ul className={style.friendList}>
  {friends.map(({id, isOnline, avatar, name }) => (
      <li className={style.item} key={id}>
      <span className={style.status} style={{backgroundColor: isOnline? "green": "red"}}>{isOnline}</span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
    
  ))}
</ul>


     )
}
export default FriendList;