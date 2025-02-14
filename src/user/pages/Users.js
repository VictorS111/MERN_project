import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Manuel",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
