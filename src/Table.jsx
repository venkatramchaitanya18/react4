// UserTable.js

import  { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make an API request to fetch user data
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users); // Assuming the API response is an array of user objects
      });
  }, []);

  return (
    <div>
      <h2>User Table</h2>
      <table className="border border-collapse">
        <thead>
          <tr className="border">
            <th>SNo</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border">
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  width="50"
                  height="50"
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
