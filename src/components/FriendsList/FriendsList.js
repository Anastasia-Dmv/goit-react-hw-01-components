import React from 'react';

const FriendList =({friends})=>{
     return (

<ul class="friend-list">
  {friends.map(({id, isOnline, avatar, name }) => (
      <li class="item" key={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
    
  ))}
</ul>


     )
}
export default FriendList;