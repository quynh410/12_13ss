import React from "react";
// hàm đi lấy dữ liêyj bằng call API
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}
export default async function page() {
  const users = await getUser();
  return (
    <div>
        <p>render dữ liênụ bên server</p>
      {users.map((item: any) => {
        return <li>{item.name}</li>;
      })}
    </div>
  );
}
