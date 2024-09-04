import React from "react";

async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const posts = await getPost();
  return (
    <div>
      <b className="text-[30px]">Danh Sách bài viết (SSR)</b>
      {posts.slice(0, 4).map((post: any) => (
        <ul key={post.id}>
          <li> <b>{post.title}</b></li>
          <li>{post.body.substring(0, 100)}...</li>
          <br />
          <hr />
        </ul>
      ))}
    </div>
  );
}


      {/* 
      reactjs
      cơ chế render dữ liệu Reactjs - next js
       hỗ trợ vừa render dữ liệu ở phía client và phía server
       Next js : chia thành 2 kiểu :
       + server components : mặc định khi tạo trang 
       + client componenst : phải dùng use client -> khi nào nên dùng ? : khi mà mình cần tương tác dữ liệu dùng (useState, useEffect,các sự kiện onClick, onChange,......) bắt buộc phải dùng useClient

       Các render dữ liệu trong nextjs :
       I. Render dữ liệu ở phía server

      */}