"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  // call API lấy dữ liệu để render
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // đi gọi API
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    getData();
    // .then((response)=>{
    //     // lấy dữ liệu trả về
    //     return response.json()
    // })
  }, []);
  return (
    <div>
      <p>render dữ liệu bên client</p>
      <ul>
        {users.map((item:any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
