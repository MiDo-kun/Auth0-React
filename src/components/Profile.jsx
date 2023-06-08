import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article id='profile'>
        {user?.picture && <img id="profile-img" src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) => <li key={i}><span id='property'>{objKey}</span>: {user[objKey]} </li>)}
        </ul>
      </article>
    )
  )
}

export default Profile
