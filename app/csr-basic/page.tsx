"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    getData();
  }, []);
  return (
    <div>
      <p>Bài 3</p>
      <b>Danh sách người dùng (CSR)</b>
      {users.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
