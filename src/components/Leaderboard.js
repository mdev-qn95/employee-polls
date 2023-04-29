import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  const usersArr = Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  );
  return (
    <div className="leaderboard">
      <table className="styled-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {usersArr.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex">
                  <img src={user.avatarURL} alt="" width="20px"></img>
                  <div>
                    <span className="user-name">{user.name}</span>
                    <br />
                    <span className="user-id">{user.id}</span>
                  </div>
                </div>
              </td>
              <td>4</td>
              <td>2</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});
export default connect(mapStateToProps)(Leaderboard);
