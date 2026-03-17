
const FacebookProfile = (props) => {
  const name = props.name;
  const username = props.username;
  const bio = props.bio;
  const isVerified = props.isVerified;
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{username}</li>
        <li>{bio}</li>
        <li>{isVerified ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};

export default FacebookProfile;