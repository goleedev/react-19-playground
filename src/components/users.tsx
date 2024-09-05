import React, { use } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
};

const UserCard: React.FC<User> = ({ name, email }) => (
  <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
    <h2 className="text-xl font-bold">{name}</h2>
    <p>{email}</p>
  </div>
);

export default function Users() {
  const users = use(fetchUsers());

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard {...user} />
        </li>
      ))}
    </ul>
  );
}
