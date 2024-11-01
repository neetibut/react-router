import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <ul>
          <li>
            <Link to="info">Profile Info</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
}

export default Profile;
