import { useEffect } from "react";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const addUser = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      });
  };

  return (
    <div>
      <h1>This is User Page {users.length}</h1>
      <div>
        <form onSubmit={handleCreateUser} action="">
          <input type="text" name="name" placeholder="Enter Name" id="" />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id=""
          />
          <br />
          <input type="submit" value="Create New User" />
        </form>
      </div>
      <div>
        {users.map((na) => (
          <p key={na.id}>
            {na.id}. {na.name} {na.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
