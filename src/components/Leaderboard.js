import login from "../images/login.png";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <table class="styled-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex">
                <img src={login} alt="" width="20px"></img>
                <div>
                  <span className="user-name">Hello</span>
                  <br></br>
                  <span className="user-id">World</span>
                </div>
              </div>
            </td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              <div className="flex">
                <img src={login} alt="" width="20px"></img>
                <div>
                  <span className="user-name">Hello</span>
                  <br></br>
                  <span className="user-id">World</span>
                </div>
              </div>
            </td>
            <td>4</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
