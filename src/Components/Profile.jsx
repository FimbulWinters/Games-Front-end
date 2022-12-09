export const Profile = ({ user }) => {
  return (
    <section>
      <div>
        <img src={user.avatar_url} alt={`user ${user.username}`} />1
        <p>{user.username}</p>
        <p>{user.name}</p>
      </div>
    </section>
  );
};
